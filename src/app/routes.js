module.exports = (app, passport) =>{

    app.get('/', (req, res)=>{
        res.render('index');
    });

    app.get('/login', (req, res)=>{
        res.render('login', {
            massage: req.flash('loginMessage')

        });
    });
    app.post('/login', passport.authenticate('local-login', {
        successRedirect: '/next',
        failureRedirect: '/login',
        failureFlash:true
    }));
    app.get('/signup', (req, res)=>{
        res.render('signup', {
            massage: req.flash('signupMessage')

        });
    });
    app.get('/next', (req, res)=>{
        res.render('next', {
            massage: req.flash('')

        });
    });
    app.post('/signup', passport.authenticate('local-signup', {
        successRedirect: '/next',
        failureRedirect: '/signup',
        failureFlash:true
    }));
    app.get('/profile', isLoggedIn, (req, res)=>{
        res.render('profile', {
            user:req.user
        });
    });
    app.get('/logout', (req, res)=>{
        req.logout();
        res.redirect('/');
    });
    function isLoggedIn(req, res, next){
        if(req.isAuthenticated()){
            return next();
        }
        return res.redirect('/');
    }
    app.get('/scrip.js', (req, res)=>{
        res.render('scrip.js', {
            massage: req.flash('signupMessage')

        });
    });
    app.get('/chistes', (req, res)=>{
        res.render('chistes');
    });
    app.get('/A.V', (req, res)=>{
        res.render('A.V.ejs', {
            message : req.flash('')
        });
    });
    
    
    



    //hacer un get, password por body, 

};