
const pool = require('../db/db')
const queries = require('../db/queries')

const addFolder = (req, res) => {
    const { owner, title } = req.body;

    pool.query(
        queries.addFolder,
        [owner, title],
        (error, result) => {
            if (error) {
                return res.status(500).json(error);
            }
            res.status(200).json(result.rows);
        }
    );
};



const addLinkToFolder = (req,res)=>{
    const {title,actuallink} = req.body
    const folder_id = req.params.folder_id

    pool.query(
        queries.addLinkToFolder,[folder_id,title,actuallink],(error,result)=>{
            if(error){
                return res.status(500).json(error);
            }
            res.status(200).json(result);
        }
    )
}

const getAll = (req,res) => {
       pool.query(queries.getAllFolders,(error,result)=>{
        if(error){
            return res.status(500).json(error)
        }
        res.status(200).json(result.rows)
       })
    
}
const getAllLinksInFolder = (req,res) =>{
    const id = req.params.folder_id;
    pool.query(queries.getLinksInFolder,[id],(error,result)=>{
        if(error){
            console.error(error)
            return res.status(500).json(error)
        }
        res.status(200).json(result.rows)
    })
}

module.exports = {
 addFolder,getAll , getAllLinksInFolder,addLinkToFolder  
}


