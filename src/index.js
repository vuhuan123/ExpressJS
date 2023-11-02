import express from 'express';
import morgan from 'morgan'
import path from 'path'
import { engine } from 'express-handlebars';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const app = express();
const port = 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// logger
app.use(morgan('combined'));

//template engin
app.engine('.hbs',engine({extname: '.hbs'}));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resources/views'));

app.use(express.static(path.join(__dirname,"public")));

app.get('/', (req, res) => {
    res.render('home');
})
app.get('/news', (req, res) => {
    res.render('news');
})

app.listen(3000);