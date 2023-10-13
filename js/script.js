const images = [
  'img/01.jpg',
  'img/02.jpg',
  'img/03.jpg',
  'img/04.jpg',
  'img/05.jpg'
];

/*
 <div class="item active">
            <img src="./img/01.jpg" alt="">
  </div> 
*/

// variabile per tenere in memoria l'indice della slide attiva
let activeIndex = 1;


//prendo contenitore delle slide
const itemsEl = document.querySelector('.items');
console.log(itemsEl);

// creao variabile testo html
let tpl = '';
// ciclo sull'array delle immagini e costruisco l'html da inserire nel contenitore delle slide
for(let i = 0; i < images.length; i++){
  tpl += `
  <div class="item">
    <img src="${images[i]}" alt="immagine ${i}">
  </div> 
  `;
}

//insersco il template completo nel contenitore delle slide
itemsEl.innerHTML += tpl;  


// prendo l'item (la slide) con indice corrispondente ad activeIndex e aggiungo la classe active
document.getElementsByClassName('item')[activeIndex].classList.add('active');


// prendo i bottoni
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

// aggiungo ai bottoni eventlistener e funzioni per far scorrere la'array

nextBtn.addEventListener('click', function(){
  
  if(activeIndex === images.length -1){
    activeIndex = 0;
  } else {
    activeIndex += 1;
  }
  document.querySelector('.item.active').classList.remove('active');
  document.getElementsByClassName('item')[activeIndex].classList.add('active');
});

prevBtn.addEventListener('click', function(){
  
  if(activeIndex === 0){
    activeIndex = images.length -1;
  } else {
    activeIndex -= 1;
  }
  document.querySelector('.item.active').classList.remove('active');
  document.getElementsByClassName('item')[activeIndex].classList.add('active');
});