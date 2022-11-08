const router = require('express').Router();
const { Recipe, User  } = require('../models');

router.get('/', async (req, res) => {
    try {
        const projectData = await Recipe.findAll({
            include:[
                {
                    model: User,
                    attributes: ["name"],
                },
            ],
});

    const projects = projectData.map((project) => project.get({plain: true}));

    res.render('homepage', {
        projects,
        logged_in: req.session.logged_in
    });
    } catch(err) {
        res.status(500).json(err);
    }
});

router.get('project/:id', async (req, res) => {
    try {
        const projectData = await Project.FindByPk(req.params.id, {
            include: [
                {
                    module: User,
                    attributes: ['name'],
                },
            ],
        });

        const project = projectData.get({ plain: true});

        res.render('project', {
            ...project,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/profile', async (req, res) => {
    try {

        const userData = await User.FindByPk(req.session.user_id, {
            attributes: { exclude: ['password']},
            include: [{ model: Recipe }],
        });

        const user = userData.get({ plain: true});

        res.render('profile', {
            ...user,
            logged_in: true
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('./login', (req, res) => {

    if (req.session.logged_in) {
        res.redirect('/profile');
        return;
    }

    res.render('login');
});

module.exports = router;