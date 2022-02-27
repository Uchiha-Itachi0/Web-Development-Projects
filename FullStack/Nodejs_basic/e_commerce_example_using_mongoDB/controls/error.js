module.exports = (req, res, next) => {
    res.render('error', {
        pageTitle: 'This page does not exist',
        url: '',
        isLoggedIn: req.isLoggedIn
    });
}