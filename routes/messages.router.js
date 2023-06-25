import express from 'express';
import { fileURLToPath } from 'url';
import path from 'path';
import {
  getMessages,
  postMessages,
  getMessagesImage,
} from '../controllers/messages.controller.js';

// solucion del __dirname undefined en ECMAScript 6
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const messagesRouter = express.Router();

messagesRouter.get('/', (req, res) => {
  getMessages(req, res);
});

messagesRouter.get('/image', (req, res) => {
  const directoy = __dirname;
  getMessagesImage(req, res, directoy);
});

messagesRouter.post('/', (req, res) => {
  postMessages(req, res);
});

export default messagesRouter;
