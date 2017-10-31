///<reference types="socket.io" />

declare module '@feathersjs/socketio' {
  export = FeathersSocketIOStatic;
}

interface FeathersSocketIOStatic {
  (callback: (io: SocketIO.Server) => void): () => void
  (options: number | SocketIO.ServerOptions, callback?: (io: SocketIO.Server) => void): () => void
  (port: number, options?: SocketIO.ServerOptions, callback?: (io: SocketIO.Server) => void): () => void
}