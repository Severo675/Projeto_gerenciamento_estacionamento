const express = require ('express');
const VeiculoRepository = require ('./repositories/VeiculoRepository');
const EstacionamentoService = require ('./services/EstacionamentoService');
const VeiculoController = require ('./controllers/VeiculoController');

const app = express();
app.use(express.json());

const repo = new VeiculoRepository();
const service = new EstacionamentoService(repo);
const controller = new VeiculoController(service);

app.post('/veiculos', (req, res) => controller.store (req, res));
app.get('/veiculos', (req, res) => controller.index (req, res));

app.listen(3000, () => console.log("Estacionamento rodando!"));