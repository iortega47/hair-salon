const about = document.querySelector('.mainAbout')
const services = document.querySelector('.mainServices')
const gallery = document.querySelector('.mainGallery')
const contact = document.querySelector('.mainContact')

document.querySelector('#aboutButton').addEventListener('click', aboutMain)
document.querySelector('#servicesButton').addEventListener('click', servicesMain)
document.querySelector('#galleryButton').addEventListener('click', galleryMain)
document.querySelector('#contactButton').addEventListener('click', contactMain)

function aboutMain(){
	services.classList.add('mainServices')
	gallery.classList.add('mainGallery')
    contact.classList.add('mainContact')
	about.classList.toggle('mainAbout')
}

function servicesMain(){
	about.classList.add('mainAbout')
	gallery.classList.add('mainGallery')
    contact.classList.add('mainContact')
	services.classList.toggle('mainServices')
}

function galleryMain(){
	about.classList.add('mainAbout')
	services.classList.add('mainServices')
    contact.classList.add('mainContact')
	gallery.classList.toggle('mainGallery')
}

function contactMain(){
	about.classList.add('mainAbout')
	services.classList.add('mainServices')
    gallery.classList.add('mainGallery')
	contact.classList.toggle('mainContact')
}

document.getElementById('model1').onclick = displayModel1
document.getElementById('model2').onclick = displayModel2
document.getElementById('model3').onclick = displayModel3
document.getElementById('model4').onclick = displayModel4
document.getElementById('model5').onclick = displayModel5
document.getElementById('model6').onclick = displayModel6
document.getElementById('model7').onclick = displayModel7
document.getElementById('model8').onclick = displayModel8
document.getElementById('model9').onclick = displayModel9
document.getElementById('model10').onclick = displayModel10



function displayModel1() {
  document.querySelector('#galleryModels').style.backgroundImage = "url(images/gallery/model1.jpg)";
  /*document.querySelector('#galleryModels').style.backgroundRepeat = "no-repeat";*/
  document.querySelector('#galleryModels').style.backgroundSize = "cover";
}
function displayModel2() {
	document.querySelector('#galleryModels').style.backgroundImage = "url(images/gallery/model2.jpg)";
	/*document.querySelector('#galleryModels').style.backgroundRepeat = "no-repeat";*/
    document.querySelector('#galleryModels').style.backgroundSize = "cover";
  }

function displayModel3() {
	document.querySelector('#galleryModels').style.backgroundImage = "url(images/gallery/model3.jpg)";
	/*document.querySelector('#galleryModels').style.backgroundRepeat = "no-repeat";*/
    document.querySelector('#galleryModels').style.backgroundSize = "cover";
  }
function displayModel4() {
	document.querySelector('#galleryModels').style.backgroundImage = "url(images/gallery/model4.jpg)";
	/*document.querySelector('#galleryModels').style.backgroundRepeat = "no-repeat";*/
    document.querySelector('#galleryModels').style.backgroundSize = "cover";
  }
function displayModel5() {
	document.querySelector('#galleryModels').style.backgroundImage = "url(images/gallery/model5.jpg)";
	/*document.querySelector('#galleryModels').style.backgroundRepeat = "no-repeat";*/
    document.querySelector('#galleryModels').style.backgroundSize = "cover";
  }
function displayModel6() {
	document.querySelector('#galleryModels').style.backgroundImage = "url(images/gallery/model6.jpg)";
	/*document.querySelector('#galleryModels').style.backgroundRepeat = "no-repeat";*/
    document.querySelector('#galleryModels').style.backgroundSize = "cover";
  }
function displayModel7() {
	document.querySelector('#galleryModels').style.backgroundImage = "url(images/gallery/model7.jpg)";
	/*document.querySelector('#galleryModels').style.backgroundRepeat = "no-repeat";*/
    document.querySelector('#galleryModels').style.backgroundSize = "cover";
  }
function displayModel8() {
	document.querySelector('#galleryModels').style.backgroundImage = "url(images/gallery/model8.jpg)";
	/*document.querySelector('#galleryModels').style.backgroundRepeat = "no-repeat";*/
    document.querySelector('#galleryModels').style.backgroundSize = "cover";
  }
function displayModel9() {
	document.querySelector('#galleryModels').style.backgroundImage = "url(images/gallery/model9.jpg)";
	/*document.querySelector('#galleryModels').style.backgroundRepeat = "no-repeat";*/
    document.querySelector('#galleryModels').style.backgroundSize = "cover";
  }
function displayModel10() {
	document.querySelector('#galleryModels').style.backgroundImage = "url(images/gallery/model10.jpg)";
	/*document.querySelector('#galleryModels').style.backgroundRepeat = "no-repeat";*/
    document.querySelector('#galleryModels').style.backgroundSize = "cover";
  }
  

