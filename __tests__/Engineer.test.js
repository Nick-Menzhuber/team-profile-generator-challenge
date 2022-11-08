const Engineer = require('../lib/Engineer')
const engineer = new Engineer("Anakin Skywalker", "2", "skyguy@yahoo.com", "greatest-jedi-ever")

describe("engineer object populates and operates as expected", () => {
    
    it("returns the engineer object with correct information", () => {
        expect(engineer.name).toBe("Anakin Skywalker");
        expect(engineer.id).toBe("2");
        expect(engineer.email).toBe("skyguy@yahoo.com");
        expect(engineer.gitHub).toBe("greatest-jedi-ever")
    }) 

    it("returns getName method", ()=> {
        expect(engineer.getName()).toBe("Anakin Skywalker")
    })

    it("returns getId method", ()=> {
        expect(engineer.getId()).toBe("2")
    })

    it("returns getEmail method", ()=> {
        expect(engineer.getEmail()).toBe("skyguy@yahoo.com")
    })

    it("returns getGitHub method", ()=> {
        expect(engineer.getGitHub()).toBe("greatest-jedi-ever")
    })

    it("returns getJobType method", ()=> {
        expect(engineer.getJobType()).toBe("Engineer")
    })
})