let containerInfo = document.getElementById("containerInfo");


let loopAllItems = (arryOfResult) => {

    for (const result  of arryOfResult) {
        containerInfo.innerHTML += `
        <article class="cards"> 
        <img src="${result.image_url}"> 
        <h2>${result.title}</h2>
        <h3>Rated : ${result.rated}</h3>
        <p><span>Episodes</span> : ${result.episodes}</p>
        <p class="desciption"><span>Description</span> : ${result.synopsis}</p>
        </article> <br>` ;
    }
}

let gitLoder = () => {
    containerInfo.innerHTML += `<img id="gif" src="https://cdn.dribbble.com/users/830587/screenshots/4381223/media/95e0f355952a1af1a3f5824e44f9938f.gif">`
}

let hideLoader = () => {
    gif.style.display = "none";
}

const url = 'https://api.jikan.moe/v3/search/anime?q=';

let getApi = async (url) => {
    try{
        gitLoder()
        return await fetch(url)
        .then(res => res.json());
    }
    catch(err){
        return err;
    }
} 

let searchBtn = document.getElementById("searchBtn");
let searchInput = document.getElementById("searchInput");

searchBtn.addEventListener("click",() =>{
 containerInfo.innerHTML = " ";

 getApi(url + searchInput.value)
 .then(res => loopAllItems(res.results))
  .catch(err => console.log(err))
   .finally(() => {hideLoader()})
})

