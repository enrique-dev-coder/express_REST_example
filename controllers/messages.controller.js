import path from 'path';
// es mejor usar function para el debugging porque node te doice el nombre de la funcion

export function getMessages(req, res) {
  res.send('Holaaaaa');
}

export function postMessages(req, res) {
  console.log('Updating messages ...');
}

export function getMessagesImage(req, res, directoy) {
  res.sendFile(path.join(directoy, '..', 'public', 'one.jpg'));
}
