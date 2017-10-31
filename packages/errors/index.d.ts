declare module '@feathersjs/errors' {
  class FeathersError extends Error {
    constructor(msg: string | Error, name: string, code: number, className: String, data: any)
  }

  class BadRequest extends FeathersError {
    constructor(msg: string | Error, data?: any);
  }

  class NotAuthenticated extends FeathersError {
    constructor(msg: string | Error, data?: any);
  }

  class PaymentError extends FeathersError {
    constructor(msg: string | Error, data?: any);
  }

  class Forbidden extends FeathersError {
    constructor(msg: string | Error, data?: any);
  }

  class NotFound extends FeathersError {
    constructor(msg: string | Error, data?: any);
  }

  class MethodNotAllowed extends FeathersError {
    constructor(msg: string | Error, data?: any);
  }

  class NotAcceptable extends FeathersError {
    constructor(msg: string | Error, data?: any);
  }

  class Timeout extends FeathersError {
    constructor(msg: string | Error, data?: any);
  }

  class Conflict extends FeathersError {
    constructor(msg: string | Error, data?: any);
  }

  class LengthRequired extends FeathersError {
    constructor(msg: string | Error, data?: any);
  }

  class Unprocessable extends FeathersError {
    constructor(msg: string | Error, data?: any);
  }

  class TooManyRequests extends FeathersError {
    constructor(msg: string | Error, data?: any);
  }

  class GeneralError extends FeathersError {
    constructor(msg: string | Error, data?: any);
  }

  class NotImplemented extends FeathersError {
    constructor(msg: string | Error, data?: any);
  }

  class BadGateway extends FeathersError {
    constructor(msg: string | Error, data?: any);
  }

  class Unavailable extends FeathersError {
    constructor(msg: string | Error, data?: any);
  }

  interface Errors {
    FeathersError: FeathersError;
    BadRequest: BadRequest;
    NotAuthenticated: NotAuthenticated;
    PaymentError: PaymentError;
    Forbidden: Forbidden;
    NotFound: NotFound;
    MethodNotAllowed: MethodNotAllowed;
    NotAcceptable: NotAcceptable;
    Timeout: Timeout;
    Conflict: Conflict;
    LengthRequired: LengthRequired;
    Unprocessable: Unprocessable;
    TooManyRequests: TooManyRequests;
    GeneralError: GeneralError;
    NotImplemented: NotImplemented;
    BadGateway: BadGateway;
    Unavailable: Unavailable;
  }

  function convert(error: any): FeathersError;
  const types: Errors;
  const errors: Errors;
}

// todo: (JL) what's with the handlers now?

declare module '@feathersjs/errors/handler'{
  /*
    import { RequestHandler } from 'express';

    declare function notFound():RequestHandler;
    declare namespace notFound {}

    export = notFound;
   */
}

declare module '@feathersjs/errors/notFound'{
  /*
    import { RequestHandler } from 'express';

    declare function notFound():RequestHandler;
    declare namespace notFound {}

    export = notFound;
   */
}