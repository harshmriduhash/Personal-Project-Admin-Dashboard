exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('animes').del()
    .then(function() {
      // Inserts seed entries
      return knex('animes').insert([{
        photo_url: 'https://i.pinimg.com/736x/b9/62/e6/b962e6575cfdcdf10b3381e0af723215--anime-scenery-kawaii-anime.jpg',
        title: 'Your Name',
        rating: 'PG',
        price: 10.00,
        on_sale: true,
        in_cart: false
      }, {
        photo_url: 'http://www.telegraph.co.uk/content/dam/films/2017/12/03/maryandthewitchsflower_trans_NvBQzQNjv4Bqeoh6R_Asy6TV7Mp4S1i8PaTr3qPSI_1KVB4imOXWcAE.JPG?imwidth=480',
        title: 'Mary and the Witch Flower',
        rating: 'PG',
        price: 11.00,
        on_sale: false,
        in_cart: false
      }, {
        photo_url: 'https://www.movieposter.com/posters/archive/main/93/MPW-46633',
        title: 'Howl\'s Moving Castle',
        rating: 'PG',
        price: 12.00,
        on_sale: true,
        in_cart: false
      }, {
        photo_url: 'https://orig00.deviantart.net/9f83/f/2010/027/3/c/ponyo_on_the_cliff_by_the_sea_by_lord_phillock.png',
        title: 'Ponyo',
        rating: 'G',
        price: 13.00,
        on_sale: false,
        in_cart: false
      }, {
        photo_url: 'https://dickwalsh.files.wordpress.com/2013/10/spirited_away.jpg',
        title: 'Spirited Away',
        rating: 'PG',
        price: 14.00,
        on_sale: true,
        in_cart: false
      }]);
    });
};
