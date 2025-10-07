#!/bin/bash
# Validate SDK structure and exports
set -e

echo "🔍 Validating SDK Structure"
echo "============================"

# Check critical files
REQUIRED_FILES=(
    "package.json"
    "package-lock.json"
    "tsconfig.json"
    "dist/api.js"
    "dist/api.d.ts"
)

echo ""
echo "Checking required files..."
for file in "${REQUIRED_FILES[@]}"; do
    if [ ! -f "$file" ]; then
        echo "❌ Missing: $file"
        exit 1
    fi
    echo "✓ Found: $file"
done

# Validate package.json integrity
echo ""
echo "Validating package.json..."

PACKAGE_NAME=$(node -p "require('./package.json').name")
PACKAGE_VERSION=$(node -p "require('./package.json').version")
echo "✓ Package: $PACKAGE_NAME@$PACKAGE_VERSION"

if grep -q "GIT_USER_ID" package.json 2>/dev/null; then
    echo "⚠️  Warning: package.json contains placeholder GIT_USER_ID"
fi

# Validate exports
echo ""
echo "Validating exports..."

if [ ! -f "dist/api.js" ]; then
    echo "❌ Error: dist/api.js not found. Run 'npm run build' first."
    exit 1
fi

EXPORT_COUNT=$(node -e "const api = require('./dist/api.js'); console.log(Object.keys(api).length);")
API_COUNT=$(node -e "const api = require('./dist/api.js'); console.log(Object.keys(api).filter(k => k.endsWith('Api')).length);")

echo "✓ Total exports: $EXPORT_COUNT"
echo "✓ API classes: $API_COUNT"

if [ "$API_COUNT" -lt 20 ]; then
    echo "⚠️  Warning: Expected at least 20 API classes, found $API_COUNT"
fi

# Test instantiation
echo ""
echo "Testing API instantiation..."
node -e "
const api = require('./dist/api.js');
try {
    if (api.ApplicationsApi) {
        const appsApi = new api.ApplicationsApi('https://test.example.com');
        console.log('✓ ApplicationsApi instantiated');
    }
    
    if (api.EnvironmentsApi) {
        const envsApi = new api.EnvironmentsApi('https://test.example.com');
        console.log('✓ EnvironmentsApi instantiated');
    }
    
    if (api.ContainersApi) {
        const containersApi = new api.ContainersApi('https://test.example.com');
        console.log('✓ ContainersApi instantiated');
    }
} catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
}
"

# Check TypeScript definitions
echo ""
echo "Checking TypeScript definitions..."
if [ -f "dist/api.d.ts" ]; then
    echo "✓ TypeScript definitions generated"
else
    echo "❌ Error: Missing TypeScript definitions"
    exit 1
fi

if [ -d "dist/model" ]; then
    MODEL_COUNT=$(find dist/model -name "*.d.ts" | wc -l)
    echo "✓ Model definitions: $MODEL_COUNT files"
fi

# Check for security issues
echo ""
echo "Checking for known issues..."

if grep -q '"request"' package.json 2>/dev/null; then
    echo "⚠️  Warning: Using deprecated 'request' library"
fi

# Summary
echo ""
echo "📊 Validation Summary"
echo "===================="
echo "Package:         $PACKAGE_NAME@$PACKAGE_VERSION"
echo "Total Exports:   $EXPORT_COUNT"
echo "API Classes:     $API_COUNT"
echo "TypeScript:      ✓ Definitions present"
echo ""

if [ "$API_COUNT" -lt 20 ]; then
    echo "⚠️  SDK validation completed with warnings"
    exit 0
fi

echo "✅ SDK validation passed!"

