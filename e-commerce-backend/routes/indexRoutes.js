const express = require('express');
const router = express.Router();
const knex = require('../db/knex');
const knex_populate = require('knex-populate');

/* GET home page. */
router.get('/', function(req, res, next) {
  knex('animes').select().then(animes => res.json(animes))
});

router.get('/:id', function(req, res) {
  knex('animes').select().where('id', req.params.id).then(anime => res.json(anime))
});

router.post('/animes', function(req, res) {
  knex('animes').returning('*').insert(req.body).then((anime) => res.json(anime));
});

router.patch('/cart/:id/add', function(req, res) {
  knex('animes').returning('*').update({in_cart: true}).where('id', req.params.id).then(anime => res.json(anime));
});

router.patch('/cart/:id/remove', function(req, res) {
  knex('animes').returning('*').update({in_cart: false}).where('id', req.params.id).then(anime => res.json(anime));
});

router.delete('/:id', function(req, res) {
  knex('animes').del().where('id', req.params.id).then(() => {
    knex('animes').select().then(animes => res.json(animes))
  });
});

module.exports = router;
