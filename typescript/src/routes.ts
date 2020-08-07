import { Request, Response } from 'express';
import createUser from './services/CreateUser';

export default function HelloWorld(request : Request, response : Response) {
  const user = createUser({
    name: 'Ebraim Carvalho',
    email: 'ebraimcarvalho@gmail.com',
    password: '1234567',
    techs: [
      'Node.js', 
      'React JS', 
      'React Native',
      {title: 'Javascript', experience: 100}
    ],
  })
  
  return response.json({ 
    message: `Hello Ebra World!!`,
    email: user.email,
    techs: user.techs
  });
}