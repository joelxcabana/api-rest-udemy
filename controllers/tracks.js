const { matchedData } = require('express-validator')
const { tracksModel } = require('../models')
const { handleHttpError } = require('../utils/handleError')

const getItems = async (req, res) =>{
  try {
    const data = await tracksModel.find()
    res.send({message:data}) 
  } catch (e) {
    handleHttpError(res,'ERROR_GET_ITEMS')
  }
}

const getItem = async (req, res) =>{
 try {
  req = matchedData(req)
  const {id} = req
  const data = await tracksModel.findById(id)
  res.send({message:data}) 
 } catch (e) {
  handleHttpError(res,'ERROR_GET_ITEM')
 }
}

const createItem = async (req, res) =>{
  try {
    req = matchedData(req)
    const { body } = req
    const data = await tracksModel.create(body)
    res.send({message:data})
  } catch (e) {
    handleHttpError(res,'ERROR_CREATE_ITEMS')
  }
}

const updateItem = async (req, res) =>{
  try {
    const { id, ...body } = matchedData(req)
    const data = await tracksModel.findOneAndUpdate(id,body)
    res.send({message:data})
  } catch (e) {
   handleHttpError(res,'ERROR_UPDATE_ITEM')
  }
}

const deleteItem =  async (req, res) =>{
  try {
    req = matchedData(req)
    const {id} = req
    const data = await tracksModel.delete(id)
    res.send({message:data}) 
  } catch (e) {
   handleHttpError(res,'ERROR_DELETE_ITEM')
  }
}

module.exports = {
    getItems,
    getItem,
    createItem,
    updateItem,
    deleteItem
}