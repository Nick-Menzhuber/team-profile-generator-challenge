const Employee = require('../lib/Employee')
const employee = new Employee("Yoda", "0", "grandmaster@jedicouncil.net")

describe("employee object populates and operates as expected", () => {
    
    it("returns the employee object with correct information", () => {
        expect(employee.name).toBe("Yoda");
        expect(employee.id).toBe("0");
        expect(employee.email).toBe("grandmaster@jedicouncil.net");
    }) 

    it("returns getName method", ()=> {
        expect(employee.getName()).toBe("Yoda")
    })

    it("returns getId method", ()=> {
        expect(employee.getId()).toBe("0")
    })

    it("returns getEmail method", ()=> {
        expect(employee.getEmail()).toBe("grandmaster@jedicouncil.net")
    })
})