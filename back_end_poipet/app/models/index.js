const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;
 db.user = require("./user.model");
db.role = require("./role.model");
db.loans = require("./loan.model.js")(mongoose);
db.customers = require("./customer.model.js")(mongoose);
db.beneficiarys = require("./beneficiary.model.js")(mongoose);
db.ROLES = ["user", "admin", "moderator"];

module.exports = db;