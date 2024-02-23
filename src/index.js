import express from 'express';
import morgan from 'morgan';
import path from 'path';
import { engine } from 'express-handlebars';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import route from './routes/index.js';
import connect from './config/db/index.js';
import methodOverride from "method-override"
import cors from "cors"

const app = express();

app.use(methodOverride("_method"))
const port = 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const corsOptions = {
    origin: '*',
    credentials: true,            //access-control-allow-credentials:true
    optionSuccessStatus: 200,
}

app.use(cors(corsOptions))

// logger
// app.use(morgan('combined'));
//template engin
app.engine('.hbs', engine({
    extname: '.hbs',
    helpers: {
        sum: (a, b) => a + b
    }
}));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resources/views'));
//body Pareser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// public static file
app.use(express.static(path.join(__dirname, 'public')));

// Connect to DB
connect()
//route
route(app);

app.listen(3009);
