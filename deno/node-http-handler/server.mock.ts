import { HttpResponse } from "../types/mod.ts";
import { readFileSync } from "https://deno.land/std@0.79.0/node/fs.ts";
import { createServer as createHttpServer, IncomingMessage, Server as HttpServer, ServerResponse } from "http.ts";
import { createServer as createHttp2Server, Http2Server } from "http2.ts";
import { createServer as createHttpsServer, Server as HttpsServer } from "https.ts";
import { join } from "https://deno.land/std@0.79.0/node/path.ts";
type Readable = any;

const fixturesDir = join(__dirname, "../..", "fixtures");

export function createResponseFunction(httpResp: HttpResponse) {
  return function (request: IncomingMessage, response: ServerResponse) {
    response.statusCode = httpResp.statusCode;
    for (const name of Object.keys(httpResp.headers)) {
      const values = httpResp.headers[name];
      response.setHeader(name, values);
    }
    if (httpResp.body instanceof Readable) {
      httpResp.body.pipe(response);
    } else {
      response.end(httpResp.body);
    }
  };
}

export function createContinueResponseFunction(httpResp: HttpResponse) {
  return function (request: IncomingMessage, response: ServerResponse) {
    response.writeContinue();
    setTimeout(() => {
      createResponseFunction(httpResp)(request, response);
    }, 100);
  };
}

export function createMockHttpsServer(): HttpsServer {
  const server = createHttpsServer({
    key: readFileSync(join(fixturesDir, "test-server-key.pem")),
    cert: readFileSync(join(fixturesDir, "test-server-cert.pem")),
  });
  return server;
}

export function createMockHttpServer(): HttpServer {
  const server = createHttpServer();
  return server;
}

export function createMockHttp2Server(): Http2Server {
  const server = createHttp2Server();
  return server;
}
