const owner = document.querySelector('input[name=owner]')
const title = document.querySelector('input[name=title]')
const addButton = document.getElementById('addFolderButton')
const folderCollection = document.querySelector('.folderCollection')
const openButtons = document.querySelectorAll('.open-folder-button')

const url = 'http://localhost:3000'

addButton.addEventListener('click',($event)=>{
    $event.preventDefault()
    addFolder()
})

getAllFolders()

// openButtons.forEach.addEventListener('click',$event=>{
//   location.href = url+'/links.html'
// })



 function addFolder(){
    const data = { "owner":1,"title":title.value};
    title.value = ""

    fetch(url+"/folders/addFolder", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(dataa => {
      console.log('Success:', dataa);
      addFolderToCoolection(data.title,dataa[0].id)
    })
    .catch((error) => {
      alert(error)
      console.log('Error:', error);
    });
}


function getAllFolders(){
  fetch(url+"/folders/getAll", {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => response.json())
  .then(data => {
    console.log('Success:', data);
    let folders = data;
    for( var folder of folders) {
      addFolderToCoolection(folder.title,folder.id)
    };
  })
  .catch((error) => {
    alert(error)
    console.error('Error:', error);
  });
}

function addFolderToCoolection(folderTitle,folderId){
  let folderDiv = document.createElement('div')
  folderDiv.id = folderId
  folderDiv.classList.add('folder')
  let title = document.createElement('h1')
  title.classList.add('fol-title')
  title.innerHTML = folderTitle
  let openButton = document.createElement('button')
 // openButton.classList.add('open-folder-button')
  openButton.innerHTML = 'Open'
  openButton.onclick = () => location.href = `http://127.0.0.1:5500/view/links.html?t=${folderTitle}&i=${folderId}`;
  folderDiv.appendChild(title)
  folderDiv.appendChild(openButton)
  folderCollection.appendChild(folderDiv)
  console.log(folderDiv.id)
}

document.querySelector('.logo').addEventListener('click',()=>{
  location.href = `http://127.0.0.1:5500/view/home.html`;
})

