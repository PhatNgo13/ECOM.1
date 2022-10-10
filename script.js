const productList = document.querySelector('.shop'); // SELECT SHOP CLASS HTML
function loadJSON(){
    fetch('data.json') //FETCH DATA FROM JSON
    .then(response => response.json())
    .then(data => {
        let html = ''; //SET HTML VARIABLE TO AN EMPTY STRING
        data.products.forEach(products => {
            html += `
            <div class="card-container">
                <div class="card">
                <img class="resize" src=${products.image}>
                <h1>${products.name}</h1>
                <h2>${products.made}</h2>
                <p>${products.price}</p>
                <button type="button">BUY</button>
                </div>
            </div>`; //HTML TEMPLATE + DATA
        });
        productList.innerHTML = html; // LOADS DATA TO THE HTML
    })
}
//IMAGE SLIDER AND DECLARING VARIBLES TO MOVE BETWEEN IMAGES.
// const sliderImages = [{img: "image/KANYE.png"}, {img: "image/WALTER.png"}, {img: "image/STEVE.png"}, {img: "image/ICE.png"}, {img: "image/KIM"}]
// let element = document.getElementById("navigation")
// //FUNCTION FOR THE BUTTON
// let next = (direction) => {
//     let index = element.dataset.index;
//     if(direction == "right"){index++} else{index--}
//     if(index>images.length -1){index = 0};
//     if(index<0){index=images.length-1;}
//     element.dataset.index=index;
//     element.style.backgroundImage  ="url('"+ images[index].img +"')";
// };

/* -------------------------------------------------------------------------- */
/*                             JS FOR SLIDER IMAGE                            */
/* -------------------------------------------------------------------------- */
//ARRAY FOR THE HOTTEST NFT ON THE MARKET
const sliderImages = ["image/KANYE.png", "image/WALTER.png","image/STEVE.png","image/ICE.png","image/KIM"]
//imgTag to grab the class img in HTML and set count variable to 0
let imgTag = document.querySelector("img")
let count = 0;
//JS FOR BUTTONS ONCLICK EVENT
// SET NEXT FUNCTION TO INCREASE COUNT WHEN CLICKED, IF COUNT IS LARGER OR EQUAL TO ARRAY LENGTH COUNT START AT 0, ELSE NEXT ITEM IN THE ARRAY
let next = () => {
    count++;
    if(count >= sliderImages.length){
        count = 0;
        imgTag.src = sliderImages[count];
    }else{
        imgTag.src = sliderImages[count];
    }
}
// SET PREVIOUS TO DECREASE COUNT WHEN CLICKED, IF COUNT IS LESS THAN 0, GO TO THE PREVIOUS ITEM IN THE ARRAY
let previous = () => {
    count--;
    if(count < 0){
        count = sliderImages.length -1;
        imgTag.src = sliderImages[count];
    }else{
        imgTag.src = sliderImages[count];
    }
}
