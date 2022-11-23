const itemController = require('../controller/index')
const Routers = (app) => {
    app.route('/item').get(itemController.getItem)
    app.route('/item/excel').post(itemController.importExcel)
    app.route('/item/:id').delete(itemController.deleteItem).put(itemController.updateItem)
}
module.exports = Routers
