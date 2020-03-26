import crypto from 'crypto';

import connection from '../../database';

class OngController {
  async listOngs(req, res) {
    const ongs = await connection('ongs').select('*');

    return res.json(ongs);
  }

  async createOng(req, res) {
    const { name, email, whatsapp, city, uf } = req.body;

    const id = crypto.randomBytes(4).toString('hex');

    await connection('ongs').insert({
      id,
      name,
      email,
      whatsapp,
      city,
      uf,
    });

    return res.json({ id });
  }
}

export default new OngController();
