const express = require('express');
const app = express();
const User = require('./models/user');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const session=require('express-session');

mongoose.connect('mongodb://localhost:27017/authDemo')
    .then(() => {
        console.log('Database connected');
    })
    .catch((err) => {
        console.log(err);

    })
app.use(express.urlencoded({ extended: true })); // to parsing the incoming body
app.use(session({secret:'notagoodsecret'}))

app.set('view engine', 'ejs');
app.set('views', 'views');

app.get('/register', (req, res) => {
    // inside that you need to mention eja file name 
    res.render('register');
})

app.post('/register', async (req, res) => {
    // res.send(req.body);
    const { username, password } = req.body;
    const hash = await bcrypt.hash(password, 12);
    const user = new User({
        username,
        password: hash
    })
    await user.save();
    // res.send(hash);
    res.redirect('/');
})

app.get('/login',async(req,res)=>{
    res.render('login');
})

app.post('/login',async(req,res)=>{
    // res.send(req.body);
    const {username,password}=req.body;
    const user=await User.findOne({username});
    const validatePassword=await bcrypt.compare(password,user.password);
    if(validatePassword)
        {
            req.session.user_id=user._id;
            // res.send('login sunncefull');
            res.redirect('/secret');
        }
    else
    // res.send('not succesfull');
res.redirect('/login');
})

app.get('/', (req, res) => {
    res.send('This is My Home Page')
})

app.get('/secret', (req, res) => {
    if(!req.session.user_id)
        res.redirect('/login');
    res.send('you cannot see unless you see me!!');
})

app.listen(3000, () => {
    console.log('3000 Port:');
})



