const Users = require("./../../models/Users.model")
const bcrypt = require("bcrypt")
const randToken = require("rand-token")

// Encrypt the password
const saltRounds = 12;
const salt = bcrypt.genSaltSync(saltRounds);
const encryptedPassword = bcrypt.hashSync("admin123", salt);

const adminUser = {
  profile: {
    username: "admin",
    password: encryptedPassword,
    role: "ADMIN",
    status: "ACTIVE",
    token: randToken.generate(64)
  },
  contact: {
    email: "admin@admin.com"
  }
}

const usersSeed = async () => {
  await Users.create(adminUser)
  console.log("Admin user added successfully")
}

module.exports = usersSeed
