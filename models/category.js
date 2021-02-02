const mongoose = require('mongoose');

let schema = mongoose.Schema;

let category = new schema({
    CategoryName:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model('Category',category);