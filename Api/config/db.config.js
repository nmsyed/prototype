module.exports = {
  HOST: "localhost",//"washing.cc9awgveoj6h.eu-central-1.rds.amazonaws.com",
  USER: "root",//"washing",
  PASSWORD: "root",//"LKcv6ABTOLWCXdotC5v0",
  DB: "washing",
  port : 3306,
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};

// HOST: "10.0.0.33",
// USER: "devdb",
// PASSWORD: "agv3WQfAg]r@@J",
// DB: "truebet",