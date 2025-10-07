/**
 * Smoke tests for SDK package
 * These tests verify the SDK builds, loads, and exports expected APIs
 */

const assert = require('assert');

describe('SDK Smoke Tests', function() {
  let api;
  
  before(function() {
    try {
      api = require('../dist/api.js');
    } catch (error) {
      throw new Error(`Failed to load SDK: ${error.message}`);
    }
  });
  
  it('should load the SDK without errors', function() {
    assert.ok(api, 'API module should be loaded');
  });
  
  it('should export ApplicationsApi', function() {
    assert.ok(api.ApplicationsApi, 'ApplicationsApi should be exported');
    assert.strictEqual(typeof api.ApplicationsApi, 'function');
  });
  
  it('should export EnvironmentsApi', function() {
    assert.ok(api.EnvironmentsApi, 'EnvironmentsApi should be exported');
    assert.strictEqual(typeof api.EnvironmentsApi, 'function');
  });
  
  it('should export ContainersApi', function() {
    assert.ok(api.ContainersApi, 'ContainersApi should be exported');
    assert.strictEqual(typeof api.ContainersApi, 'function');
  });
  
  it('should export at least 20 APIs', function() {
    const exportedApis = Object.keys(api).filter(key => key.endsWith('Api'));
    assert.ok(exportedApis.length >= 20, `Should export at least 20 APIs, found ${exportedApis.length}`);
  });
  
  it('should be able to instantiate ApplicationsApi', function() {
    const appsApi = new api.ApplicationsApi('https://test.example.com');
    assert.ok(appsApi, 'Should be able to create ApplicationsApi instance');
  });
  
  it('should have expected methods on ApplicationsApi', function() {
    const appsApi = new api.ApplicationsApi('https://test.example.com');
    const expectedMethods = [
      'listApplications',
      'createApplication', 
      'getApplication',
      'updateApplication',
      'deleteApplication'
    ];
    
    expectedMethods.forEach(method => {
      assert.strictEqual(
        typeof appsApi[method], 
        'function',
        `ApplicationsApi should have ${method} method`
      );
    });
  });
});

