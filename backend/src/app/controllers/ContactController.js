import * as Yup from 'yup';
import Contact from '../models/Contact';
import Avatar from '../models/Avatar';
import AvatarController  from '../controllers/AvatarController';
import fs from 'fs';

class ContactsController {


    async store(req, res) {
        const schema = Yup.object({
            name: Yup.string().required(),
            email: Yup.string().email(),
            phone: Yup.string().required(),
        });

        if (!(await schema.isValid(req.body))) {
            return res.status(400).json({ error: 'Falha na Validação.' });
        }

        const { name, email, phone } = req.body

        const contact = await Contact.create({
            name,
            email,
            phone,
            id_owner: req.userId
        });

        if(req.file) {
            const { originalname: filename, filename: path } = req.file;
            const ext = filename.split('.').pop();

            const avatar = await AvatarController.upload(
                null,
                contact.id,
                'avatars',
                path
            );

            await contact.save()
        }
        return res.json(contact);
    }

    async index(req, res) {
        const contact = await Contact.findByPk(req.params.id, {
            include: [
                {
                    model: Avatar,
                    as: 'avatar',
                    attributes: ['name', 'path', 'type', 'url'],
                },
            ],
        });

        if (!contact)
            return res.status(404).json({ error: 'Contato não encontrado' });

        return res.json(contact);
    }

    async update(req, res) {
        const contact = await Contact.findByPk(req.params.id);
        if (!contact)
            return res.status(404).json({ error: 'Contato não encontrado' });

        const schema = Yup.object({
            name: Yup.string(),
            email: Yup.string(),
            phone: Yup.string().min(6),
        });

        if (!(await schema.isValid(req.body))) {
            return res.status(400).json({ error: 'Falha na Validação.' });
        }


        await contact.update(req.body);

        return res.json(contact);
    }

    async list(req, res) {
        const contacts = await Contact.findAll({
            include: [
                {
                    model: Avatar,
                    as: 'avatar',
                    attributes: ['name', 'path', 'type', 'url'],
                },
            ],
            where: {
                id_owner: req.userId
            }
        })

        return res.json(contacts)
    }

    async delete(req, res) {
        const contact = await Contact.findByPk(req.params.id,
            {
                include: [
                    {
                        model: Avatar,
                        as: 'avatar',
                        attributes: ['name', 'path', 'type', 'url'],
                    },
                ],
            });

        if (!contact)
            return res.status(404).json({ error: 'Contato não encontrado' });


        if(contact.avatar) {
            const path = './tmp/uploads/avatars/' + contact.avatar.name;

            fs.unlink(path, (err) => {
                if (err) {
                  console.error(err)
                  return
                }

              })

        }

        await contact.destroy()

        return res.status(204).json()
    }
}

export default new ContactsController();
