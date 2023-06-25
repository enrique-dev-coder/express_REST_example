import express from 'express';
import {
  getAllFriends,
  getFriendById,
  postFriend,
} from '../controllers/friends.controller.js';

const friendsRouter = express.Router();

// aqui al router puedes agregar un middle ware para cosas que quieras le pasen a las reqs solo de /friends

friendsRouter.use((req, res, next) => {
  console.log(`ip address: ${req.ip}`);
  next();
});

// al endpoint de friends te entrega ese res.json
friendsRouter.get('/', (req, res) => {
  getAllFriends(req, res);
});
// parametros de rutas con express
friendsRouter.get('/:id', (req, res) => {
  getFriendById(req, res);
});
// add a new friend with a post request
friendsRouter.post('/', (req, res) => {
  postFriend(req, res);
});

export default friendsRouter;
