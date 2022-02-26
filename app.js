const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    const artikel = {
        id:1,
        judul: 'Cara Memperbaiki Rem Cakram Motor yang Blong',
        // isi: 'Cara memperbaiki rem cakram motor yang blong terbilang mudah. Anda hanya perlu mengikuti langkah-langkah yang ditetapkan. Dilansir dari WikiHow, berikut ini langkah-langkah mengganti rem cakram motor yang sudah rusak. 1. Buka kaliper remSiapkan kunci ukuran 8, 10, 12 mm atau yang sesuai dengan baut kaliper rem motor Anda. Buka kaliper rem dan kelompokkan baut agar tidak tertukar dengan baut lainnya.',
        imageUrl:'https://akcdn.detik.net.id/community/media/visual/2018/09/07/1e57dbcf-ab47-459c-b7db-cc4a4511af12_169.jpeg?w=620'
    }

    const dataartikel = []
    data.push(artikel)
   

    res.send(dataartikel)
    // res.send('Hello World!')
    // res.send(artikel)
})

app.get('/test', (req, res) => {

    const dataartikel = []
    data.push(artikel)
    

    res.send(artikel)
})

app.get('/barcode', (req, res) => {

    if (req.url.indexOf('/?bcid=') != 0) {
        res.writeHead(404, { 'Content-Type':'text/plain' });
        res.end('BWIPJS: Unknown request format.', 'utf8');
    } else {
        bwipjs.request(req, res); // Executes asynchronously
    }
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
