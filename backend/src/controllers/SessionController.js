const connection = require('../database/connection');

module.exports = { 
    async create(request, response) {
        const { whatsapp } = request.body;

        const user = await connection('users')
        .where('whatsapp', whatsapp)
        .select('nome')
        .first();

        if(!user) {
            return response.status(400).json({ error: 'Usuário não cadastrado.'});
        }

        return response.json(user);
    }
 };