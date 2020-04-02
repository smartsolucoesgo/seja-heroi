
exports.up = function(knex) {
    return knex.schema.createTable('solicitacao', function (table) {
        table.increments();

        table.string('solicitacao').notNullable();
        table.string('descricao').notNullable();

        table.string('user_id').notNullable();

        table.foreign('user_id').references('id').inTable('users');
        
    });
};

exports.down = function(knex) {
  return knex.schema.dropTable('solicitacao');
};
