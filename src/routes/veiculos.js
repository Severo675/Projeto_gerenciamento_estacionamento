const express = require('express');
const router = express.Router();

module.exports = (veiculoController) => {
    router.post('/veiculos', (req, res) => veiculoController.create(req, res));
    router.get('/veiculos', (req, res) => veiculoController.index(req, res));
    router.delete('/veiculos/:id', (req, res) => veiculoController.delete(req, res));

    return router;
}