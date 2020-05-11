
exports.up = function(knex, Promise) {
    return knex.schema.createTable('pedidos', table =>{
        table.increments('id').primary()
        table.integer('number_nf').notNull()
        table.float('value', 2 , 2).notNull()
        table.string('name_company').notNull()
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('pedidos')
};
