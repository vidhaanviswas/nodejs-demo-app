const http = require('http');

const options = { hostname: 'localhost', port: 3000, path: '/', method: 'GET' };
const req = http.request(options, res => {
  console.log(`statusCode: ${res.statusCode}`);
  if (res.statusCode === 200) process.exit(0);
  else process.exit(1);
});
req.on('error', () => process.exit(1));
req.end();
