
/*
 * GET home page.
 */

exports.index = function (req, res) {
    res.render('index', { title: 'Express', year: new Date().getFullYear() });
};

exports.about = function (req, res) {
    res.render('about', { title: 'About', year: new Date().getFullYear(), message: 'Your application description page.' });
};

exports.contact = function (req, res) {
    res.render('contact', { title: 'Contact', year: new Date().getFullYear(), message: 'Your contact page.' });
};

// Route to Chat Page
exports.chat = function (req, res) {
    res.render('chat', { title: 'Contact', year: new Date().getFullYear(), message: 'Information sent from the Controller' });
};

// Route to Index2
exports.index2 = function (req, res) {
    res.render('index2', { title: 'Index 2', year: new Date().getFullYear(), message: 'This is index 2' });
};
