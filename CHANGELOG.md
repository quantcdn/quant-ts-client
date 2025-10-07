# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Changed
- Enhanced package.json with comprehensive metadata and scripts
- Added validation and post-generation scripts in `scripts/` directory
- Synchronised package.json with package.json.template

### Added
- `REPOSITORY_IMPROVEMENTS.md` - Comprehensive improvements guide
- `CHANGELOG.md` - Project changelog
- `scripts/validate-sdk.sh` - SDK validation script
- `scripts/post-generate-sdk.sh` - Post-generation customisation script
- Additional npm scripts: `test:unit`, `test:all`, `prepublishOnly`, `validate`
- Package metadata: keywords, files list, proper license and author

### Fixed
- **Critical:** Synchronised package-lock.json with package.json (fixes npm ci failures)
- Protected package-lock.json in .openapi-generator-ignore
- Fixed repository URL from placeholder to actual GitHub URL

## [3.0.0] - 2025-10-07

### Fixed
- Synchronised package-lock.json with package.json
- Protected package-lock.json in .openapi-generator-ignore to prevent regeneration overwrites
- Updated repository URL in package.json

### Known Issues
- Using deprecated `request` library (requires OpenAPI generator update to typescript-axios)
- Jest configuration exists but tests use Mocha syntax
- 3 security vulnerabilities (1 moderate, 2 critical) from deprecated dependencies

## [2.x.x] - Historical

Previous versions generated from OpenAPI spec without protected file management.

---

## Migration Notes

### 3.0.0
- No breaking API changes
- Infrastructure improvements only
- npm ci now works correctly in CI/CD environments

---

## Upgrade Guide

### From 2.x to 3.x
No code changes required. API surface remains identical.

```bash
npm install @quantcdn/quant-client@^3.0.0
```

---

## Deprecation Warnings

### `request` HTTP client
The underlying HTTP client (`request`) is deprecated. A future major version (4.x) will migrate to `axios` or native fetch. This will require regenerating the SDK with `typescript-axios` generator.

**Timeline:** Planned for Q1 2026

**Action required:** None for 3.x versions. Breaking changes will be clearly documented in 4.0.0 release.

