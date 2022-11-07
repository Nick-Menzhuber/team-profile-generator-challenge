const Engineer = require('../lib/Engineer')
const engineer = new Engineer("Anakin Skywalker", "2", "skyguy@yahoo.com", "greatest-jedi-ever")

describe("engineer", () => {
    it("returns the engineer object with correct information", () => {
        expect(engineer.name).toBe("Anakin Skywalker");
        expect(engineer.id).toBe("2");
        expect(engineer.email).toBe("skyguy@yahoo.com");
        expect(engineer.gitHub).toBe("greatest-jedi-ever")
    }) 
})

describe ("getName method", () => {
    it("returns getName method", ()=> {
        expect(engineer.getName()).toBe("Anakin Skywalker")
    })
})

describe ("getId method", () => {
    it("returns getId method", ()=> {
        expect(engineer.getId()).toBe("2")
    })
})

describe ("getEmail method", () => {
    it("returns getEmail method", ()=> {
        expect(engineer.getEmail()).toBe("skyguy@yahoo.com")
    })
})

describe ("getGitHub method", () => {
    it("returns getGitHub method", ()=> {
        expect(engineer.getGitHub()).toBe("greatest-jedi-ever")
    })
})