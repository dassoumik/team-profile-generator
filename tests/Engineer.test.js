const Engineer = require("../lib/Engineer");


describe("Engineer class", () => {
    it("Creates an Engineer object", () => {
        const engineer = new Engineer(1, "Zoltan", "zoltan@fakemail.com");

        expect(engineer.id).toEqual(1);
        expect(engineer.name).toEqual("Zoltan");
        expect(engineer.email).toEqual("zoltan@fakemail.com");
    });

    describe("getName", () => {
        it("Returns the name of the engineer", () => {
            expect(new Engineer(2, "Jyothi", "jyothi@fakemail.com").getName()).toBe("Jyothi");
        });
    });

    describe("getID", () => {
        it("Returns the ID of the engineer", () => {
            expect(new Engineer(3, "Faisal", "faisal@fakemail.com").getID()).toBe(3);
        });
    });

    describe("getEmail", () => {
        it("Returns the email of the engineer", () => {
            expect(new Engineer(4, "Akhil", "akhil@fakemail.com").getEmail()).toBe("akhil@fakemail.com");
        });
    });
    describe("getRole", () => {
        it("Returns the role of the engineer", () => {
            expect(new Engineer(5, "Karen", "karen@fakemail.com").getRole()).toBe("Engineer");
        });
    });
});