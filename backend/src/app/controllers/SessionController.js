import connection from '../../database';

class SessionController {
  async login(req, res) {
    const { id } = req.body;

    const ong = await connection('ongs').where('id', id).select('name').first();

    if (!ong) {
      return res.status(400).json({ error: 'Ong not found.' });
    }

    return res.json(ong);
  }
}

export default new SessionController();
