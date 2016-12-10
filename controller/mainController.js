var app = require('../server.js');


var movies = [
  {
    name: 'Finding Dory',
    pic: 'https://d1tizfy05xv795.cloudfront.net/uploads/2016/11/post_typevideop26931.jpg',
    price: '20',
    id: "1",
    rating: "PG",
    type: "newRel"
  },
  {
    name: 'Tarzan',
    pic: 'https://d1tizfy05xv795.cloudfront.net/2016/10/Tarzan.jpg',
    price: '10',
    id: "2",
    rating: "PG-13",
    type: "newRel"
  },
  {
    name: 'Jason Bourne',
    pic: 'https://d1tizfy05xv795.cloudfront.net/2016/12/Jason+Bourne.jpg',
    price: '1',
    id: "3",
    rating: "PG-13",
    type: "newRel"
  },
  {
    name: 'Nine Lives',
    pic: 'https://d1tizfy05xv795.cloudfront.net/uploads/2016/10/post_typevideop26779.jpg',
    price: '10',
    id: "4",
    rating: "PG-13",
    type: "newRel"
  },
  {
    name: 'Star Trek',
    pic: 'https://d1tizfy05xv795.cloudfront.net/2016/10/Star+Trek+Beyond.jpg',
    price: '10',
    id: "5",
    rating: "PG-13",
    type: "christmas"
  },
  {
    name: 'Cafe Society',
    pic: 'https://d1tizfy05xv795.cloudfront.net/uploads/2016/10/post_typevideop26417.jpg',
    price: '10',
    id: "6",
    rating: "PG-13",
    type: "recent"
  },
  {
    name: 'Kubo',
    pic: 'https://d1tizfy05xv795.cloudfront.net/uploads/2016/10/post_typevideop26431.jpg',
    price: '10',
    id: "7",
    rating: "PG",
    type: "mostPopular"
  },
  {
    name: 'BFG',
    pic: 'https://d1tizfy05xv795.cloudfront.net/2016/11/The+BFG.jpg',
    price: '1',
    id: "8",
    rating: "PG",
    type: "newRel"
  },
  {
    name: 'Peters Dragon',
    pic: 'https://d1tizfy05xv795.cloudfront.net/2016/11/Pete%27s+Dragon.jpg',
    price: '1',
    id: "9",
    rating: "PG",
    type: "newRel"
  },
  {
    name: 'Star Trek',
    pic: 'https://d1tizfy05xv795.cloudfront.net/2016/10/Star+Trek+Beyond.jpg',
    price: '1',
    id: "10",
    rating: "PG-13",
    type: "newRel"
  },
  {
    name: 'Alice Through The Looking Glass',
    pic: 'https://d1tizfy05xv795.cloudfront.net/uploads/2016/10/glass.jpg',
    price: '1',
    id: "11",
    rating: "PG",
    type: "newRel"
  },
  {
    name: 'Independance Day: Resurgence',
    pic: 'https://d1tizfy05xv795.cloudfront.net/uploads/2016/09/post_typevideop25777.jpg',
    price: '1',
    id: "12",
    rating: "PG-13",
    type: "newRel"
  },
  {
    name: 'Central Intelligence',
    pic: 'https://d1tizfy05xv795.cloudfront.net/uploads/2016/09/post_typevideop25530.jpg',
    price: '1',
    id: "13",
    rating: "PG-13",
    type: "newRel"
  },
  {
    name: 'Now You See Me: 2',
    pic: 'https://d1tizfy05xv795.cloudfront.net/2016/09/Now+You+See+Me+2.jpg',
    price: '1',
    id: "14",
    rating: "PG-13",
    type: "newRel"
  },
  {
    name: 'Beauty And The Beast',
    pic: 'https://d1tizfy05xv795.cloudfront.net/uploads/2016/11/post_typevideop27214.jpg',
    price: '1',
    id: "15",
    rating: "PG",
    type: "recent"
  },
  {
    name: 'A Prince For christmas',
    pic: 'https://d1tizfy05xv795.cloudfront.net/uploads/2016/11/post_typevideop27202.jpg',
    price: '1',
    id: "16",
    rating: "PG",
    type: "recent"
  },
  {
    name: 'Home Alone 4',
    pic: 'https://d1tizfy05xv795.cloudfront.net/uploads/2016/11/ha4.jpg',
    price: '1',
    id: "17",
    rating: "PG",
    type: "recent"
  },
  {
    name: 'Pets',
    pic: 'https://d1tizfy05xv795.cloudfront.net/uploads/2016/10/post_typevideop26596.jpg',
    price: '1',
    id: "18",
    rating: "PG",
    type: "recent"
  },
  {
    name: 'Faith Like Potatoes',
    pic: 'https://d1tizfy05xv795.cloudfront.net/uploads/2016/11/post_typevideop26924.jpg',
    price: '1',
    id: "19",
    rating: "PG",
    type: "recent"
  },
  {
    name: 'Robots',
    pic: 'https://d1tizfy05xv795.cloudfront.net/uploads/2016/09/post_typevideop25675.jpg',
    price: '1',
    id: "20",
    rating: "PG",
    type: "recent"
  },
  {
    name: 'Victory',
    pic: 'https://d1tizfy05xv795.cloudfront.net/uploads/2016/09/post_typevideop25646.jpg',
    price: '1',
    id: "21",
    rating: "PG",
    type: "recent"
  },
  {
    name: 'Capton America: Civil War ',
    pic: 'https://d1tizfy05xv795.cloudfront.net/uploads/2016/09/post_typevideop25536.jpg',
    price: '1',
    id: "22",
    rating: "PG-13",
    type: "newRel"
  }
];

module.exports = {

  getNewRelease: function(req, res, next) {
    var array = [];
      for (var i = 0; i < movies.length; i++) {
        if (movies[i].type === "newRel") {
          var ans = {
             name: movies[i].name,
             img: movies[i].pic,
             price: movies[i].price,
             rating: movies[i].rating,
             id: movies[i].id,
           }
          array.push(ans);
        }

      }
        res.json(array);
  },

  getrecentAdded: function(req, res, next) {
    var array = [];
      for (var i = 0; i < movies.length; i++) {
        if (movies[i].type === "recent") {
          var ans = {
             name: movies[i].name,
             img: movies[i].pic,
             price: movies[i].price,
             rating: movies[i].rating,
             id: movies[i].id,
           }
          array.push(ans);
        }

      }
        res.json(array);
  }

}
