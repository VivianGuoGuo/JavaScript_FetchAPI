let ARTIST_NAME="";
const items=document.querySelector('.items');
const search=document.querySelector('.fas');
const input=document.querySelector('.input');
let template = '';
let newArist_name=''



// const url=`https://itunes.apple.com/search?term=${ARTIST_NAME}&media=music&entity=album&attribute=artistTerm&limit=200`;

// fetchJsonp(url)
// .then((res)=>res.json())
// .then((data)=>{
// displayResult(data.results);
// })

// input.addEventListener('change',(e)=>{
//     e.preventDefault();
//     let input=e.target.value;
//     search.addEventListener('click',()=>{
//         ARTIST_NAME=input;
//        newArist_name=ARTIST_NAME;
//        console.log(ARTIST_NAME);
//     })
//     console.log(ARTIST_NAME);

// })
function fetchSearch(searchValue){
  const url=`https://itunes.apple.com/search?term=${ARTIST_NAME}&media=music&entity=album&attribute=artistTerm&limit=200`;

  fetchJsonp(url)
  .then((res)=>res.json())
  .then((data)=>{
  displayResult(data.results);
  });
}

window.onload=()=>{
  input.onkeyup=(e)=>{
    console.log(input.value);
    ARTIST_NAME=input.value;
    fetchSearch(ARTIST_NAME);
  }
}

function displayResult(albumArr){
    let template = '';
    albumArr.forEach(album => {
       // console.log(album.artistId);
        template += 
        `<div class="card" style="width: 18rem;">
        <img src="${album.artworkUrl100}" class="card-img-top" alt="..."> 
        <div class="card-body">
          <p class="card-title">${album.collectionName}</p>
        </div>
      </div>`;
    })
     items.innerHTML=template;
}


