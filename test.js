const assert = require("assert");
const httpMocks = require("node-mocks-http");
const routerHandler = require("./routerHandler");

describe("Example Test 1", () => {
  it("should return 'Cortana 2.2' for GET /message", () => {
    const request = httpMocks.createRequest({
      method: "GET",
      url: "/message"
    });
    const response = httpMocks.createResponse();
    routerHandler(request, response);
    const responseBody = response._getData();
    const expectedResponseBody = "Cortana 2.2!";
    assert.strictEqual(responseBody, expectedResponseBody);
  });
});
