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