const databaseConfig =  {
    host     : process.env.DATABASE_HOST,
    port     : process.env.DATABASE_PORT,
    user     : process.env.DATABASE_USER,
    password : process.env.DATABASE_PASSWORD,
    insecureAuth : true
}

module.exports = databaseConfig;