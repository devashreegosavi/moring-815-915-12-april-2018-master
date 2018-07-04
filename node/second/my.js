let logger = require('../node_modules/logger').createLogger(); // logs to STDOUT
var request = require('request')

logger.info('loading an array', [1, 2, 3], 'now!')

request.get('http://codekul.com', (err, res, bdy) => {
    logger.info(err)
    logger.info(res)
    logger.info(bdy)
})