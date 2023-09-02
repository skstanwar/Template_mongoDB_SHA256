import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cookieSession from 'cookie-session';
import {fileURLToPath} from 'url';
import {dirname, join} from 'path';
import connectDB from './config/db.js';
import crypto from 'crypto';
import hbs from 'hbs';
import  Routes  from './routes/Routes.js';
import  Routes_2  from './routes/Routes_2.js';
import {IsAuth} from './middlewares/middleware.js';
// import {profile} from  './controllers/UserDataFetch.js';
const app = express();

dotenv.config();
connectDB();
app.use(express.json());
//-------path manage--------------------
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const publicDirectoryPath = join(__dirname, 'public');
const viewsPath = join(__dirname, 'views');
const staticDirectoryPath = join(__dirname, 'static');
app.use(express.static(staticDirectoryPath));
app.set('view engine', 'hbs');
app.set('views', viewsPath);
//-------path manage--------------------



app.use(cookieSession({
    name: 'session',
    keys: [crypto.randomBytes(32).toString('hex')],
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
}));
app.use(cookieParser());

app.get('/',IsAuth, (req, res) => {
    const profile={
        username:req.session.username
    }
    res.render('index' ,{profile:profile});
});
// app.get('/profile',IsAuth, (req, res) => {
//     const profile={
//         username:req.session.username
//     }
   
//     res.render('profile', {profile:profile});
// });
app.get('/Setprofile',IsAuth, (req, res) => {
    res.sendFile(join(publicDirectoryPath, 'Setprofile.html'));
});
app.get('/login', (req, res) => {
    res.sendFile(join(publicDirectoryPath, 'login.html'));
});
app.get('/register', (req, res) => {
    res.sendFile(join(publicDirectoryPath, 'register.html'));
});
app.use('/', Routes_2);
app.use('/api', Routes);

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});

