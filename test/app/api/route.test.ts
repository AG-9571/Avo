import { describe } from "node:test";
import { GET } from "../../../app/api/route";
import { NextApiRequest, NextApiResponse } from 'next'
import { debug } from "console";

// Mock del módulo dbProducts

describe('GET function home: /api', () => {
  it('should return a response with data of db ', async () => {
    const mockRequest = {} as Request;

    const response = await GET(mockRequest);

    expect(response.status).toBe(200);
    expect(response.headers.get('content-type')).toBe('application/json');
    const responseBody = JSON.parse(await response.text());
    expect(responseBody.message).toBe('Hello World');
    expect(responseBody.result.every((item :any)=> 
      typeof item.name === 'string' && 
      typeof item.id === 'string' &&
      typeof item.price === 'number' &&
      typeof item.image === 'string' &&
      typeof item.attributes === "object"&&
      typeof item.attributes.description === "string"&&
      typeof item.attributes.shape === "string"&&
      typeof item.attributes.hardiness === "string"&&
      typeof item.attributes.taste === "string"
    )).toBeTruthy();
    expect(responseBody.result.length).not.toBe(0);

  });
});
describe('GET function home: /api', () => {
  it('should return a response with data of db ', async () => {
    const mockRequest = {} as Request;

    const response = await GET(mockRequest);

    expect(response.status).toBe(200);
    expect(response.headers.get('content-type')).toBe('application/json');
    const responseBody = JSON.parse(await response.text());
    expect(responseBody.message).toBe('Hello World');
    expect(responseBody.result.every((item :any)=> 
      typeof item.name === 'string' && 
      typeof item.id === 'string' &&
      typeof item.price === 'number' &&
      typeof item.image === 'string' &&
      typeof item.attributes === "object"&&
      typeof item.attributes.description === "string"&&
      typeof item.attributes.shape === "string"&&
      typeof item.attributes.hardiness === "string"&&
      typeof item.attributes.taste === "string"
    )).toBeTruthy();
    expect(responseBody.result.length).not.toBe(0);

  });
});
