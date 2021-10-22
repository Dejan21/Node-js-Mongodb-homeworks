const router = require('express').Router();
const swaggerUi = require("swagger-ui-express");
const swaggerDoc = router('../swagger.json')

router.use('/api-docs', swaggerUi.server)
router.get('/api-docs', swaggerUi.setup(swaggerDocs))

module.exports=router