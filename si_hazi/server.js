
const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');


const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'gpu_db'
});


const app = express();
app.use(bodyParser.json());
app.use(cors());


app.get('/gpu', (req, res) => {
    connection.query(`
      SELECT gi.id, gi.marka, gi.modell, gs.vram, gs.boost_clock, gs.cores
      FROM gpu_info gi
      JOIN gpu_specs gs ON gi.id = gs.gpu_id
    `, (error, results) => {
        if (error) return res.status(500).json({ error: 'Hiba az adatbázis lekérdezése közben' });
        res.json(results);
    });
});

//Minden Nvidia kártyát megjelenítjük
app.get('/gpu/nvidia', (req, res) => {
    connection.query(`
      SELECT gi.id, gi.marka, gi.modell, gs.vram, gs.boost_clock, gs.cores
      FROM gpu_info gi
      JOIN gpu_specs gs ON gi.id = gs.gpu_id
      WHERE gi.marka = 'NVIDIA'
    `, (error, results) => {
        if (error) return res.status(500).json({ error: 'Hiba az adatbázis lekérdezése többen' });
        res.json(results);
    });
});

//Minden AMD kártyát megjelenítjük
app.get('/gpu/amd', (req, res) => {
    connection.query(`
      SELECT gi.id, gi.marka, gi.modell, gs.vram, gs.boost_clock, gs.cores
      FROM gpu_info gi
      JOIN gpu_specs gs ON gi.id = gs.gpu_id
      WHERE gi.marka = 'AMD'
    `, (error, results) => {
        if (error) return res.status(500).json({ error: 'Hiba az adatbázis lekérdezése többen' });
        res.json(results);
    });
})


app.get('/gpu/:id', (req, res) => {
    const { id } = req.params;
    connection.query(`
      SELECT gi.id, gi.marka, gi.modell, gs.vram, gs.boost_clock, gs.cores
      FROM gpu_info gi
      JOIN gpu_specs gs ON gi.id = gs.gpu_id
      WHERE gi.id = ?
    `, [id], (error, results) => {
        if (error) return res.status(500).json({ error: 'Hiba az adatbázis lekérdezése közben' });
        res.json(results[0]);
    });
});


app.post('/gpu', (req, res) => {
    const { marka, modell, vram, boost_clock, cores } = req.body;
    connection.query('INSERT INTO gpu_info (marka, modell) VALUES (?, ?)', [marka, modell], (error, results) => {
        if (error) return res.status(500).json({ error: 'Hiba az adatbázisba írás közben' });
        const gpuId = results.insertId;
        connection.query('INSERT INTO gpu_specs (gpu_id, vram, boost_clock, cores) VALUES (?, ?, ?, ?)',
            [gpuId, vram, boost_clock, cores]);
    });
});

app.put('/gpu/:id', (req, res) => {
    const { id } = req.params;
    const { marka, modell, vram, boost_clock, cores } = req.body;
    if (!marka || !modell || !vram || !boost_clock || !cores) {
        return res.status(400).json({ error: 'Hiányzó adatok: minden mező szükséges' });
    }
    connection.query('UPDATE gpu_info SET marka = ?, modell = ? WHERE id = ?', [marka, modell, id], (error, results) => {
        if (results.affectedRows === 0) return res.status(404).json({ error: 'Videókártya nem található' });
        connection.query('UPDATE gpu_specs SET vram = ?, boost_clock = ?, cores = ? WHERE gpu_id = ?',
            [vram, boost_clock, cores, id]);
    });
});

app.delete('/gpu/:id', (req, res) => {
    const { id } = req.params;
    connection.query('DELETE FROM gpu_specs WHERE gpu_id = ?', [id], (error) => {
        if (error) return res.status(500).json({ error: 'Hiba a specifikációk törlése közben' });
        connection.query('DELETE FROM gpu_info WHERE id = ?', [id]);
    });
});

app.listen(3000, () => {
    console.log('A szerver fut a 3000-es porton');
});