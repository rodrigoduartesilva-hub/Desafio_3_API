import { Sequelize } from "sequelize";
import db from "../../db/db.js";

const Psicologos = db.define("psicologos", {
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
        unique: true,
    },
    senha: {
        type: Sequelize.STRING(200),
        allowNull: false,
    },
    apresentacao: {
        type: Sequelize.STRING,
        allowNull: false,
    },
});

export default Psicologos;