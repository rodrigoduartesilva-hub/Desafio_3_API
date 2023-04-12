import { Atendimentos as AtendimentosRepository } from "../../models/index.js";

async function findAllAtendimentos(request, response) {
    try {
        const atendimentos = await AtendimentosRepository.findAll()
        response.status(200).json({ message: 'Operação bem sucedida', data: atendimentos });
    } catch (error) {
        console.log('Erro ao recuperar os registros de atendimentos:', error);
        response.status(500).json({ message: 'Falha na operação:', data: [] });
    }
}

async function findAtendimento(request, response) {
    try {
        const atendimentoID = request.params.id;
        const atendimento = await AtendimentosRepository.findByPk(atendimentoID);
        response.status(200).json({ message: 'Operação bem sucedida', data: atendimento });
    } catch (error) {
        console.log(`Erro ao recuperar o registro de atendimento com id ${atendimentoID}:`, error);
        response.status(500).json({ message: 'Falha na operação:', data: {} });
    }
}

async function addAtendimento(request, response) {
    try {
        const atendimentoCreated = await AtendimentosRepository.create({
                data_atendimento: request.body.data_atendimento,
                observacao: request.body.observacao,
                pacientes_id: request.body.pacientes_id,
        });
        response.status(200).json({ message: 'Operação bem sucedida', data: atendimentoCreated });
    } catch (error) {
        console.log('Erro ao criar atendimento:', error);''
        response.status(500).json({ message: 'Falha na operação:', data: {} });
    }
}

export default { findAllAtendimentos, addAtendimento, findAtendimento };