var inputs = document.getElementById('inp');
var text = document.querySelector('.text');

function Add() {

  if(inputs.value == '') {

    alert(' 🚫 Please Enter The Task!')

  } else {
    
     let newVal = document.createElement('ol');

     newVal.innerHTML= `${inputs.value}<i class="ri-delete-bin-6-fill"></i>`;

     text.appendChild(newVal);

     inputs.value = '';

     newVal.querySelector('i').addEventListener("click", remove);

     function remove(){

        newVal.remove();

     }
  }
}

//----------------------------------------------------------------------//
var tl = gsap.timeline()
tl.from(".container",{
    y:-50,
    opacity:0,
    duration:1,
    stagger:0.4


})

tl.from(" h1",{
   x:-500,
   opacity:0,
   duration:0.8,
   stagger:0.4,
   filter:"blur(10px)",

})


