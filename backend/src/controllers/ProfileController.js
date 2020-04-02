const connection = require('../database/connection');

module.exports = { 
    async index(request, response) {
        const user_id = request.headers.authorization;

        const solicitacoes = await connection('solicitacao')
        .where('user_id', user_id)
        .select('*');

        return response.json(solicitacoes);
    }
};