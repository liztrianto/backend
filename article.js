const express = require('express')
const cors = require('cors');
const bwipjs = require('bwip-js');
const app = express()
const port = 3000

app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/test', (req, res, next) => {

    const dataartikel=[
        {
            id:'1',
            judul: 'Cara Memperbaiki Rem Cakram Motor yang Blong',
            isi: 'Cara memperbaiki rem cakram motor yang blong terbilang mudah. Anda hanya perlu mengikuti langkah langkah yang ditetapkan. Dilansir dari WikiHow berikut ini langkah-langkah mengganti rem cakram motor yang sudah rusak.',
            imageurl:'https://akcdn.detik.net.id/community/media/visual/2018/09/07/1e57dbcf-ab47-459c-b7db-cc4a4511af12_169.jpeg?w=620'
        },
        {
            id:'2',
            judul: 'Cara Merawat HP Android Agar Optimal dan Memperpanjang Masa Pakai',
            isi: 'Umur ponsel tidak hanya bergantung pada spesifikasi yang ada pada perangkatnya, namun cara penggunaan. Penggunaan ponsel Android yang sembarangan bisa memperpendek usianya.',
            imageurl:'https://akcdn.detik.net.id/visual/2022/01/04/samsung-galaxy-s21-fe-5g_169.png?w=650'
        },
        {
            id:'3',
            judul: 'Cara Merawat HP Android Agar Optimal dan Memperpanjang Masa Pakai',
            isi: 'Umur ponsel tidak hanya bergantung pada spesifikasi yang ada pada perangkatnya, namun cara penggunaan. Penggunaan ponsel Android yang sembarangan bisa memperpendek usianya.',
            imageurl:'https://akcdn.detik.net.id/visual/2022/01/04/samsung-galaxy-s21-fe-5g_169.png?w=650'
        },
        {
            id:'4',
            judul: 'Cara Merawat HP Android Agar Optimal dan Memperpanjang Masa Pakai',
            isi: 'Umur ponsel tidak hanya bergantung pada spesifikasi yang ada pada perangkatnya, namun cara penggunaan. Penggunaan ponsel Android yang sembarangan bisa memperpendek usianya.',
            imageurl:'https://akcdn.detik.net.id/visual/2022/01/04/samsung-galaxy-s21-fe-5g_169.png?w=650'
        }
        
    ]

    // const dataartikel = {data:data}
    res.send(dataartikel)

    
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
