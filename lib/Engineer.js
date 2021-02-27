const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(id, name, email, gituserid) {
        super(id, name, email);
        this.gituserid = gituserid;
    }

    getRole() {
        return "Engineer";
    }

    getGitHub() {
        return this.gituserid;
    }
}

module.exports = Engineer;