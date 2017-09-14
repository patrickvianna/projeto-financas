const mongoose = require('mongoose')
//const con = "mongodb://patrickv:oXjTclS172qTekVU@testcluster-shard-00-00-9kxsq.mongodb.net:27017,testcluster-shard-00-01-9kxsq.mongodb.net:27017,testcluster-shard-00-02-9kxsq.mongodb.net:27017/test?ssl=true&replicaSet=TestCluster-shard-0&authSource=admin"
module.exports = mongoose.connect('mongodb://localhost/db_finance')
/*
mongoose.Error.messages.general.requiered = "O atributo '{PATH}' é obrigatório."
mongoose.Error.messages.Number.min = "O '{VALUE}' informado é menor que o limite minimo de '{MIN}'."
mongoose.Error.messages.Number.max = "O '{VALUE}' informado é maior que o limite maximo de '{MAX}'."
mongoose.Eroor.messages.String.enum = "'{VALUE}' não é valido para o atribuot '{PATH}'."
*/
