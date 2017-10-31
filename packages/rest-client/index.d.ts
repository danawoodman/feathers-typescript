// todo: get rid of all the anys

declare module '@feathersjs/rest-client' {
  export default function (base: string): Transport;

  interface HandlerResult extends Function {
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

  interface Handler {
    (connection: any, options?: any): () => HandlerResult;
  }

  interface Transport {
    jquery: Handler;
    superagent: Handler;
    request: Handler;
    fetch: Handler;
    axios: Handler;
    angular: Handler;
    angularHttpClient: Handler;
  }
}