const Employee = require("./Employee");

class Manager extends Employee {
    constructor(id, name, email, offcnum) {
        super(id, name, email);
        this.offcnum = offcnum;
    }

    getRole() {
        return "Manager";
    }
}

module.exports = Manager;