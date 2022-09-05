import User from "../entity/User";

export default interface UserRepository {
  save(User: User): Promise<void>;
  get({ email, password }: { email: string; password: string }): Promise<User>;
}
