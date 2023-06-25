import { friends } from '../models/friends.model.js';

export function postFriend(req, res) {
  // pequeña validacion del parametro, obvio en una api mas pro esto se puede hacer con librerias y en funciones separadas etc
  if (!req.body.name || typeof req.body.name !== 'string') {
    // importante recordar que  tienes que retornar antes de seguir con la app o se traba el server
    return res.status(400).json({
      error: 'nombre no valido',
    });
  }
  const newFriend = {
    name: req.body.name,
    id: friends.length,
  };
  // de una manera rustica se agrega al amigo
  friends.push(newFriend);
  res.json(newFriend);
}

export function getAllFriends(req, res) {
  res.json(friends);
}

export function getFriendById(req, res) {
  const id = Number(req.params.id);
  const friend = friends[id];
  if (friend) {
    res.status(200).json(friend);
  } else {
    res.status(404).json({
      error: 'friend not found',
    });
  }
}
