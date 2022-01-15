import { UserController } from "../controller/UserControler";

const userController = new UserController();

const router = [
  { method: "POST", path: "/{name}/{email}", handler: userController.postUser },
  { method: "GET", path: "/users", handler: userController.getUser },
  { method: "DELETE", path: "/user/{id}", handler: userController.deleteUser },
  { method: "GET", path: "/user/{id}", handler: userController.getUserById },
  {
    method: "*",
    path: "/{any*}",
    handler: () => {
      const mensagem = {
        mensagem: "Página não existe !",
      };
      return mensagem;
    },
  },
];

export { router };
