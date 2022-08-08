const { storageModel } = require('../models')
const PUBLIC_URL = process.env.PUBLIC_URL

const getItems = async (req, res) =>{
   const data = await storageModel.find({})
   res.send({message:data})
}

const getItem = async (req, res) =>{

}

const createItem = async (req, res) =>{
  const { file } = req
  const fileData = {
    filename: file.filename,
    url:`${PUBLIC_URL}/${file.filename}`
  }

  const data = await storageModel.create(fileData)
  res.send({message:data})
}

const updateItem = async (req, res) =>{

}

const deleteItem =  async (req, res) =>{

}

module.exports = {
    getItems,
    getItem,
    createItem,
    updateItem,
    deleteItem
}