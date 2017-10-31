declare module '@feathersjs/primus' {
  import {
    IPrimusOptions,
    Primus
  } from 'primus';

  export default function (options: IPrimusOptions, callback?: (primus: Primus) => void): () => void
}