class EstacionamentoService {
    constructor(veiculoRepository) {
        this.veiculoRepository = veiculoRepository; // Injeção de Dependência
    }

    async listarPatio() {
        // Ela serve para o Controller conseguir ver quem está no estacionamento
        return await this.veiculoRepository.findAll();
    }

    async registrarEntrada(dadosVeiculo) {
        // Regra de Negócio 1: Validação de dados
        if (!dadosVeiculo.placa) {
            throw new Error("Não é possível registrar entrada sem placa.");
        }

        // Regra de Negócio 2: Verificar duplicidade (simulação)
        const todos = await this.veiculoRepository.findAll();
        const jaExiste = todos.find(v => v.placa === dadosVeiculo.placa);
        if (jaExiste) {
            throw new Error("Este veículo já está no estacionamento.");
        }

        return await this.veiculoRepository.create(dadosVeiculo);
    }

    async calcularSaida(id) {
        // Regra de Negócio 3: Lógica de cobrança
        const veiculo = await this.veiculoRepository.findById(id);
        const agora = new Date();
        const permanencia = (agora - veiculo.entrada) / (1000 * 60 * 60); // em horas
        const valorTotal = permanencia * 5.00; // R$ 5,00 por hora

        await this.veiculoRepository.delete(id);
        return { ...veiculo, valorTotal };
    }
}

module.exports = EstacionamentoService;