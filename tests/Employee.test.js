const Employee = require("../lib/Employee");


describe("Employee class", () => {
    it("Creates an Employee object", () => {
        const employee = new Employee(1, "Zoltan", "zoltan@fakemail.com");

        expect(employee.ID).toEqual(1);
        expect(employee.name).toEqual("Zoltan");
        expect(employee.name).toEqual("zoltan@fakemail.com");
    });

    describe("getName", () => {
        it("Returns the name of the employee", () => {
            expect(new Employee(2, "Jyothi", "jyothi@fakemail.com").getName()).toBe("Jyothi");
        });
    });

    describe("getID", () => {
        it("Returns the ID of the employee", () => {
            expect(new Employee(3, "Faisal", "faisal@fakemail.com").getID()).toBe(3);
        });
    });

    describe("getEmail", () => {
        it("Returns the email of the employee", () => {
            expect(new Employee(4, "Akhil", "akhil@fakemail.com").getEmail()).toBe("akhil@fakemail.com");
        });
    });
    describe("getRole", () => {
        it("Returns the role of the employee", () => {
            expect(new Employee(5, "Karen", "karen@fakemail.com").getRole()).toBe("Employee");
        });
    });
});