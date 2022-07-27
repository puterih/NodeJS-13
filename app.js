// Web Server
const http = require("http");
const fs = require("fs");
const port = 3000;

// web server yg sederhana
http
  .createServer((req, res) => {
    res.writeHead(200, {
      // mengembalikan tipe konten dari text biasa ke text html
      "Content-Type": "text/html",
    });

    const url = req.url;
    // const url apapun yg dikembalikan dari request, ambil url nya
    if (url === "/about") {
      res.write("<h1>Ini Adalah halaman About</h1>");
      res.end();
    } else if (url == "/contact") {
      res.write("<h2>Ini Adalah Halaman Contact");
      res.end();
    } else {
      // res.write('Hello World!');
      fs.readFile("./index.html", (err, data) => {
        if (err) {
          res.writeHead(404);
          res.write("Error: file not found");
        } else {
          res.write(data);
        }
        res.end();
      });
    }
  })
  .listen(port, () => {
    console.log(`Server is listening on port ${port}..`);
  });
