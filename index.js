const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/', (req,res) => res.send('Hola mundo!!'));

app.get('/inicio', function(req,res){
	res.send('Estas en el inicio');
});
app.get('/panel', function(req,res){
	res.send('Estas en el panel');
});

app.listen(3000, () => console.log('El servidor esta en http://localhost:3000'));