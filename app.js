// Web Server

const http = require("http");

// const server = http.createServer((req, res) => {
//   // req apa yg dikirim ke server dan res apa yg dikembalikan sebagai respon oleh web server
//   //   untuk menjalankan, pamggil method listen.
// });

// server.listen(3000, () => {
//   // yg akan menjalankan web server
//   console.log("Server is listening on port 3000.."); // pesan yg ada di console ketika servernya/program sudah berjalan
// });

// web server yg sederhana
http
  .createServer((req, res) => {
    res.write("Hello World!");
    res.end();
  })
  .listen(3000, () => {
    console.log("Server is listening on port 3000.."); // pesan yg ada di console ketika servernya/program sudah berjalan
  });

/**
 jalankan node app di term, nanti command prompt akan muncul tetapi nyangkut karena server lagi berjalan, jika sudah seperti itu, lalu jalankan di web http://localhost:3000/
 */
