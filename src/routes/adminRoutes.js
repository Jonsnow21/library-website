var express = require('express');
var adminRouter = express.Router();
var mongodb = require('mongodb').MongoClient;

var books = [{
    title: 'War and Peace',
    genre: 'Historical Fiction',
		bookId: 656,
    author: 'Lev Nikolayevich Tolstoy',
    read: false
    }, {
    title: 'Les Misérables',
    genre: 'Classics',
    author: 'Victor Hugo',
		bookId: 24280,
    read: false
    }, {
    title: 'The Summer We Read Gatsby',
    genre: 'Fiction',
    author: 'Danielle Ganek',
		bookId: 7744084,
    read: false
    }, {
    title: 'The Passage',
    genre: 'Horror',
    author: 'Justin Cronin',
		bookId: 6690798,
    read: false
    }, {
    title: 'Red Hook Road ',
    genre: 'Fiction',
    author: 'Ayelet Waldman',
		bookId: 7624169,
    read: false
    }, {
    title: 'The Kite Runner',
    genre: 'Fiction',
    author: 'Khaled Hosseini',
		bookId: 77203,
    read: false
    }];


var router = function (nav) {

    adminRouter.route('/addBooks')
        .get(function (req, res) {
            var url = 'mongodb://localhost:27017/libraryApp';

            mongodb.connect(url, function (err, db) {
                var collection = db.collection('books');
                collection.insertMany(books, function (err, results) {
                    res.send(results);
                    db.close();
                });
            });

            //res.send('inserting books');
        });

    return adminRouter;
};

module.exports = router;