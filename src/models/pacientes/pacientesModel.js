import { Sequelize } from "sequelize";
import db from "../../db/db.js";

const Pacientes = db.define("pacientes", {
    id: {
        type: Sequelize.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    nome: {
        type: Sequelize.STRING(200),
        allowNull: false,
    },
    email: {
        type: Sequelize.STRING(200),
        allowNull: false,
    },
    idade: {
        type: Sequelize.DATE,
        allowNull: false,
    }
});

export default Pacientes;