const Employee = require('../lib/Employee')
const employee = new Employee("Yoda", "0", "grandmaster@jedicouncil.net")

describe("employee", () => {
    it("returns the employee object with correct information", () => {
        expect(employee.name).toBe("Yoda");
        expect(employee.id).toBe("0");
        expect(employee.email).toBe("grandmaster@jedicouncil.net");
    }) 
})
describe ("getName method", () => {
    it("returns getName method", ()=> {
        expect(employee.getName()).toBe("Yoda")
    })
})
describe ("getId method", () => {
    it("returns getId method", ()=> {
        expect(employee.getId()).toBe("0")
    })
})
describe ("getEmail method", () => {
    it("returns getEmail method", ()=> {
        expect(employee.getEmail()).toBe("grandmaster@jedicouncil.net")
    })
})