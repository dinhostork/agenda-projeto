import * as Yup from "yup";
import User from "../models/User";

class UserController {
  async store(req, res) {
    const schema = Yup.object({
      name: Yup.string().required(),
      email: Yup.string().required(),
      password: Yup.string().required().min(6),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: "Falha na Validação." });
    }

    const userExists = await User.findOne({
      where: { email: req.body.email },
    });

    if (userExists) {
      return res
        .status(400)
        .json({ error: "Já existe um usuário com este endereço de e-mail." });
    }

    const { id, name, email } = await User.create(req.body);


    return res.json({
      id,
      name,
      email,
    });
  }


  async index(req, res) {
    const user = await User.findByPk(req.userId, {
      attributes: ["id", "name", "email", "avatar_id"],
      include: [
        {
          model: File,
          as: "avatar",
          attributes: ["name", "path", "type", "url"],
        },
      ],
    });

    return res.json(user);
  }
}

export default new UserController();
