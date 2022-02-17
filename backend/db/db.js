import mongoose from "mongoose";

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.DB_CONNECTION, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connection with MongoDB: OK");
  } catch (e) {
    console.log("Error coneccting to MongoDB: \n", e);
  }
};
// manejar exepciones errores que no conocemos. Como vamos usar mongo:
//Mongo nos puede retornar un error que nosotros no conocemos
export default { dbConnection };
