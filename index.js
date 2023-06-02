console.log("entered")
const options = {
  root: document.body,
  rootMargin: '0px',
  threshold: 1
}
const observer = new IntersectionObserver((entries, options) => {
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting){
      entry.target.classList.add('show')
      console.log(entry)
    } else {
//      entry.target.classList.remove('show')
    }
  })
})

let helpText = `As a Front End developer I am more in tune with small scale personal sites, like the one you are on right now or the 2 sample sites linked to below or those in the "Travel" section above. <a href="mailto:stevezadev@gmail.com?subject=Custom Website" target="_blank">Email me</a> to find out more and get things rolling.`

initHelpModal();
const hiddenElementsLeft = document.querySelectorAll(".hidden-left");

hiddenElementsLeft.forEach((el) => observer.observe(el))

/*const hiddenElementsRight = document.querySelectorAll(".hidden-right");

hiddenElementsRight.forEach((el) => observer.observe(el))
*/

 // mailtoEl = document.querySelector(".mailto-link")
 
	// Add class to mailto link
	// Needed to separate the disabling of the default action AND copy email to clipboard
	$('a[href^=mailto]').addClass('mailto-link');
  let test = $('a[href^=mailto]');
  console.log("test = " + test)

	let mailto = $('.mailto-link');
	let messageCopy = 'Click to copy email address';
	let messageSuccess = 'Email address copied to clipboard';
	console.log("mailto = " + mailto)
//	mailto.append('<span class="mailto-message"></span>');
//  $('.mailto-message').append(messageCopy);
  
  let mailtoMsgEl = document.querySelector(".mailto-msg")
	
	// Disable opening your email client. yuk.
	$('a[href^=mailto]').click(function() {
    let href = $(this).attr('href');
    console.log("disable href = " + href)
    if (href.indexOf('?') > -1)
      {
       // alert("? found inside href of " + href);
      } else {
    return false; 
      }
	})
	
	// On click, get href and remove 'mailto:' from value
	// Store email address in a variable.
	mailto.click(function() {
    console.log("store email")
    let href = $(this).attr('href');
    if (href.indexOf('?') > -1){

    } else {
		let email = href.replace('mailto:', '');
		copyToClipboard(email);
		mailtoMsgEl.innerText=(messageSuccess);
		setTimeout(function() {
		mailtoMsgEl.innerText=(messageCopy);	;}, 2000); }
	});
	


// Grabbed this from Stack Overflow.
// Copies the email variable to clipboard
function copyToClipboard(text) {
    var dummy = document.createElement("input");
    document.body.appendChild(dummy);
    dummy.setAttribute('value', text);
    dummy.select();
    document.execCommand('copy');
    document.body.removeChild(dummy);
}



function initHelpModal() {
  const modal = document.getElementById("help-modal");
 // modal.textContent = "Explanation of this version of WORDLE"
  // Get the button that opens the modal
  const btn = document.getElementById("help");

  // Get the <span> element that closes the modal
  const span = document.getElementById("close-help");


  // When the user clicks on the button, open the modal
  btn.addEventListener("click", function () {
    console.log("just clicked on help button")
    modal.style.display = "block";
    helpEl = document.querySelector(".modal-body")
    helpEl.innerHTML = helpText
    const audio = new Audio ("./auds/stats.mp3");
    audio.play()
 //   helpEl.requestFullscreen();
  });

  // When the user clicks on <span> (x), close the modal
  span.addEventListener("click", function () {
  //  modal.style.display = "none";
  modal.classList.toggle("fade-out")
  setTimeout(function(){
    modal.style.display = "none";
    modal.classList.toggle("fade-out")
   }, 2500);

  });


}
