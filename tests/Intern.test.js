const Intern = require("../lib/Intern");


describe("Intern class", () => {
    it("Creates an Intern object", () => {
        const intern = new Intern(1, "Zoltan", "zoltan@fakemail.com", "zoltangit");

        expect(intern.id).toEqual(1);
        expect(intern.name).toEqual("Zoltan");
        expect(intern.email).toEqual("zoltan@fakemail.com");
    });

    describe("getName", () => {
        it("Returns the name of the intern", () => {
            expect(new Intern(2, "Jyothi", "jyothi@fakemail.com", "jyothigit").getName()).toBe("Jyothi");
        });
    });

    describe("getID", () => {
        it("Returns the ID of the intern", () => {
            expect(new Intern(3, "Faisal", "faisal@fakemail.com", "faisalgit").getID()).toBe(3);
        });
    });

    describe("getEmail", () => {
        it("Returns the email of the intern", () => {
            expect(new Intern(4, "Akhil", "akhil@fakemail.com", "akhilgit").getEmail()).toBe("akhil@fakemail.com");
        });
    });
    describe("getRole", () => {
        it("Returns the role of the intern", () => {
            expect(new Intern(5, "Karen", "karen@fakemail.com", "karengit").getRole()).toBe("Intern");
        });
    });
    describe("getSchool", () => {
        it("Returns the school name of the intern", () => {
            expect(new Intern(5, "Karen", "karen@fakemail.com", "Cambridge University").getSchool()).toBe("Cambridge University");
        });
    });
});