import UserRepository from "../domain/repository/UserRepository";

type Output = {
  id: number;
  name: string;
  email: string;
  password: string;
};

export default class GetUser {
  constructor(readonly userRepository: UserRepository) {}

  async execute({
    email,
    password,
  }: {
    email: string;
    password: string;
  }): Promise<Output> {  
    const user = await this.userRepository.get({ email, password });
    return user;
  }
}
