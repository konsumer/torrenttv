module.exports = new require("mongoose").Schema({  
    title: { type: String, required: true },  
    description: { type: String, required: true }, 
    modified: { type: Date, default: Date.now }
});
