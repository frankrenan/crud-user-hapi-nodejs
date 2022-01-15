import { getCustomRepository } from "typeorm";
import { UserRepository } from "../data/repository/UserRepository";

interface IUserRequest {
  name: string;
  email: string;
}

class UserService {
  async create({ name, email }: IUserRequest) {
    const userRepository = getCustomRepository(UserRepository);

    const user = userRepository.create({ name, email });

    await userRepository.save(user);

    return user;
  }

  async list() {
    const userRepository = getCustomRepository(UserRepository);

    const user = await userRepository.find();

    return user;
  }

  async listById(id: number) {
    const userRepository = getCustomRepository(UserRepository);

    const user = await userRepository.findOne(id);

    return user;
  }

  async delete(id: number) {
    const userRepository = getCustomRepository(UserRepository);

    const user = await userRepository.delete(id);

    return user;
  }
}

export { UserService };
