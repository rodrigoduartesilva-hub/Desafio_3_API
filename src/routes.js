import express from "express";
import pacientesController from "./controller/pacientes/pacientesController.js";
import psicologosController from "./controller/psicologos/psicologosController.js";

const routes = express.Router();

routes.get('/health', (request, response) => {
   	response.status(200).json({ message: "API em funcionamento" });
});

routes.get("/pacientes", pacientesController.findAllPacientes);
routes.get("/pacientes/:id", pacientesController.findPaciente);
routes.post("/pacientes", pacientesController.addPaciente);
routes.put("/pacientes/:id", pacientesController.updatePaciente);
routes.delete("/pacientes/:id", pacientesController.deletePaciente);

routes.get("/psicologos", psicologosController.findAllPsicologos);
routes.get("/psicologos/:id", psicologosController.findPsicologo);
routes.post("/psicologos", psicologosController.addPsicologo);
routes.put("/psicologos/:id", psicologosController.updatePsicologo);
routes.delete("/psicologos/:id", psicologosController.deletePsicologo);

export default routes;