const bcrypt = require('bcryptjs');
const User = require("../model/user");


exports.getLogIn = (req, res, next) => {
    // Render the log in page
    res.render('authorization/login-page', {
        url: '/login',
        pageTitle: 'LogIn',
        isLoggedIn: req.session.isLoggedIn
    });
}

exports.postLogIn = (req, res, next) => {
    /*  I defined and stored isLoggedIn in request then why it's not showing the result it should.
        It is because each request is new, independent of previous requests, if we change or store
        something in the previous request it will not be seen in new request. That how http work
        Each request though made from same IP address will be treated as a new request.
        But we store the user in req, which is available in all requests, How so ?.
        It is because we store user in app.use which will run for all requests and hence for all
        request user is stored in request.
    
        Now how can we store data across all the requests.
        1. we can use some sort of global variables that store the data and hence can be used
        in each request. But the problem with this approach will be it will be same for all user.
        Since node works on single thread if we change the variable for a particular user's request
        then that variable will be changed for all the user, and that we don't want.
    
        2. We can use cookies for storing the data we need and it will be shared across all the requests
        and since cookies are stored in the browser. If we go ahead and change the data for one particular 
        user's request then the changed data will only be stored in the browser of that particular user.
    
        ! Why second approach is not useful in this case
    
        Cookies are very useful for sharing info across the req, but it is definitely not good for some
        cases like what we are using it for. We are using cookies to store if the user is logged in or not
        and since cookies can easily be manipulated by user they can cheat out app and can see the content
        even if they are not logged in.
        ? To prevent this sessions are used
    */

    // Solution 2
    // res.setHeader('Set-Cookie', 'isLoggedIn=true');

    // Solution 3
    // This session is available to user with particular hash value which is stored in the cookie
    // Each user have diff hash value.


    // Getting the user from the database

    // 1. First get the data entered by the user
    const email = req.body.email;
    const password = req.body.password;

    // 2. Find the user by their email
    User.findOne({ email: email })
        .then(user => {

            // If we get the user
            if (user) {
                // Check if the password is correct
                return bcrypt.compare(password, user.password)
                    .then(passwordCheck => {
                        if (passwordCheck) {
                            req.session.isLoggedIn = true;

                            // We are storing the user object to the session so that we know this session is for which
                            // user
                            // keep in mind that this session user does not have all the cool features of mongodb.
                            req.session.user = user;

                            // Redirect should happen once the session logged in is stored
                            return req.session.save(err => {
                                console.log(err);
                                res.redirect('/');
                            })
                        }
                        return res.redirect('/login');
                    })
                    .catch(err => console.log("This is the error message",err))
            }
            return res.redirect('/login');
        })
        .catch(err => console.log("This is err", err))
}

exports.postLogout = (req, res, next) => {
    req.session.destroy((err) => {
        console.log(err);
        res.redirect('/');
    });
}

exports.getSignIn = (req, res, next) => {
    res.render('authorization/sign-in', {
        url: '/sign-in',
        pageTitle: 'Sign-In',
        isLoggedIn: req.session.isLoggedIn
    })
}

exports.postSignIn = (req, res, next) => {

    // 1. Get user info typed in the input field
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    const confirmPassword = req.body.confirmPassword;

    // 2. Store the data in the Database
    // (i). First check if the user already exists or not
    User.findOne({ email: email })
        .then(userDoc => {
            // If this user is already present in the database
            if (userDoc) {
                // alert('This user is already exists');
                return res.redirect('/sign-in');
            }

            // We need to encrypt the password

            return bcrypt.hash(password, 12).
                then(hashPassword => {
                    // If user does not already exist in the database
                    const user = new User({
                        name: name,
                        email: email,
                        password: hashPassword,
                        cart: { items: [] }
                    })
                    return user.save()
                })
                .then(() => {
                    res.redirect('/login')
                })
                .catch(err => console.log(err))
        })
        .catch(err => console.log(err));
}
