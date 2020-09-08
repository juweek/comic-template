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
    copy: 'Hey Blake! Looking forward to speaking to you in a bit. I just wanted to share this little site about me, my experiences, and why I think Id be a great fit for this job',
    image: 'camera.png',
    number: '1'
  },
  {
    copy: 'So Ive actually been on a screen call with Brilliant before. I talked to XXX, and while he was interested in my curiosity and skillset, he wasnt sure I had the necessary traits needed to address his teams organizaition needs. No beef, but I dont think I conveyed myself clearly to him. So think of this as my attempt with you',
    image: 'hand.png',
    number: '2'
  },
  {
    copy: 'Technically speaking, Ive been making digital projects since college. I majored in computer science, and have worked as a ux designer, web designer, and data journalist for the past 4 years. Brilliant needs curious people, and at the core, thats who I am',
    image: 'young.png',
    number: '3'
  },
  {
    copy: 'The Guardian is really where my talents have shone, though. For the past year, Ive been the only visual editor at the Guardian. Ive taken care of commissioniong artists, balancing budgets, and overall managing the visual production at the Guardian US. Not only did I have practice traditional journalsm skill sets that fit this role - learning and reading and speaking to experts to gather context - Ive also dealt with collaboration in large projects as well as the more routine ones',
    image: 'ball.png',
    number: '4'
  },
  {
    copy: 'So hopefully Ive piqued your interested and kept impressed you enough with this little comic trick. Looking forward to speaking with you.',
    image: 'ball.png',
    number: '5'
  }
]


/*
EVENT LISTENERS: on click of a button, either the 'add new member' button or the 'close' button on the modal, change the visibility of the modal
------------------------------
*/
window.addEventListener('scroll', (o) => {
  setTimeout( function(){
    onScroll()
  },500)
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
    <img src="css/` + i.image + `">
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
