const express = require('express')
const cors = require('cors');
const bwipjs = require('bwip-js');
const app = express()
const port = 3000
const bodyParser = require('body-parser')
const multer = require('multer')
const fs = require('fs')
const { nanoid } = require('nanoid')



app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/test', (req, res, next) => {

    const dataartikel = [
        {
            ID: 1,
            Judul: 'Cara Memperbaiki Rem Cakram Motor yang Blong',
            Isi: 'Cara memperbaiki rem cakram motor yang blong terbilang mudah. Anda hanya perlu mengikuti langkah langkah yang ditetapkan. Dilansir dari WikiHow berikut ini langkah-langkah mengganti rem cakram motor yang sudah rusak.',
            ImageUrl: 'https://akcdn.detik.net.id/community/media/visual/2018/09/07/1e57dbcf-ab47-459c-b7db-cc4a4511af12_169.jpeg?w=620'
        },
        {
            ID: 2,
            Judul: 'Cara Merawat HP Android Agar Optimal dan Memperpanjang Masa Pakai',
            Isi: 'Umur ponsel tidak hanya bergantung pada spesifikasi yang ada pada perangkatnya, namun cara penggunaan. Penggunaan ponsel Android yang sembarangan bisa memperpendek usianya.',
            ImageUrl: 'https://akcdn.detik.net.id/visual/2022/01/04/samsung-galaxy-s21-fe-5g_169.png?w=650'
        },
        {
            ID: 3,
            Judul: 'Cara Merawat HP Android Agar Optimal dan Memperpanjang Masa Pakai',
            Isi: 'Umur ponsel tidak hanya bergantung pada spesifikasi yang ada pada perangkatnya, namun cara penggunaan. Penggunaan ponsel Android yang sembarangan bisa memperpendek usianya.',
            ImageUrl: 'https://akcdn.detik.net.id/visual/2022/01/04/samsung-galaxy-s21-fe-5g_169.png?w=650'
        },
        {
            ID: 4,
            Judul: 'Cara Merawat HP Android Agar Optimal dan Memperpanjang Masa Pakai',
            Isi: 'Umur ponsel tidak hanya bergantung pada spesifikasi yang ada pada perangkatnya, namun cara penggunaan. Penggunaan ponsel Android yang sembarangan bisa memperpendek usianya.',
            ImageUrl: 'https://akcdn.detik.net.id/visual/2022/01/04/samsung-galaxy-s21-fe-5g_169.png?w=650'
        }

    ]

    // const dataartikel = {data:data}
    res.send(dataartikel)


})


app.get('/barcode', (req, res) => {
    bwipjs.request(req, res); // Executes asynchronously    
})




var mysql = require('mysql');
var myconnection = require('express-myconnection');

var dbOption = {
    host: 'localhost',
    user: 'root',
    password: '',
    post: '3306',
    database: 'backend'
}

app.use(myconnection(mysql, dbOption, 'pool'));

app.get('/testmysql', (req, res, next) => {
    req.getConnection(function (err, conn) {
        if (err) throw err;
        conn.query('select * from article', function (err, results) {
            if (err) throw err;
            res.send(results);
        });
    });

})

app.get('/testmysql/:id', (req, res, next) => {
    const idarticle = req.params.id;
    req.getConnection(function (err, conn) {
        if (err) throw err;
        conn.query('select * from article where ID=' + idarticle, function (err, results) {
            if (err) throw err;
            res.send(results);
        });
    });

})

// // const upload = multer({dest : 'uploads/'})
// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, 'uploads/');
//     },
//     filename: function (req, file, cb) {
//         cb(null, file.originalname);
//     }
// })

// const multerUpload = multer({ storage: storage });

// app.post('/upload/', multerUpload.single('picture'), function (req, res, next) {
//     // req.file is the `avatar` file
//     // console.log(req.file)
//     const picture = req.file;
//     if (!picture) {
//         res.status(400).json({ 'message': 'picture cannot be empty' });
//         return
//     }
//     res.send(picture);
// });


app.post('/testmysql/', (req, res, next) => {

    // console.log(req.file)
    const judul = req.body.judul;
    const isi = req.body.isi;
    const imagename = req.body.imagename;

    req.getConnection(function (err, conn) {
        if (err) throw err;
        var sql = "INSERT INTO article (Judul, Isi, ImageUrl) VALUES ('" + judul + "','" + isi + "','" + imagename + "')";
        conn.query(sql, function (err, results) {
            if (err) throw err;
            res.status(200).json({
                message: 'berhasil tambah data article'
                // data : results    
            });
            // res.send(results);
        });
    });
})

app.put('/testmysql/', (req, res, next) => {

    const idarticle = req.body.id;
    const judul = req.body.judul;
    const isi = req.body.isi;
    const imageUrl = req.body.imageUrl;

    req.getConnection(function (err, conn) {
        if (err) throw err;
        var sql = "UPDATE article SET Judul = '" + judul + "', Isi = '" + isi + "', imageUrl = '" + imageUrl + "' WHERE ID=" + idarticle;
        conn.query(sql, function (err, results) {
            if (err) throw err;
            res.status(200).json({
                message: 'berhasil update data article'
                // data : results    
            });
            // res.send(results);
        });
    });
})

app.delete('/testmysql/:id', (req, res, next) => {
    const idarticle = req.params.id;
    req.getConnection(function (err, conn) {
        if (err) throw err;
        var sql = "DELETE FROM article WHERE ID=" + idarticle;
        conn.query(sql, function (err, results) {
            if (err) throw err;
            res.status(200).json({
                message: 'berhasil hapus data article'
                // data : results    
            });
            // res.send(results);
        });
    });
})

const urlpath = __dirname + '/uploads' // address folder uplaod
const upload = multer({ dest: urlpath })

app.post('/upload', upload.single('myfile'), async function (req, res, next) {
    try {
        if (!fs.existsSync(urlpath)) {
            fs.mkdirSync(urlpath);
        }

        const namafile = nanoid() // generate name
        const extension = req.file.originalname.match(/\.[0-9a-z]+$/i)[0] // get extension file
        const namefileextension = `${namafile}${extension}`
        fs.rename(urlpath + '/' + req.file.filename, urlpath + '/' + namefileextension, function (err) {
            if (err) {
                throw err
            } else {
                res.send({
                    status: 'true',
                    message: 'berhasil menyimpan gambar',
                    link: namefileextension
                })
            }
        });
    } catch (error) {
        console.log(error);
        res.send({ status: 'false', message: error || `Gagal mengupload gambar ` })
    }
})
app.get('/file/:namefile', async function (req, res, next) {
    const { namefile } = req.params
    res.sendFile(`${urlpath}/${namefile}`)
    
})
app.delete('/file/:namefile', async function (req, res, next) {
    const { namefile } = req.params
    res.delete(`${urlpath}/${namefile}`)
    
})




// var mysql = require('mysql');
// var connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     database: 'backend'
// });

// var pool = mysql.createPool(connection);

// app.get('/testmysql', (req, res) => {
//     connection.connect();

//     connection.query('select * from article', function (error, results, fields) {
//         if (error) {
//             res.send('error')
//             connection = reconnect(connection);
//         }else{
//             // const dataartikel= results
//             // console.log(dataartikel);
//             // res.send('The solution is: '+results[0].Judul)
//             // res.send('tes')
//             res.send(results);
//             // res.send(dataartikel);

//         };

//     });
//     connection.end();

// })



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
