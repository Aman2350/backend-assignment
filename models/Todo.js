const mongoose = require("mongoose")

const todoSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            maxLength: 50,
        },
        
        description: {
              type : String,
              required: true,
              maxLength: 50,
        },
        createdAt:{
            type: Date, 
            required: true,
            default: Date.now ,
        },
        updatedAt:{
            type: Date,
            required: true,
            default: Date.now , //previously Date.now() is used
        },
        isCompleted: {
            type: Boolean,
            required: true,
            default: false,
          },
          createdBy: {
            ref: "User",
            type: mongoose.Schema.ObjectId,
          }
        
    }
);

module.exports = mongoose.model("Todo", todoSchema);