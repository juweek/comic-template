var fields = document.getElementsByClassName("modalItems--form--field")
var bodyInfo = document.getElementsByClassName('nv-households-list')[0]
var modal = document.getElementById("modalItems")
var closeButton = document.getElementsByClassName("close")[0]
var modalButton = document.getElementById("modal-button")
var addButton = document.getElementsByClassName('nv-households-button')[0]
var windowTop, windowHeight, steps = [], chartHeight;

/*
Set variables for each of the forms in the modal
------------------------------
*/
var slides = [
  {
    copy: 'High',
    image: 'image-1.jpg',
    number: '1'
  },
  {
    copy: 'fdf',
    image: 'image-2.jpg',
    number: '2'
  },
  {
    copy: 'Hidfgdgfdggh',
    image: 'image-3.jpg',
    number: '3'
  },
  {
    copy: 'fgdfgdf',
    image: 'image-4.jpg',
    number: '4'
  }
]


/*
EVENT LISTENERS: on click of a button, either the 'add new member' button or the 'close' button on the modal, change the visibility of the modal
------------------------------
*/
window.addEventListener('scroll', (o) => {
  setTimeout( function(){
    onScroll()
  },300)
})


/*
METHOD: iterate over each of the objects in the members variable
------------------------------
*/
let draw = () => {
  var string = ""
  slides.forEach((i) => {
    string = string +
    `<div class="nv-household"
    data-step="` + i.number + `">
    <img src="css/me.png">
    <span>` + i.copy + `</span>
    </div>`
  })
  bodyInfo.innerHTML = string

  setStep()
}

/*
METHOD: iterate over each of the objects in the members variable
------------------------------
*/
let onScroll = () => {
  updateValues()
  setStep()
}

/*
METHOD: iterate over each of the objects in the members variable
------------------------------
*/
let percentageOfHeight = (percentage) => {
  return (windowHeight / 100) * percentage
}


/*
METHOD: iterate over each of the objects in the members variable
------------------------------
*/
let updateValues = () => {
  windowTop = window.pageYOffset || document.documentElement.scrollTop;
  windowHeight = $(window).height()
}

/*
METHOD: iterate over each of the objects in the members variable
------------------------------
*/
let highlightStates = (currentStep) => {
  switch (currentStep) {
    case 'intro':
    $('.page__1').addClass('image__shown');
    $('.page__2').removeClass('image__shown');
    break

    case 'skills':
    $('.page__1').removeClass('image__shown');
    $('.page__5').removeClass('image__shown');
    break
  }
}

/*
METHOD: iterate over each of the objects in the members variable
------------------------------
*/
let setStep = () => {
  var stepToShow = null

  $('.nv-household').each(function(i, el) {
    if (windowTop > $(el).offset().top - percentageOfHeight(90)) {
      stepToShow = $(el).data('step')
    }
  }
)}

draw()
