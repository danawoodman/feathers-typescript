import {
  IPrimusOptions,
  Primus
} from 'primus';

declare module '@feathersjs/primus' {
  export = FeathersPrimusStatic;
}

interface FeathersPrimusStatic {
  (options: IPrimusOptions, callback?: (primus: Primus) => void): () => void
}