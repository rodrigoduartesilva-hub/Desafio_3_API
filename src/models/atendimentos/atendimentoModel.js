import { Sequelize } from "sequelize";
import db from "../../db/db.js";
import Pacientes from "../pacientes/pacientesModel.js"

const Atendimentos = db.define("atendimentos", {
    id: {
        type: Sequelize.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    data_atendimento: {
        type: Sequelize.DATE,
        allowNull: false,
    },
    observacao: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    pacientes_id: {
        type: Sequelize.INTEGER.UNSIGNED,
		references: {
			model: Pacientes,
			key: "id",
		},
		allowNull: false,
    },
},
{
    tableName: "pacientes",
});

export default Atendimentos;