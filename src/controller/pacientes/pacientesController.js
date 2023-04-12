import { Pacientes as PacientesRepository } from "../../models/index.js";

async function findAllPacientes(request, response) {
    try {
        const pacientes = await PacientesRepository.findAll()
        response.status(200).json({ message: 'Operação bem sucedida', data: pacientes });
    } catch (error) {
        console.log('Erro ao recuperar os registros de pacientes:', error);
        response.status(500).json({ message: 'Falha na operação:', data: [] });
    }
}

async function findPaciente(request, response) {
    try {
        const pacienteID = request.params.id;
        const paciente = await PacientesRepository.findByPk(pacienteID);
        response.status(200).json({ message: 'Operação bem sucedida', data: paciente });
    } catch (error) {
        console.log(`Erro ao recuperar o registro de paciente com id ${pacienteID}:`, error);
        response.status(500).json({ message: 'Falha na operação:', data: {} });
    }
}

async function addPaciente(request, response) {
    try {
        const pacienteCreated = await PacientesRepository.create({
                nome: request.body.nome,
                email: request.body.email,
                idade: request.body.idade,
        });
        response.status(200).json({ message: 'Operação bem sucedida', data: pacienteCreated });
    } catch (error) {
        console.log('Erro ao criar paciente:', error);''
        response.status(500).json({ message: 'Falha na operação:', data: {} });
    }
}

async function updatePaciente(request, response) {

    const pacienteID = request.params.id;

    try {
        await PacientesRepository.update({
                nome: request.body.nome,
                email: request.body.email,
                idade: request.body.idade,
        }),
           {
                where: {
                id: pacienteID,
                },
        }

        const updatedPaciente = await PacientesRepository.findByPk(pacienteID);
        response.status(200).json({ message: 'Operação bem sucedida', data: updatedPaciente });
    } catch (error) {
        console.log(`Erro ao atualizar o registro de paciente com id ${pacienteID}:`, error);
        response.status(500).json({ message: 'Falha na operação:', data: {} });
        }
}

async function deletePaciente(request, response) {

    const pacienteID = request.params.id;

    try {
        await PacientesRepository.destroy({
                where: {
                id: pacienteID,
                },
        });

        const paciente = await PacientesRepository.findAll()
        response.status(200).json({ message: 'Operação bem sucedida', data: paciente });
   } catch (error) {
        console.log(`Erro ao tentar excluir o paciente com id ${pacienteID}:`, error);
        response.status(500).json({ message: 'Falha na operação:', data: [] });
        }
}

export default { findAllPacientes, addPaciente, findPaciente, updatePaciente, deletePaciente };