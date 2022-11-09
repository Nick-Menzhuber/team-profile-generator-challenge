const Manager = require('../lib/Manager')
const manager = new Manager("Jedi Team", "Obi-Wan Kenobi", "1", "obiwan@jedicouncil.net", "(612) 123-4567")

describe("manager object populates and operates as expected", () => {

    it("returns the manager object with correct information", () => {
        expect(manager.teamName).toBe("Jedi Team");
        expect(manager.name).toBe("Obi-Wan Kenobi");
        expect(manager.id).toBe("1");
        expect(manager.email).toBe("obiwan@jedicouncil.net");
        expect(manager.phone).toBe("(612) 123-4567")
    }) 

    it("returns getName method", ()=> {
        expect(manager.getName()).toBe("Obi-Wan Kenobi")
    })

    it("returns getId method", ()=> {
        expect(manager.getId()).toBe("1")
    })

    it("returns getEmail method", ()=> {
        expect(manager.getEmail()).toBe("obiwan@jedicouncil.net")
    })

    it("returns getPhone method", ()=> {
        expect(manager.getPhone()).toBe("(612) 123-4567")
    })

    it("returns getJobType method", ()=> {
        expect(manager.getJobType()).toBe("Manager")
    })
})