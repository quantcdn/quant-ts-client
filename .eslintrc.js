module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "mocha": true
    },
    "extends": "standard-with-typescript",
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        },
        {
            "files": ["tests/**/*.ts"],
            "env": {
                "mocha": true,
                "node": true
            },
            "rules": {
                "@typescript-eslint/no-explicit-any": "off",
                "@typescript-eslint/explicit-function-return-type": "off"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module",
        "warnOnUnsupportedTypeScriptVersion": false,
        "project": ["./tsconfig.json"]
    },
    "rules": {
    }
}
