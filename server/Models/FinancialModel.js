const { Pool } = require('pg')
require('dotenv').config()

const uri = process.env.pg_uri

const pool = new Pool({
  connectionString: uri
})


module.exports = {
  query: (text, params, callback) => {
    // console.log('executed query',params, text);
    return pool.query(text, params,callback);
  }
}