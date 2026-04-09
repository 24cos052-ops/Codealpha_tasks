function showGallery(type,btn){

let galleries=document.getElementsByClassName("gallery");

for(let i=0;i<galleries.length;i++){
galleries[i].style.display="none";
}

document.getElementById(type).style.display="flex";

/* active button */
let buttons=document.querySelectorAll(".menu button");

buttons.forEach(b=>b.classList.remove("active"));

btn.classList.add("active");

}

/* default open */
showGallery("food",document.querySelector(".menu button"));


/* LIGHTBOX */
let images=document.querySelectorAll(".gallery img");

images.forEach(function(img){

img.onclick=function(){

document.getElementById("lightbox").style.display="flex";

document.getElementById("lightbox-img").src=this.src;

}

});

function closeLightbox(){

document.getElementById("lightbox").style.display="none";

}
