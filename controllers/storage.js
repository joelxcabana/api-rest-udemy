const { storageModel } = require('../models')
const PUBLIC_URL = process.env.PUBLIC_URL
const MEDIA_PATH = `${__dirname}/../storage`
const { handleHttpError } = require('../utils/handleError')
const fs = require('fs')

const getItems = async (req, res) =>{
   const data = await storageModel.find({})
   res.send({message:data})
}

const getItem = async (req, res) =>{
  try {
    const {id} = req
    const data = await storageModel.findById(id)
    res.send({message:data}) 
   } catch (e) {
    handleHttpError(res,'ERROR_GET_STORAGE')
   }
}

const createItem = async (req, res) =>{
  try {
    const { file } = req
    const fileData = {
      filename: file.filename,
      url:`${PUBLIC_URL}/${file.filename}`
    }
    const data = await storageModel.create(fileData)
    res.send({message:data})
  } catch (error) {
    handleHttpError(res,'ERROR_CREATE_STORAGE')
  }
}

const updateItem = async (req, res) =>{
  try {
    const { id, ...body } = req
    const data = await storageModel.findOneAndUpdate(id,body)
    res.send({message:data})
  } catch (e) {
   handleHttpError(res,'ERROR_UPDATE_ITEM')
  }
}

const deleteItem =  async (req, res) =>{
  try {
    const {id} = req.params
    console.log('entroooo', req)
    const dataFile = await storageModel.findById(id)
    const filePath = `${MEDIA_PATH}/${dataFile.filename}`
    fs.unlinkSync(filePath)
    const data = {
      filePath,
      deleted:1
    }
    res.send({message:data}) 
  } catch (e) {
   handleHttpError(res,'ERROR_DELETE_STORAGE')
  }
}

module.exports = {
    getItems,
    getItem,
    createItem,
    updateItem,
    deleteItem
}