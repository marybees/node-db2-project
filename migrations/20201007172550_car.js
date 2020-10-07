exports.up = function (knex) {
  return knex.schema.createTable("car", (tbl) => {
    tbl.increments();
    tbl.integer("VIN").notNullable().unique();
    tbl.string("Make").notNullable();
    tbl.string("Model").notNullable();
    tbl.string("Transmition_Type").nullable();
    tbl.string("Title_Status").nullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("car");
};
