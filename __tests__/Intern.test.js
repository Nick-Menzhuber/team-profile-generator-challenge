const Intern = require('../lib/Intern')
const intern = new Intern("Ahsoka Tano", "3", "ahsokatano@gmail.com", "Coruscant Jedi Temple")

describe("intern", () => {
    it("returns the intern object with correct information", () => {
        expect(intern.name).toBe("Ahsoka Tano");
        expect(intern.id).toBe("3");
        expect(intern.email).toBe("ahsokatano@gmail.com");
        expect(intern.school).toBe("Coruscant Jedi Temple")
    }) 
})

describe ("getName method", () => {
    it("returns getName method", ()=> {
        expect(intern.getName()).toBe("Ahsoka Tano")
    })
})

describe ("getId method", () => {
    it("returns getId method", ()=> {
        expect(intern.getId()).toBe("3")
    })
})

describe ("getEmail method", () => {
    it("returns getEmail method", ()=> {
        expect(intern.getEmail()).toBe("ahsokatano@gmail.com")
    })
})

describe ("getSchool method", () => {
    it("returns getSchool method", ()=> {
        expect(intern.getSchool()).toBe("Coruscant Jedi Temple")
    })
})