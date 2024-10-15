
const pool = require('../db/db')
const queries = require('../db/queries')
const getAll = (req, res) => {
    pool.query(queries.getAllUsers,(err,result)=>{
        if(err){
            return res.status(500).json({
                message:'error in db pooling'
            })
        }

        res.status(200).json(result.rows)
    })
}



const addLink = (req,res) => {
    pool.query()
}



module.exports = {
    getAll
}
   