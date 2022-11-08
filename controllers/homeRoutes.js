const router = require('express').Router();
const { Recipe, User  } = require('../models');

router.get('/', async (req, res) => {
    try {
        const recipeData = await Recipe.findAll({
            include:[
                {
                    model: User,
                    attributes: ["name"],
                },
            ],
});

    const recipes = recipeData.map((recipe) => recipe.get({plain: true}));

    res.render('homepage', {
        recipes,
        logged_in: req.session.logged_in
    });
    } catch(err) {
        res.status(500).json(err);
    }
});

router.get('recipe/:id', async (req, res) => {
    try {
        const recipeData = await Recipe.FindByPk(req.params.id, {
            include: [
                {
                    module: User,
                    attributes: ['name'],
                },
            ],
        });

        const recipe = recipeData.get({ plain: true});

        res.render('recipe', {
            ...recipe,
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

router.get('/login', (req, res) => {

    if (req.session.logged_in) {
        res.redirect('/profile');
        return;
    }

    res.render('login');
});

module.exports = router;