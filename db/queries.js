
const addFolder = 'INSERT INTO folders (owner, title) VALUES ($1, $2) returning id'

const getAllFolders = 'select * from folders where owner=1';

const addLinkToFolder = 'insert into links(folder_id, title,actuallink) values($1,$2,$3)returning *'

const getLinksInFolder = 'select * from links where links.folder_id = $1'


module.exports = {
    addFolder,getAllFolders, addLinkToFolder,getLinksInFolder
}