const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/', (req,res) => res.send('Hola mundo!!'));

app.get('/inicio', function(req,res){
	res.send('Estas en el inicio');
});

app.listen(3000, () => console.log('El servidor esta en http://localhost:3000'));