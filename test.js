const fs = require('fs');

try {
  if (fs.existsSync('index.js')) {
    console.log('✅ index.js exists — basic test passed.');
    process.exit(0);
  } else {
    console.error('❌ index.js  is not found!');
    process.exit(1);
  }
} catch (err) {
  console.error('❌ Error while running test:', err);
  process.exit(1);
}
