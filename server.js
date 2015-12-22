var connect = require('connect'),
    serveStatic = require('serve-static');

connect().use(
    serveStatic("../angular")
).listen(5000);