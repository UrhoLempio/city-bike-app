import express from 'express';
import postgres from 'postgres';

const app = express();
const port = 3000;
const sql = postgres({
  port: 5432, 
  host: 'localhost',
  pass: 'academy',
  db: 'citybike',
  username: 'academy'
})

app.get('/stations', async (req, res) => {
  const users = await sql`
  SELECT * FROM "station"
  `
  res.header("Access-Control-Allow-Origin", "*");
  res.send(users);
});

app.get('/stations/:id', async (req, res) => {
  const id = req.params.id
  const users = await sql`
  SELECT * FROM "station"
  WHERE id = ${id}
  `
  res.header("Access-Control-Allow-Origin", "*");
  res.send(users);
});

app.get('/stations/:id/departures', async (req, res) => {
  const id = req.params.id
  const users = await sql`
  SELECT * FROM "journey"
  WHERE departure_station_id = ${id}
  `
  res.header("Access-Control-Allow-Origin", "*");
  res.send(users);
});

app.get('/stations/:id/returns', async (req, res) => {
  const id = req.params.id
  const users = await sql`
  SELECT * FROM "journey"
  WHERE return_station_id = ${id}
  `
  res.header("Access-Control-Allow-Origin", "*");
  res.send(users);
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
