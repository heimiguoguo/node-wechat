const db = require('../db');

module.exports = db.defineModel('pet', {
    name: db.STRING(100),
    gender: db.BOOLEAN,
    birth: db.STRING(10),
})