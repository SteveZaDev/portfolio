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