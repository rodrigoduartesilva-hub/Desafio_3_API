import Atendimentos from "./atendimentos/atendimentoModel.js";
import Psicologos from "./psicologos/psicologosModel.js";
import Pacientes from "./pacientes/pacientesModel.js";

Pacientes.belongsToMany(Psicologos, {through: 'Atendimentos'});
Psicologos.belongsToMany(Pacientes, {through: 'Atendimentos'});

export { Psicologos, Pacientes, Atendimentos };