import { Request } from "@hapi/hapi";
import { UserService } from "../service/UserService";

class UserController {
  async postUser(request: Request, h: Response) {
    const userService = new UserService();

    const name = request.params.name;
    const email = request.params.email;

    const user = await userService.create({ name, email });

    return user;
  }

  async getUser(request: Request, h: Response) {
    const userService = new UserService();

    const users = await userService.list();

    return users;
  }

  async getUserById(request: Request, h: Response) {
    const userService = new UserService();

    const id = request.params.id;
    const users = await userService.listById(id);

    return users;
  }

  async deleteUser(request: Request, h: Response) {
    const userService = new UserService();

    const id = request.params.id;
    const user = await userService.delete(id);

    return user;
  }
}

export { UserController };
