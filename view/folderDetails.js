document.querySelector('.folder-title').innerHTML = window.location.href.split('?')[1].split('=')[1].split('&')[0];
const  folder_id = window.location.href.split('?')[1].split('=')[2];
console.log(folder_id)
let links = document.querySelector('.folderCollection');
const actualLinkBar = document.querySelector('#actuallink')
const linkTitleBar = document.querySelector('#titleOfLink')
const addLinkButton = document.querySelector('#addFolderButton')
document.querySelector('.logo').addEventListener('click',()=>{
    location.href = `http://127.0.0.1:5500/view/home.html`;
  })
  
const url = 'http://localhost:3000'

getAllLinks()

addLinkButton.addEventListener('click',($event)=>{
    $event.preventDefault()
    addLink()
})


function addLinkToCoolection(title,link){
    let linkDiv = document.createElement('div')
    linkDiv.classList.add('link')
    let titleBar = document.createElement('p')
    titleBar.classList.add('title')
    titleBar.innerHTML = title;
    let goLink = document.createElement('a')
    goLink.classList.add('actuallink')
    goLink.innerHTML = 'GO'
    goLink.href = link;
    linkDiv.appendChild(titleBar)
    linkDiv.appendChild(goLink)
    links.appendChild(linkDiv)
    
  }


  function getAllLinks(){
    fetch(url+`/folders/${folder_id}/links`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      let links = data;
      for( var link of links) {
        addLinkToCoolection(link.title,link.actuallink)
      };
    })
    .catch((error) => {
      alert(error)
      console.error('Error:', error);
    });
  }
  

  function addLink(){
    const data = { "actuallink":actualLinkBar.value,"title":linkTitleBar.value};
    linkTitleBar.value = ""
    actualLinkBar.value = ""

    fetch(url+`/folders/${folder_id}/addLink`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(dataa => {
      console.log('Success:', dataa);
      addLinkToCoolection(data.title,data.actuallink)
    })
    .catch((error) => {
      alert(error)
      console.log('Error:', error);
    });
}

