const express = require('express');
const router = express.Router();
// modele z dużej litery
const News = require('../models/news')

router.all('*', (req, res, next) => {
    if (!req.session.admin) {
        res.redirect('login');

        return;
    }

    next()

})

/* GET home page. */
router.get('/', (req, res) => {
    console.log(req.session.admin);
    // const newsData = new News({
    //     title: 'Tytuł testowy',
    //     description: 'Testowy opis'
    // })
    // newsData.save((err) => {
    //     console.log(err);
    // })

    res.render('admin/index', {
        title: 'Administrators'
    });
});


router.get('/news/add', (req, res) => {
    res.render('admin/news-form', {
        title: 'Administrator'
    });
});

module.exports = router;