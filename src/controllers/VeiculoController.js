class VeiculoController {
    constructor(service) { this.service = service; }

    async store(req, res) {
        try{
            const veiculo = await this.service.resgistrarEntrada(req.body);
            res.status(201).json(veiculo);
        } catch (e) { res.status(400).json({ erro: e.message}); }
    }

    async index(req, res) {
        const lista = await this.service.listarPatio();
        res.json(lista);
    }
}

module.exports = VeiculoController;