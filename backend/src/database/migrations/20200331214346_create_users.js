
exports.up = function(knex) {
  return knex.schema.createTable('users', function (table) {
      table.increments();
      table.string('nome').notNullable();
      table.string('cpf').notNullable();
      table.decimal('renda').notNullable();
      table.string('trabalha').notNullable();
      table.string('profissao').notNullable();
      table.string('filhos').notNullable();      
      table.string('whatsapp').notNullable();
      table.string('email').notNullable();
      table.decimal('moradores').notNullable();
      table.string('rua').notNullable();
      table.decimal('numero').notNullable();
      table.string('complemento').notNullable();
      table.decimal('cep').notNullable();
      table.string('bairro').notNullable();
      table.string('cidade').notNullable();
      table.string('uf', 2).notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('users');
};
