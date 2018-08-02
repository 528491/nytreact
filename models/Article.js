var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ArticleSchema = new Schema({
    //title
    title:{
        type: String
    },
    //date
    date:{
        type: String
    },
    //url
    url:{
        type: String
    }
});

var Article = mongoose.model("Article", ArticleSchema);

module.exports = Article;