import feathers, {} from '@feathersjs/feathers';

interface User {
  _id: string;
  name: string;
  email: string;
  age: number;
}

interface Message {
  _id: string;
  _id_sender: User['_id'],
  text: string;
}

interface ServiceTypes {
  users: User,
  messages: Message
}

const app = feathers<ServiceTypes>();

