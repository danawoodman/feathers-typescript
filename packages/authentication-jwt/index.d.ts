declare module '@feathersjs/authentication-jwt' {
  import { Application } from '@feathersjs/feathers';
  import {
    JwtFromRequestFunction,
    VerifyCallbackWithRequest
  } from 'passport-jwt';

  export { ExtractJwt } from 'passport-jwt';

  function feathersAuthenticationJwt(options?: FeathersAuthenticationJWTOptions): () => void
  export default feathersAuthenticationJwt;

  export interface FeathersAuthenticationJWTOptions {
    name: string, // the name to use when invoking the authentication Strategy
    entity: string, // the entity that you pull from if an 'id' is present in the payload
    service: string, // the service to look up the entity
    passReqToCallback: boolean, // whether the request object should be passed to `verify`
    jwtFromRequest: JwtFromRequestFunction, // a passport-jwt option determining where to parse the JWT
    secretOrKey: string, // Your main secret provided to passport-jwt
    session: boolean // whether to use sessions,
    Verifier: Verifier // A Verifier class. Defaults to the built-in one but can be a custom one. See below for details.
  }

  export class Verifier {
    constructor(app: Application<any>, options: any) // the class constructor

    verify: VerifyCallbackWithRequest;
  }

  export class DefaultVerifier extends Verifier {}
}
