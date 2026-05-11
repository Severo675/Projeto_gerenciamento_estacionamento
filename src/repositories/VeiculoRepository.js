class VeiculoRepository {
    constructor(db) {
        this.db = db; //Conexão
    }

    async create(veiculo) {
        const sql = 'INSERT INTO veiculos (modelo, placa, cor, entrada) VALUES (?, ?, ?, ?)';
        const [result] = await this.db.query(sql, [veiculo.modelo, veiculo.placa, veiculo.cor, veiculo.entrada]);
        veiculo.id = result.insertId; //Ad gerado no veiculo
        return veiculo;
    }

    async findAll() {
        const sql = 'SELECT * FROM veiculos';
        const [rows] = await this.db.query(sql);
        return rows;
    }

    async update(id, dados) {
        const sql = 'UPDATE veiculos SET modelo = ?, cor = ? WHERE id = ?';
        return await this.db.query(sql, [dados.modelo, dados.cor, id]);
    }

    async delete(id) {
        const sql ='DELETE FROM veiculos WHERE id = ?';
        return await this.db.query(sql, [id]);
    }
}

module.exports = VeiculoRepository;