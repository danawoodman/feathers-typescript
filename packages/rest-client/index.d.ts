// todo: get rid of all the anys

declare module '@feathersjs/rest-client' {
  export default function (base: string): Transport;

  export interface HandlerResult extends Function {
    /**
     * initialize service
     */
    (): void;
    /**
     * Transport Service
     */
    Service: any;

    /**
     * default Service
     */
    service: any;
  }

  export interface Handler {
    (connection: any, options?: any): () => HandlerResult;
  }

  export interface Transport {
    jquery: Handler;
    superagent: Handler;
    request: Handler;
    fetch: Handler;
    axios: Handler;
    angular: Handler;
    angularHttpClient: Handler;
  }
}