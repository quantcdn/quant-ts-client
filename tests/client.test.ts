import { QuantClient } from "../src"
import * as types from "../src/types"
import { Client, ClientConstructor } from "../src/interfaces"
import * as request from '@cypress/request'
import { Buffer } from "buffer"
import { expect } from 'chai'

class TestClient implements Client {
  public baseUrl: string
  public headers: object
  public reject: boolean = false

  constructor(baseUrl: string, headers: object) {
    this.baseUrl = baseUrl
    this.headers = headers
    this.reject = false
  }

  public async do(options: request.Options): Promise<any> {
    return await Promise.resolve('okay!')
  }

  public async get(path: string, qs?: object, headers?: object): Promise<any> {
    return await Promise.resolve({})
  }

  public async post(path: string, body?: any, headers?: object, formData?: object, qs?: object): Promise<any> {
    return await Promise.resolve({})
  }

  public async delete(path: string, body?: any, headers?: object): Promise<any> {
    return await Promise.resolve({})
  }

  public async patch(path: string, body?: any, headers?: object): Promise<any> {
    return await Promise.resolve({})
  }
}

// Create a singleton mock client that all tests will use
const mockClient = new TestClient('https://api.quantcdn.io/v1', {})

// Create a constructor function that returns our singleton
function MockClientConstructor(this: any, baseUrl: string, headers: object) {
  return mockClient
}

describe('file()', () => {
  beforeEach(() => {
    // Reset the mock client's post method before each test
    mockClient.post = async () => ({})
  })

  it('should successfully upload a file', async () => {
    const testData = Buffer.from('test file content')
    const payload: types.FilePayload = {
      data: testData,
      url: '/test/file.txt'
    }

    mockClient.post = async () => ({ status: 'success' })
    const client = new QuantClient({
      organization: 'test-org',
      project: 'test-project',
      token: 'test-token'
    }, MockClientConstructor as unknown as ClientConstructor)

    const response = await client.project.file(payload)
    expect(response.status).to.equal('success')
  })

  it('should handle file upload with skipPurge option', async () => {
    const testData = Buffer.from('test file content')
    const payload: types.FilePayload = {
      data: testData,
      url: '/test/file.txt',
      skipPurge: true
    }

    mockClient.post = async (path: string, body: any, headers: object = {}) => {
      expect(headers['Quant-Skip-Purge']).to.equal('true')
      return { status: 'success' }
    }
    const client = new QuantClient({
      organization: 'test-org',
      project: 'test-project',
      token: 'test-token'
    }, MockClientConstructor as unknown as ClientConstructor)

    const response = await client.project.file(payload)
    expect(response.status).to.equal('success')
  })

  it('should handle API errors appropriately', async () => {
    const testData = Buffer.from('test file content')
    const payload: types.FilePayload = {
      data: testData,
      url: '/test/file.txt'
    }

    mockClient.post = async () => {
      throw new Error('Invalid file format')
    }
    const client = new QuantClient({
      organization: 'test-org',
      project: 'test-project',
      token: 'test-token'
    }, MockClientConstructor as unknown as ClientConstructor)

    try {
      await client.project.file(payload)
      expect.fail('Should have thrown an error')
    } catch (error) {
      expect(error.message).to.equal('Invalid file format')
    }
  })

  it('should handle large files correctly', async () => {
    const testData = Buffer.alloc(1024 * 1024, 'x')
    const payload: types.FilePayload = {
      data: testData,
      url: '/test/large-file.txt'
    }

    mockClient.post = async () => ({ status: 'success' })
    const client = new QuantClient({
      organization: 'test-org',
      project: 'test-project',
      token: 'test-token'
    }, MockClientConstructor as unknown as ClientConstructor)

    const response = await client.project.file(payload)
    expect(response.status).to.equal('success')
  })
})

describe('markup', () => {
  beforeEach(() => {
    mockClient.post = async () => ({})
  })

  it('should respect findAttachments when false', async () => {
    const testData = Buffer.from('test content')
    const payload: types.MarkupPayload = {
      data: testData,
      url: '/test/markup',
      published: true,
      findAttachments: false
    }

    mockClient.post = async (path: string, body: any) => {
      expect(body.find_attachments).to.equal(false)
      return { status: 'success' }
    }

    const client = new QuantClient({
      organization: 'test-org',
      project: 'test-project',
      token: 'test-token'
    }, MockClientConstructor as unknown as ClientConstructor)

    await client.project.markup(payload)
  })

  it('should respect findAttachments when true', async () => {
    const testData = Buffer.from('test content')
    const payload: types.MarkupPayload = {
      data: testData,
      url: '/test/markup',
      published: true,
      findAttachments: true
    }

    mockClient.post = async (path: string, body: any) => {
      expect(body.find_attachments).to.equal(true)
      return { status: 'success' }
    }

    const client = new QuantClient({
      organization: 'test-org',
      project: 'test-project',
      token: 'test-token'
    }, MockClientConstructor as unknown as ClientConstructor)

    await client.project.markup(payload)
  })

  it('should default findAttachments to false when not specified', async () => {
    const testData = Buffer.from('test content')
    const payload: types.MarkupPayload = {
      data: testData,
      url: '/test/markup',
      published: true
    }

    mockClient.post = async (path: string, body: any) => {
      expect(body.find_attachments).to.equal(false)
      return { status: 'success' }
    }

    const client = new QuantClient({
      organization: 'test-org',
      project: 'test-project',
      token: 'test-token'
    }, MockClientConstructor as unknown as ClientConstructor)

    await client.project.markup(payload)
  })
})
