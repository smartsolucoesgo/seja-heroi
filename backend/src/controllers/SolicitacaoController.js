const connection = require('../database/connection');

module.exports = {
    async index(request, response) {
        const { page = 1 } = request.query;

        const [count] = await connection('solicitacao').count();

        const solicitacao = await connection('solicitacao')
        .join('users', 'user_id', '=', 'solicitacao.user_id')
        .limit(5)
        .offset((page - 1) * 5)
        .select([
            'solicitacao.*', 
            'users.nome', 
            'users.email', 
            'users.whatsapp', 
            'users.cidade', 
            'users.uf'
        ]);

        response.header('X-Total-Count', count['count(*)']);
    
        return response.json(solicitacao);
    },

    async create(request, response) {
        const { solicitacao, descricao } = request.body;
        const user_id = request.headers.authorization;

        const [id] = await connection('solicitacao').insert({
            solicitacao,
            descricao,
            user_id,
        });

        return response.json({ id });

    },

    async delete(request, response) {
        const { id } = request.params;
        const user_id = request.headers.authorization;

        const solicitacao = await connection('solicitacao')
        .where('id', id)
        .select('user_id')
        .first();

        if(solicitacao.user_id !== user_id) {
            return response.status(401).json({ error: 'Operação não permitida' });
        }

        await connection('solicitacao').where('id', id).delete();

        return response.status(204).send();
    }

};