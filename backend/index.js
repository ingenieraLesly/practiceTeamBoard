import express from "express";
import cors from "cors";
import db from "./db/db.js";
import roleRoutes from "./routes/roleRoutes.js";
import userRoutes from "./routes/userRoutes.js";
// import taskRoutes from "./routes/taskRoutes.js";
import dotenv from "dotenv";
dotenv.config(); //hace que quede disponible, genera conexión, por vbls entorno

const app = express(); //nos traemos todo lo de express a nuestro servidor que llamo app
//Nuestro servidor llamado app va a utilizar las siguientes reglas.
app.use(express.json()); //solo usará jSON (JAMAS XML)
app.use(cors()); //nos informa que errores están generando las peticiones a nuestra api.
app.use("/api/role", roleRoutes),
  app.use("/api/user", userRoutes),
  // app.use("/api/task", taskRoutes),

app.listen(process.env.PORT, () =>
  console.log("Backend server running on port: ", process.env.PORT)
); //escuchemos el puerto 3001/ usaremos ese port use mi ram mi ram, procesador de ese port

db.dbConnection();
