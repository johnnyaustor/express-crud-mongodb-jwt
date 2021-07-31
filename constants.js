const constant = {
    port: process.env.PORT || 3000,
    mongodbDatasource: process.env.MONGODB_DATASOURCE || "mongodb://localhost:27017/agus_triantoro",
    secretKey: "zyx4321abc",
    exp: 60*60,
    algorithm: 'HS256'
};
module.exports = constant;