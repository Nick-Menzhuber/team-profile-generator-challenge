const Employee = require('./Employee');

class Manager extends Employee {
    constructor(teamName, name, email, id, phone) {
        super(name, email, id);
        this.teamName = teamName;
        this.phone = phone
    }
    getPhone() {
        return this.phone
    }
    getJobType() {
        return 'Manager';
    }
}
module.exports = Manager; 