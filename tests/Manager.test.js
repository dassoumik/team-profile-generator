const Manager = require("../lib/Manager");


describe("Manager class", () => {
    it("Creates an Manager object", () => {
        const manager = new Manager(1, "Zoltan", "zoltan@fakemail.com", "zoltangit");

        expect(manager.id).toEqual(1);
        expect(manager.name).toEqual("Zoltan");
        expect(manager.email).toEqual("zoltan@fakemail.com");
    });

    describe("getName", () => {
        it("Returns the name of the manager", () => {
            expect(new Manager(2, "Jyothi", "jyothi@fakemail.com", "jyothigit").getName()).toBe("Jyothi");
        });
    });

    describe("getID", () => {
        it("Returns the ID of the manager", () => {
            expect(new Manager(3, "Faisal", "faisal@fakemail.com", "faisalgit").getID()).toBe(3);
        });
    });

    describe("getEmail", () => {
        it("Returns the email of the manager", () => {
            expect(new Manager(4, "Akhil", "akhil@fakemail.com", "akhilgit").getEmail()).toBe("akhil@fakemail.com");
        });
    });
    describe("getRole", () => {
        it("Returns the role of the manager", () => {
            expect(new Manager(5, "Karen", "karen@fakemail.com", "karengit").getRole()).toBe("Manager");
        });
    });
});