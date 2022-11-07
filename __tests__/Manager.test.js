const Manager = require('../lib/Manager')
const manager = new Manager("Obi-Wan Kenobi", "1", "obiwan@jedicouncil.net", "(612) 123-4567")

describe("manager", () => {
    it("returns the manager object with correct information", () => {
        expect(manager.name).toBe("Obi-Wan Kenobi");
        expect(manager.id).toBe("1");
        expect(manager.email).toBe("obiwan@jedicouncil.net");
        expect(manager.phone).toBe("(612) 123-4567")
    }) 
})

describe ("getName method", () => {
    it("returns getName method", ()=> {
        expect(manager.getName()).toBe("Obi-Wan Kenobi")
    })
})

describe ("getId method", () => {
    it("returns getId method", ()=> {
        expect(manager.getId()).toBe("1")
    })
})

describe ("getEmail method", () => {
    it("returns getEmail method", ()=> {
        expect(manager.getEmail()).toBe("obiwan@jedicouncil.net")
    })
})

describe ("getPhone method", () => {
    it("returns getPhone method", ()=> {
        expect(manager.getPhone()).toBe("(612) 123-4567")
    })
})