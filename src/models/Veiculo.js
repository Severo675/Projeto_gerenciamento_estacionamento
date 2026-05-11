class Veiculo {
    constructor(modelo, placa, cor) {
    this.id = null; //Sera getrado um banco aqui
    this.modelo = modelo;
    this.placa = placa;
    this.cor = cor;
    
    this.entrada = new Date();
    }
}

module.exports = Veiculo;