import role from "../models/role.js";

const registerRole = async (req, res) => {
  if (!req.body.name || !req.body.description)
    return res.status(400).send({ message: "Incomplete data" });
  let schema = new role({
    name: req.body.name,
    description: req.body.description,
    dbStatus: true,
  }); //este pertenece a este archivo

  let result = await schema.save();
  if (!result)
    return res.status(500).send({ message: "Failed to register role" });

  res.status(200).send({ result });
};

const listRole = async (req, res)=>{
  let roles = await role.find();
  if (role.length === 0)
  return res.status(400).send({ message: "No search results" });
  return res.status(200).send({ roles });
}

export default { registerRole, listRole }; //aquí hay un role eschema que pertenece al archivo controller
