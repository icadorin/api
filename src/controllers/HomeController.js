import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Israel',
      sobrenome: 'Cadorin',
      email: 'israel@gmail.com',
      idade: 333,
      peso: 76,
      altura: 1.74,
    });
    res.json(novoAluno);
  }
}

export default new HomeController();
