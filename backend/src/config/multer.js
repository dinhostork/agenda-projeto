import multer from 'multer';
import crypto from 'crypto';
import { extname, resolve } from 'path';
import { v4 as uuidv4 } from 'uuid';

export default {
    avatar: {
        storage: multer.diskStorage({
            destination: resolve(
                __dirname,
                '..',
                '..',
                'tmp',
                'uploads',
                'avatars'
            ),
            filename: (req, file, cb) => {

                crypto.randomBytes(16, (err, res) => {
                    if (err) return cb(err);
                    return cb(null, uuidv4()  + extname(file.originalname));

                });
            },
        }),
    },
};
