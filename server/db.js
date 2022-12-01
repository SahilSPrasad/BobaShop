const Pool = require("pg").Pool;

const pool = new Pool({
  user: "bobashopdb_user",
  password: "EugISvS6x55LN2p3bMeJz5gIXTjxAyfB",
  host: "dpg-ce47mvda4995pbu2jm90-a",
  port: 5432,
  database: "bobashopdb",
});

module.exports = pool;
