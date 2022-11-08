const { User } = require('../models');

const userdata = [
    {
        name: 'Daniel Gutierrez',
        email: 'leinad6ix.z@gmail.com'
    },
    {
        name: 'Christian Flores',
        email: 'c1flores@ucsd.edu'
    },
    {
        name: 'William Paulovitz',
        email: 'wplovitz@gmail.com'
    },
    {
        name: 'Lee Jongwon',
        email: 'jongwonlee12345@gmail.com'
    }
]

const seedUser = () => User.bulkCreate(userdata);

module.exports = seedUser;