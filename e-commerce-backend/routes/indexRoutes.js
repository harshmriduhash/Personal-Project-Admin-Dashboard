const express = require('express');
const router = express.Router();
const knex = require('../db/knex');

/* Get Home Page. */
router.get('/', function(req, res, next) {
  knex('animes')
    .select()
    .then(animes => res.json(animes))
});

/*Get One Anime Item*/
router.get('/:id', function(req, res) {
  knex('animes')
    .select()
    .where('id', req.params.id)
    .then(anime => res.json(anime))
});

/*Post All Anime Items*/
router.post('/', function(req, res) {
  knex('animes')
    .returning('*')
    .insert(req.body)
    .then((anime) => res.json(anime));
});

/*Patch Add Anime Item to Cart*/
router.patch('/cart/:id/add', function(req, res) {
  knex('animes')
    .returning('*')
    .update({in_cart: true})
    .where('id', req.params.id)
    .then(anime => res.json(anime));
});

/*Patch Remove Anime Item to Cart*/
router.patch('/cart/:id/remove', function(req, res) {
  knex('animes')
  .returning('*')
  .update({in_cart: false})
  .where('id', req.params.id)
  .then(anime => res.json(anime));
});

/*Patch Edit One Anime Item*/
router.patch('/:id/edit', function(req, res) {
  console.log('edit route req.body info: ', req.body)
  knex('animes')
    .returning('*')
    .update(req.body)
    .where('id', req.params.id)
    .then(anime => res.json(anime));
});

/*Delete One Anime Item*/
router.delete('/:id/delete', function(req, res) {
  knex('animes')
    .del().where('id', req.params.id)
    .then(() => {
        knex('animes')
          .select()
          .then(animes => res.json(animes))
    });
});

module.exports = router;
