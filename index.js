var express = require('express');
var shell = require('python-shell');
var fs = require('fs');
var multer = require('multer');
var upload = multer().single('file');
var app = express();

app.set('port', (process.env.PORT || 8080))
var f = fs.createWriteStream('./uploads/temp.jpeg');

app.post('/upload', function(req, res) {
    upload(req, res, function (err) {
        if (err) { return; }

        f.write(req.file.buffer, function(err, info) {
            shell.run('script.py', function(err, analysis) {
                res.send(analysis.toString());
            });
        });
    });
});

app.use(function(err, req, res, next) {
	res.status(500);
	console.log(err);
	res.end("Error handling your request");
});

app.listen(app.get('port'), function() {
    console.log("Node app is running at localhost:" + app.get('port'))
})
