let container = document.querySelector('.response')
let favbtn = document.querySelector('#favorites')
let saved = document.querySelector('.saved')
let savedItems = []
let options = {
    headers: {
        'accept': "text/plain",
        'user-Agent': 'Buchanan High School CS1 (https://buchananschools.com)'
    }
}

async function getJoke() {
    let request = await fetch('https://icanhazdadjoke.com', options);
    let response = await request.text()
    console.log(response)
    let p = document.createElement('p')
if(container.innerText == '') {
    container.appendChild(p)
    p.innerText = response
} else {
    container.removeChild(document.querySelector('p'))
    container.appendChild(p)
    p.innerText = response
favbtn.innerText = 'Add to Favorites'
}
}

const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

function saveJoke() {
    let result = ' ';
    const charactersLength = characters.length;
    for ( let i = 0; i < 5; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    localStorage.setItem(result, container.innerText); 
    console.log('saved')
    favbtn.innerText = 'Added'  
    savedItems.push(result)
    console.log(savedItems)                                                                                                                              
  }
  let savedJokeContainer = document.querySelector('.saved')
  window.addEventListener('DOMContentLoaded', loadSaved)
  function loadSaved() {
    let savedJokes = Object.entries(localStorage);
savedJokeContainer.innerHTML = savedJokes.map(joke => {
    let jokeData = joke[1]
        return `
        <li>
        <div class='both'>
       <div class='delete'>
        <button onclick='deleteJoke()'>X</button>
          </div>
        <div class='joke'>
            <p>${jokeData}</p>
            </div>
               </div>
            </li>
        `
    
}).join('')
  }
 
  
  
function clearStorage() {
    localStorage.clear()
    console.log('clear')
    document.querySelector('.saved').textContent = ""; 
}

function openNav() {
    document.getElementById("mySidepanel").style.width = "250px";
  }
  function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
  }
  function emptyPage() {
    if(document.body.textContent = "") {
        let p = document.createElement('p')
saved.appendChild(p)
    }
  }
  
  
 
