import appConfig from '../config/appConfig';

class HomeController {
  async index(req, res) {
    res.json(
      {
        rotasPublicas: {
          alunos: `${appConfig.url}/api/students`,
          usuarios: `${appConfig.url}/api/users`,
        },
      },
    );
  }
}

export default new HomeController();
