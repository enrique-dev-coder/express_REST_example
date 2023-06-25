import express from 'express';
import friendsRouter from './routes/friends.router.js';
import messagesRouter from './routes/messages.router.js';

const app = express();

const PORT = 3000;

app.use((req, res, next) => {
  const start = Date.now();
  // aqui todas las req pasarian por esto
  // pero tambien las response por eso son utiles
  console.log(`${req.method} ${req.url}`);
  // literal next somo se llama next
  next();
  // actions go here... cuando se completa la fucnion
  const delta = Date.now() - start;
  console.log(delta);
});

// treaer contenido html en nuestro servidor de express
// es un middleware que manda express que revisa las reqs y res y dependeiendo de la ruta te manda los html

// supongo hya web apps que hacen todo en el mismo proyecto , a mi me gusta mas separarlo en otro folder
// ya esos son necesidades del proyecto

app.use('/site', express.static('public'));

// this middleware  es para parsear os json que lelleguen a las req, es necesario porque si no el objeto de req para los post mama
// express.json es un middleware ya hecho
app.use(express.json());

// agregar router de express en un middle ware para que revise las reqs que entran
// en este middleware hacequemos que todas las rutas de ese friendsRouter pasen por /friends
// friends router es un objeto que se usa para agrupar las rutas de friends y sea mas facil de manejar
// mismo caso con messages ahora nuestra app esta segregada y mas bonita
app.use('/friends', friendsRouter);
app.use('/messages', messagesRouter);

app.get('/', (req, res) => {
  // aqui ya no se usa el  res. on ni el res.end()
  res.send('Hello from express');
});

app.listen(PORT, () => {
  console.log('Listening on Port from express!! ');
});
