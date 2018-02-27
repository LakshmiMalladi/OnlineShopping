var Product = require('../models/product');

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/shopping');

var products = [
    new Product({
        imagePath: "http://www.fatalgame.com/images/gothic-game.jpg",
        title: 'Gothic Video game1',
        description: 'Awesome Game!!!',
        price: 10
    }),
    new Product({
        imagePath: "http://assets1.ignimgs.com/2016/11/03/cod-iwthumb01jpg-f4850c_400w.jpg",
        title: 'Call of Duty game2',
        description: 'Awesome Game!!!',
        price: 10
    }),
    new Product({
        imagePath: "http://cdn2-www.craveonline.com/assets/uploads/2014/11/DragonAgeInquisition1.jpg",
        title: 'Dragon Age game3',
        description: 'Awesome Game!!!',
        price: 10
    }),
    new Product({
        imagePath: "https://i1.silvergames.com/p/b/slope.png",
        title: 'Slope Game game4',
        description: 'Awesome Game!!!',
        price: 10
    }),
    new Product({
        imagePath: "https://img.cinemablend.com/filter:scale/cb/1/e/e/6/0/8/1ee608e48f93251f859b218caa7e46c44f4720c44af4a55b04bff071ede6cbb0.jpg?mw=600",
        title: 'Batman Game game5',
        description: 'Awesome Game!!!',
        price: 10
    })
    /*new Product({
        imagePath: "http://www.fatalgame.com/images/gothic-game.jpg",
        title: 'Gothic Video game6',
        description: 'Awesome Game!!!',
        price: 10
    }),
    new Product({
        imagePath: "http://www.fatalgame.com/images/gothic-game.jpg",
        title: 'Gothic Video game7',
        description: 'Awesome Game!!!',
        price: 10
    }),
    new Product({
        imagePath: "http://www.fatalgame.com/images/gothic-game.jpg",
        title: 'Gothic Video game8',
        description: 'Awesome Game!!!',
        price: 10
    }),
    new Product({
        imagePath: "http://www.fatalgame.com/images/gothic-game.jpg",
        title: 'Gothic Video game9',
        description: 'Awesome Game!!!',
        price: 10
    }),
    new Product({
        imagePath: "http://www.fatalgame.com/images/gothic-game.jpg",
        title: 'Gothic Video game10',
        description: 'Awesome Game!!!',
        price: 10
    })*/
];

var done = 0;
for (var i = 0; i < products.length; i++) {
    products[i].save(function (err, result) {
        if (err)
            console.log("error" + JSON.stringify(err));
        else {
            console.log("success" + result);   
        }
        done++;
        if (done === products.length)
            exit();
    });
}

function exit() {
    mongoose.disconnect();
}



