import appConfig from '../config/appConfig';

class HomeController {
  async index(req, res) {
    res.json(
      {
        RotasPúblicas: {
          Alunos: `${appConfig.url}/api/students`,
          Usuários: `${appConfig.url}/api/users`,
        },
      },
    );
  }
}

export default new HomeController();
