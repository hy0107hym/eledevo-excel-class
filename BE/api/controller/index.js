const Models = require('../model/index')
const excel = require('xlsx')

exports.importExcel = async(req , res) => {
    try {
        let file = req.files
        let wb = excel.readFile(file[0].path)
        let ws = excel.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]])
        await Models.insertMany(ws, (err, listData) => {
            res.send({listData, status:"success"})
        })
    } catch (error) {
        res.send({status: "failure"})
    }
}

exports.getItem = async(req,res) => {
    try {
        const listData = await Models.find({})
        res.send({listData, status:"success"})
    } catch (error) {
        res.send({status: "failure"})
    }
}

exports.addItem = async ( req,res) => {
    try {
        await Models.create({name : req.body.name, age : req.body.age})
        res.send({status: "success"})
    } catch (error) {
        res.send({status:"failure"})
    }
}

exports.deleteItem = async( req, res) => {
    try {
        await Models.findByIdAndDelete(req.params.id)
        res.send({status: "success"})
    } catch (error) {
        res.send({status: "failure"})
    }
}

exports.updateItem = async ( req, res) => {
    try {
        await Models.findByIdAndUpdate(req.params.id, {name : req.body.name, age : req.body.age})
        res.send({status: "success"})
    } catch (error) {
        res.send({status: "failure"})
    }
}
