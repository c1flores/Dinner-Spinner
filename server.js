const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const fileUpload = require('express-fileupload');
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

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '/public')));

app.use(routes);

app.use(fileUpload());

const hbs = exphbs.create({ helpers });

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// app.get('/', (req, res) => {
//   res.render('profile');
// });

app.post('/profile', (req, res) => {
  let image;
  let uploadPath

  if(!req.files || Object.keys(req.files).length === 0){
    return res.status(400).send("No files were uploaded");
  }

  image = req.files.image;
  uploadPath = __dirname + '/test/' + image.name;

  image.mv(uploadPath, function(err) {
    if(err) return res.status(500).send(err);
  
    res.send('File Uploaded')
  });
})

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});


