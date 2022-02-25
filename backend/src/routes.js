import { Router } from 'express';
import multer from 'multer';
import ContactController from './app/controllers/ContactController';
import SessionController from './app/controllers/SessionController';
import UserController from './app/controllers/UserController';
import auth from './app/middlewares/auth';
import multerConfig from './config/multer';
const routes = new Router();
const avatarUpload = multer(multerConfig.avatar);




routes.post('/users', UserController.store);
routes.post('/session', SessionController.store);

routes.use(auth)
routes.get('/users/', UserController.index);
routes.post('/contacts',  avatarUpload.single('avatar'), ContactController.store);
routes.get('/contacts', ContactController.list);
routes.get('/contacts/:id', ContactController.index);
routes.put('/contacts/:id', ContactController.update);
routes.delete('/contacts/:id', ContactController.delete);
export default routes;
