const Pool = require('pg').Pool
const pool = new Pool({
    user: "postgres",
    password: "Macdestiny65@",
    database: "linkin",
    host: "localhost",
    port: 5432
})

module.exports = pool;