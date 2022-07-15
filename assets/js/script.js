let tabDataArray = []
if(localStorage.getItem('infoSList')){
   tabDataArray=JSON.parse(localStorage.getItem("infoSList"));
}else{
  tabDataArray = []
}
var result1="";
var result3="";
let tabData=document.querySelector(".ourStoryNav");
let  descYear=document.querySelector(".descYear");
// console.log(descYear);
let sliderData=document.getElementById("sliderData");

let sliderDataArray = []
if(localStorage.getItem('infoList')){
 sliderDataArray=JSON.parse(localStorage.getItem("infoList"));
}
else{
  sliderDataArray = []
}
var result="";
for(var i=0;i<sliderDataArray.length;i++ ){

  if(i==0){
    result += `<div class="mySlides" style="display:block">`
  }else{
    result += `<div class="mySlides" >`
  }
result +=`
<p class="q">${sliderDataArray[i].desc}</p>
  <p class="author"  >${sliderDataArray[i].author}</p>
  <a class="prev" onclick="currentSlide()">❮</a>
  <a class="next" onclick="plusSlides()">❯</a>
  <div class="dot-container">
  <span class="dot" onclick="currentSlide(1)"></span>
  <span class="dot" onclick="currentSlide(2)"></span>
  <span class="dot" onclick="currentSlide(3)"></span>
</div>
</div>`
}
sliderData.innerHTML=result;

if(tabDataArray.length){
      var firstTab=`
      <li class="nav-item" role="presentation">
            <button class="nav-link active  navItemBtn  rounded-pill" id="pills-${0}-tab " 
            data-bs-toggle="pill" data-bs-target="#pills-${0}" type="button" role="tab" aria-controls="pills-home" aria-selected="true">${tabDataArray[0].Shead}</button>
        </li> 

      `;
      var firstTabDesc=`<div class="tab-pane fade show active  navItemP" id="pills-${0}" role="tabpanel" 
      aria-labelledby="pills-${0}-tab">${tabDataArray[0].sDesc}</div>`;
      for(var i=1;i<tabDataArray.length;i++ ){
        
        result1 +=`
        <li class="nav-item" role="presentation">
            <button class="nav-link  navItemBtn  rounded-pill" id="pills-${i}-tab " data-bs-toggle="pill" data-bs-target="#pills-${i}" type="button" role="tab" aria-controls="pills-home" >${tabDataArray[i].Shead}</button>
        </li> `;
      result3+=`  <div class="tab-pane fade show  navItemP" id="pills-${i}" role="tabpanel" aria-labelledby="pills-${i}-tab">${tabDataArray[i].sDesc}</div>`;
      }
      descYear.innerHTML=firstTabDesc+result3;

      tabData.innerHTML=firstTab+result1;

    }
var slideIndex = 0;

function plusSlides() {

  showSlides(slideIndex + 1);
}

function currentSlide() {
  showSlides(slideIndex -1);
}

function showSlides(n) {
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  console.log(dots)
  
  if (n >= slides.length) {   slideIndex = 0}
  else if (n < 0) {slideIndex = slides.length -1}
  else{
    slideIndex = n ;
  }
  console.log(slideIndex)

    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
  slides[slideIndex].style.display = "block";
  dots[slideIndex].className += " active";

}




