import feathers from '@feathersjs/feathers';
import { ServiceTypes } from './interfaces';
import { MyService } from './my-service';

const app = feathers<ServiceTypes>();

app.use('users', new MyService());

app.service('users').get(0).then(u => console.log(u));

