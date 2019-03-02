const uuid = require('uuid')

class external_entity {
    constructor(name, address,telephone, fax, email) {
        this.name = name;
        this.address = address;
        this.telephone = telephone;
        this.fax = fax;
        this.email=email;
        this.id = uuid.v4();
    };
}

module.exports = external_entity