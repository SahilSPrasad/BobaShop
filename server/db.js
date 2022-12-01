const Pool = require("pg").Pool;

const pool = new Pool({
  user: "bobashopdb_yrjn_user",
  password: "o22QQOpJrNMlytNIZmSvSiYjELCnQmuZ",
  host: "dpg-ce480len6mpku7kgag1g-a.oregon-postgres.render.com",
  port: 5432,
  database: "bobashopdb_yrjn",
});

module.exports = pool;
