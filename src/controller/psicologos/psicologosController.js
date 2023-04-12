import { Psicologos as PsicologosRepository } from "../../models/index.js"
import bcrypt from "bcryptjs";

async function findAllPsicologos(request, response) {
    try {
        const psicologos = await PsicologosRepository.findAll({attributes:{exclude: ["senha"],}})
        response.status(200).json({ message: 'Operação bem sucedida', data: psicologos });
    } catch (error) {
        console.log('Erro ao recuperar os registros de psicologos:', error);
        response.status(500).json({ message: 'Falha na operação:', data: [] });
    }
}

async function findPsicologo(request, response) {
    try {
        const psicologoID = request.params.id;
        const psicologo = await PsicologosRepository.findByPk(psicologoID, {attributes:{exclude: ["senha"],}});
        response.status(200).json({ message: 'Operação bem sucedida', data: psicologo });
    } catch (error) {
        console.log(`Erro ao recuperar o registro de psicologo com id ${psicologoID}:`, error);
        response.status(500).json({ message: 'Falha na operação:', data: {} });
    }
}

async function addPsicologo(request, response) {
    try {
        const psicologoCreated = await PsicologosRepository.create({
                nome: request.body.nome,
                email: request.body.email,
                senha: bcrypt.hashSync(request.body.senha, 8),
                apresentacao: request.body.apresentacao,
        });
        response.status(200).json({ message: 'Operação bem sucedida', data: psicologoCreated });
    } catch (error) {
        console.log('Erro ao criar psicologo:', error);''
        response.status(500).json({ message: 'Falha na operação:', data: {} });
    }
}

async function updatePsicologo(request, response) {

    const psicologoID = request.params.id;
    const payload = !request.body.senha ? {
        nome: request.body.nome,
        email: request.body.email,
        apresentacao: request.body.apresentacao,
    }:{
        nome: request.body.nome,
        email: request.body.email,
        senha: bcrypt.hashSync(request.body.senha, 8),
        apresentacao: request.body.apresentacao,
    }
    try {
        await PsicologosRepository.update(payload,
           {
                where: {
                id: psicologoID,
                },
        })

        const updatedPsicologo = await PsicologosRepository.findByPk(psicologoID);
        response.status(200).json({ message: 'Operação bem sucedida', data: updatedPsicologo });
    } catch (error) {
        console.log(`Erro ao atualizar o registro de psicologo com id ${psicologoID}:`, error);
        response.status(500).json({ message: 'Falha na operação:', data: {} });
        }
}

async function deletePsicologo(request, response) {

    const psicologoID = request.params.id;

    try {
        await PsicologosRepository.destroy({
                where: {
                id: psicologoID,
                },
        });

        const psicologo = await PsicologosRepository.findAll()
        response.status(200).json({ message: 'Operação bem sucedida', data: psicologo });
   } catch (error) {
        console.log(`Erro ao tentar excluir o psicologo com id ${psicologoID}:`, error);
        response.status(500).json({ message: 'Falha na operação:', data: [] });
        }
}

export default { findAllPsicologos, addPsicologo, findPsicologo, updatePsicologo, deletePsicologo };