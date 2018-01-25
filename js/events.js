//define functions here

function getIt() {
  $('p').on('click', function() {
    alert('hey!')
  })
}



function pressIt(){
  $('input').on('keydown',function{
    if(key.which===103){
      alert('You pressed G');
    }
  })
}

$(document).ready(function(){

// call functions here
  getIt();
  frameIt();
  pressIt();

});
