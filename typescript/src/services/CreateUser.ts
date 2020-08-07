interface CreateUserData {
  name?: string;
  email: string;
  password: string;
  techs: Array<string | TechObject> //para array misto ou use string[] para array único de string, no caso
}

interface TechObject {
  title: string,
  experience: number
}

export default function createUser({ name, email, password, techs } : CreateUserData) {
  const user = {
    name,
    email,
    password,
    techs
  }

  return user;
}