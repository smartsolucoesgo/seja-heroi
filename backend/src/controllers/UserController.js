const connection = require('../database/connection');

module.exports = {
    async index (request, response) {
        const users = await connection('users').select('*');
    
        return response.json(users);
    },

    async create(request, response) {
        const { nome, cpf, renda, trabalha, profissao, filhos, whatsapp, email, moradores, rua, numero, complemento, cep, bairro, cidade, uf } = request.body;

    const [id] = await connection('users').insert({
        nome,
        cpf,
        renda,
        trabalha,
        profissao,
        filhos,
        whatsapp,
        email,
        moradores,
        rua,
        numero,
        complemento,
        cep,
        bairro,
        cidade,
        uf,
    })

    return response.json({ id });

    }
};