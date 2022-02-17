import user from "../models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import moment from "moment";

const registerUser = async (req, res) => {
  if (!req.body.name || !req.body.password)
    return res.status(400).send({ message: "Incomplete data" });

  //esto desaparece para ir a uservalidate middleware al igual que la validacion si enviaron o no email en el condicional de arriba.
  // const existingUser = await user.findOne({email:req.body.email});
  // if (existingUser) return res.status(400).send({message: "The user is already registered"}); //¿Esto es true? devuelve mensaje. Si esta vacío entonces:

  const passHash = await bcrypt.hash(req.body.password, 10);
  //   const roleId = await role.findOne({ name: "user" });
  //   if (!roleId) return res.status(500).send({ message: "No role was assigned" }); //intente más tarde. es error de los dev. borraron algún dato parametrizado.(tryagainLater)

  const userSchema = new user({
    name: req.body.name,
    email: req.body.email,
    password: passHash,
    role: req.body.role,
    dbStatus: true,
  });
  const result = await userSchema.save();
  if (!result) res.status(500).send({ message: "Failed to register user" });
  try {
    return res.status(200).json({
      token: jwt.sign(
        {
          _id: result._id,
          name: result.name,
          role: result.role,
          iat: moment().unix(),
        },
        process.env.SK_JWT
      ),
    });
  } catch (e) {
    return res.status(500).send({ message: "Register error" });
  }
};

const listUser = async (req, res) => {
  let users = await user.find().populate("role").exec();
  if (users.length === 0)
    return res.status(400).send({ message: "No seache results" });

  return res.status(200).send({ users });
};

export default { registerUser, listUser };