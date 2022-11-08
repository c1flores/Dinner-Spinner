const { User } = require('../models');

const userdata = [
    {
        name: 'Daniel Gutierrez',
        email: 'leinad6ix.z@gmail.com',
        password:'123456789'
    },
    {
        name: 'Christian Flores',
        email: 'c1flores@ucsd.edu',
        password:'123456789'
    },
    {
        name: 'William Paulovitz',
        email: 'wplovitz@gmail.com',
        password:'123456789'
    },
    {
        name: 'Lee Jongwon',
        email: 'jongwonlee12345@gmail.com',
        password:'123456789'
    }
]

const seedUser = () => User.bulkCreate(userdata);

module.exports = seedUser;