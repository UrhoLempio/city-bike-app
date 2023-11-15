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
    res.send(users);
});

app.get('/station/:id', async (req, res) => {
    const id = req.params.id
    const users = await sql`
    SELECT * FROM "station"
    WHERE id = ${id}
    `
    res.send(users);
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
