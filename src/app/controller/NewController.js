const CourceModel = require('../model/Cource.js');

class NewController {

    // Method get
    index(req, res){
        CourceModel.find({} , (err , docs) =>{
            if(!err){
                res.json(docs);
              
            }
            else {
                res.status(500).json({"erorr" : "message"})
            }
        });
      
    }
}

module.exports = new NewController;