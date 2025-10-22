const http = require('http');
const server = require('./index.js'); // import server module

// Start the server before test (if index.js exports it)
const port = 3000;

// Wait a bit for server to start
setTimeout(() => {
  http.get(`http://localhost:${port}`, res => {
    console.log('Status Code:', res.statusCode);
    if (res.statusCode === 200) {
      console.log('Test passed ✅');
      server.close(() => process.exit(0)); // stop server & exit success
    } else {
      console.error('Test failed ❌');
      server.close(() => process.exit(1));
    }
  }).on('error', err => {
    console.error('Request error ❌', err.message);
    server.close(() => process.exit(1));
  });
}, 1000);
