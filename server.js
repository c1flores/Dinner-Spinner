const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const multer = require('multer');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const routes = require('./controllers');
const sequelize = require('./config/connection');
const helpers = require('./utils/helpers');

const app = express();
const PORT = process.env.PORT || 3001;

const sess = {
  secret: 'Super secret secret',
  cookie: {
    maxAge: 300000,
    httpOnly: true,
    secure: false,
    sameSite: 'strict',
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));

const hbs = exphbs.create({ helpers });

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '/public')));

app.use(routes);

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
      cb(null, 'upload');
  },
  filename: (req, file, cb)=> {
      console.log(file);
      cb(null, Date.now() + path.extname(file.originalname));
  }
})

const upload = multer({ storage: storage });


app.get("/recipe", (req, res) => {
  res.render("recipe")
});

app.post("/recipe", upload.single("image")), (req, res) => {
}

app.get("/addRecipe", (req, res) => {
  res.render("addRecipe")
});

app.post("/addRecipe", upload.single("image"), (req, res) => {

  
});

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});


