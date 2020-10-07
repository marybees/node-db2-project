exports.up = function (knex) {
  return knex.schema.createTable("car", (tbl) => {
    tbl.increments();
    tbl.integer("VIN").notNullable();
    tbl.string("Make").notNullable();
    tbl.string("Model").notNullable();
    tbl.string("Transmition_Type");
    tbl.string("Title_Status");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("car");
};
