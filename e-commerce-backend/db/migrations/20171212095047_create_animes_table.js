exports.up = function(knex, Promise) {
  return knex.schema.createTable('animes', function(table) {
    table.increments();
    table.string('photo_url');
    table.string('title');
    table.string('rating');
    table.decimal('price');
    table.boolean('on_sale').defaultsTo(false);
    table.boolean('in_cart').defaultsTo(false);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('animes');
};
