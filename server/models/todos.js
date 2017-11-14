var mongoose = require('mongoose');

// create a todo model 
var Todo = mongoose.model('Todo', {
    text: {
        type: String,
        // validate
        required: true,
        minlength: 1,
        // trim whitespace
        trim: true
    },
    completed: {
        type: Boolean,
        // set the default property, to false
        default: false
    },
    completedAt: {
        type: Number,
        // if completed is false, this is false
        default: null
    }
});

module.exports = {
    Todo
};