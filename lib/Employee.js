class Employee {
    constructor(id, name, email) {
        this.id = id;
        this.name = name;
        this.role = "Employee";
        this.email = email;

    }

    //Function to get employee name
    getName() {
        return this.name;
    }

    getID() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return this.role;
    }
}

module.exports = Employee;
