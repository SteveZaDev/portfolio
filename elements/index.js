const elementInfo = {
  H: {
    name: "Hydrogen",
    radioactive: false,
    category: "Non-metal",
    num: 1,
    discdate: 1766,
    discoverer: "Henry Cavendish",
    intfact: "Hydrogen is the lightest element. It is colorless, odorless, tasteless and is highly combustible."
      // unexpected symbol
  },
  He: {
    name: "Helium",
    radioactive: false,
    category: "Noble Gas",
    num: 2,
    discdate: 1868,
    discoverer: "Pierre Janssen",
    intfact: "Helium's boiling point is the lowest among all the elements, and it does not have a melting point at standard pressure."
  },
  Li: {
    name: "Lithium",
    radioactive: false,
    category: "Alkali Metal",
    num: 3,
    discdate: 1817,
    discoverer: "Johan August Arfvedson",
    intfact: "Lithium is a soft, silvery-white alkali metal. Under standard conditions, it is the least dense metal and the least dense solid element."
  },
  Be: {
    name: "Beryllium",
    radioactive: false,
    category: "Alkaline Earth Metal",
    num: 4,
    discdate: 1797,
    discoverer: "Nicholas Louis",
    intfact: "Beryllium is steel-gray, strong, lightweight and brittle. It is a divalent element that occurs naturally only in combination with other elements to form minerals. Notable gemstones high in beryllium include beryl (aquamarine, emerald, red beryl) and chrysoberyl."
  },
  B: {
    name: "Boron",
    radioactive: false,
    category: "Metalloid",
    num: 5,
    discdate: 1807,
    discoverer: "Sir Humphry Davy",
    intfact: "In its crystalline form it is a brittle, dark, lustrous metalloid; in its amorphous form it is a brown powder."
  },
  C: {
    name: "Carbon",
    radioactive: false,
    category: "Non-metal",
    num: 6,
    discdate: 1722,
    discoverer: "Antoine Ferchault de Réaumur",
    intfact: "Carbon is the 15th most abundant element in the Earth's crust, and the fourth most abundant element in the universe by mass after hydrogen, helium, and oxygen."
  },
  N: {
    name: "Nitrogen",
    radioactive: false,
    category: "Non-metal",
    num: 7,
    discdate: 1772,
    discoverer: "Daniel Rutherford",
    intfact: "Nitrogen was discovered as a novel element by Daniel Rutherford (1722) and he termed it as the noxious air. He found that it was that component of the air that did not support combustion."
  },
  O: {
    name: "Oxygen",
    radioactive: false,
    category: "Non-metal",
    num: 8,
    discdate: 1774,
    discoverer: "Joseph Priestly",
    intfact: "In 1774, Carl Wilhelm Scheele and Joseph Priestley independently discovered oxygen, and named it “fire air” and “dephlogisticated air”, respectively due to its role in combustion."
  },
  F: {
    name: "Flourine",
    radioactive: false,
    category: "Halogen",
    num: 9,
    discdate: 1810,
    discoverer: "Andre-Marie Ampere",
    intfact: "The high reactivity and corrosive nature of fluorine led to delay in the discovery and isolation of fluorine as a distinct element. Several early experiments with fluorine caused serious health hazards to the scientist."
  },
  Ne: {
    name: "Neon",
    radioactive: false,
    category: "Noble Gas",
    num: 10,
    discdate: 1898,
    discoverer: " Morris W. Travers and Sir William Ramsay",
    intfact: "Ramsay discovered it by chilling an air sample until it became a liquid then capturing the gases released from the liquid as it was warmed. Neon stood out because of its brilliant red light under spectroscopic discharge."
  },
  Na: {
    name: "Sodium",
    radioactive: false,
    category: "Alkali Metal",
    num: 11,
    discdate: 1807,
    discoverer: "Sir Humphry Davy",
    intfact: "Sodium is the sixth most abundant element in the Earth's crust and exists in numerous minerals such as feldspars, sodalite, and halite."
  },
  Mg: {
    name: "Magnesium",
    radioactive: false,
    category: "Alkaline Earth Metal",
    num: 12,
    discdate: 1750,
    discoverer: "Joseph Black",
    intfact: "The pure form of magnesium was isolated in 1808 by Humphry Davy (English chemist) by passing current through magnesium oxide (molten form)."
  },
  Al: {
    name: "Aluminum",
    radioactive: false,
    category: "Post-transition Metal",
    num: 13,
    discdate: 1824,
    discoverer: "Hans Christian Orsted",
    intfact: "Aluminum's light weight, high electrical conductivity and high resistance to corrosion has make it an industrially attractive metal."
  },
  Si: {
    name: "Silicon",
    radioactive: false,
    category: "Metalloid",
    num: 14,
    discdate: 1823,
    discoverer: "Jöns Jacob Berzelius",
    intfact: "Silicon is the second most abundant element in earth’s crust. "
  },
  P: {
    name: "Phosphorous",
    radioactive: false,
    category: "Non-metal",
    num: 15,
    discdate: 1669,
    discoverer: "Hennig Brand",
    intfact: "The name phosphorus has an interesting origin, as Phosphorus is the name of planet Venus in Ancient Greece language and it means “carrier of light” or “light-bringer”. "
  },
  S: {
    name: "Sulfur",
    radioactive: false,
    category: "Non-metal",
    num: 16,
    discdate: 1867,
    discoverer: "Antoine Lavoisier",
    intfact: "In China, as early as the 6th century BC, sulfur was known as shiliuhuang and was extracted from pyrite. It was used mainly in black gunpowder by the Chinese."
  },
  Cl: {
    name: "Chlorine",
    radioactive: false,
    category: "Halogen",
    num: 17,
    discdate: 0000,
    discoverer: "?????",
    intfact: ""
  },
  Ar: {
    name: "Argon",
    radioactive: false,
    category: "Noble Gas",
    num: 18,
    discdate: 0000,
    discoverer: "?????",
    intfact: ""
  },
  K: {
    name: "Potassium",
    radioactive: false,
    category: "Alkali Metal",
    num: 19,
    discdate: 0000,
    discoverer: "?????",
    intfact: ""
  },
  Ca: {
    name: "Calcium",
    radioactive: false,
    category: "Alkaline Earth Metal",
    num: 20,
    discdate: 0000,
    discoverer: "?????",
    intfact: "Calciums interesting fact"
  },
  Sc: {
    name: "Scandium",
    radioactive: false,
    category: "Transition Metal",
    num: 21,
    discdate: 0000,
    discoverer: "?????",
    intfact: ""
  },
  Ti: {
    name: "Titanium",
    radioactive: false,
    category: "Transition Metal",
    num: 22
  },
  V: {
    name: "Vanadium",
    radioactive: false,
    category: "Transition Metal",
    num: 23
  },
  Cr: {
    name: "Chromium",
    radioactive: false,
    category: "Transition Metal",
    num: 24
  },
  Mn: {
    name: "Manganese",
    radioactive: false,
    category: "Transition Metal",
    num: 25
  },
  Fe: {
    name: "Iron",
    radioactive: false,
    category: "Transition Metal",
    num: 26
  },
  Co: {
    name: "Cobalt",
    radioactive: false,
    category: "Transition Metal",
    num: 27
  },
  Ni: {
    name: "Nickel",
    radioactive: false,
    category: "Transition Metal",
    num: 28
  },
  Cu: {
    name: "Copper",
    radioactive: false,
    category: "Transition Metal",
    num: 29
  },
  Zn: {
    name: "Zinc",
    radioactive: false,
    category: "Transition Metal",
    num: 30
  },
  Ga: {
    name: "Gallium",
    radioactive: false,
    category: "Post-transition Metal",
    num: 31
  },
  Ge: {
    name: "Germanium",
    radioactive: false,
    category: "Metalloid",
    num: 32
  },
  As: {
    name: "Arsenic",
    radioactive: false,
    category: "Metalloid",
    num: 33
  },
  Se: {
    name: "Selenium",
    radioactive: false,
    category: "Non-metal",
    num: 34
    },
  Br: {
    name: "Bromine",
    radioactive: false,
    category: "Halogen",
    num: 35
  },
  Kr: {
    name: "Krypton",
    radioactive: false,
    category: "Noble Gas",
    num: 36
  },
  Rb: {
    name: "Rubidium",
    radioactive: false,
    category: "Alkali Metal",
    num: 37
  },
  Sr: {
    name: "Strontium",
    radioactive: false,
    category: "Alkaline Earth Metal",
    num: 38
  },
  Y: {
    name: "Yttrium",
    radioactive: false,
    category: "Transition Metal",
    num: 39
  },
  Zr: {
    name: "Zirconium",
    radioactive: false,
    category: "Transition Metal",
    num: 40
  },
  Nb: {
    name: "Niobium",
    radioactive: false,
    category: "Transition Metal",
    num: 41
  },
  Mo: {
    name: "Molybdenum",
    radioactive: false,
    category: "Transition Metal",
    num: 42
  },
  Tc: {
    name: "Technetium",
    radioactive: true,
    category: "Transition Metal",
    num: 43
  },
  Ru: {
    name: "Ruthenium",
    radioactive: false,
    category: "Transition Metal",
    num: 44
  },
  Rh: {
    name: "Rhodium",
    radioactive: false,
    category: "Transition Metal",
    num: 45
  },
  Pd: {
    name: "Palladium",
    radioactive: false,
    category: "Transition Metal",
    num: 46
  },
  Ag: {
    name: "Silver",
    radioactive: false,
    category: "Transition Metal",
    num: 47
  },
  Cd: {
    name: "Cadmium",
    radioactive: false,
    category: "Transition Metal",
    num: 48
  },
  In: {
    name: "Indium",
    radioactive: false,
    category: "Post-transition Metal",
    num: 49
  },
  Sn: {
    name: "Tin",
    radioactive: false,
    category: "Post-transition Metal",
    num: 50
  },
  Sb: {
    name: "Antimony",
    radioactive: false,
    category: "Metalloid",
    num: 51
  },
  Te: {
    name: "Tellurium",
    radioactive: false,
    category: "Metalloid",
    num: 52
  },
  I: {
    name: "Iodine",
    radioactive: false,
    category: "Halogen",
    num: 53
  },
  Xe: {
    name: "Xenon",
    radioactive: false,
    category: "Noble Gas",
    num: 54
  },
  Cs: {
    name: "Cesium",
    radioactive: false,
    category: "Alkali Metal",
    num: 55
  },
  Ba: {
    name: "Barium",
    radioactive: false,
    category: "Alkaline Earth Metal",
    num: 56
  },
  La: {
    name: "Lanthanum",
    radioactive: false,
    category: "Lanthanoid",
    num: 57
  },
  Ce: {
    name: "Cerium",
    radioactive: false,
    category: "Lanthanoid",
    num: 58
  },
  Pr: {
    name: "Praseodymium",
    radioactive: false,
    category: "Lanthanoid",
    num: 59
  },
  Nd: {
    name: "Neodymium",
    radioactive: false,
    category: "Lanthanoid",
    num: 60
  },
  Pm: {
    name: "Promethium",
    radioactive: true,
    category: "Lanthanoid",
    num: 61
  },
  Sm: {
    name: "Samarium",
    radioactive: false,
    category: "Lanthanoid",
    num: 62
  },
  Eu: {
    name: "Europium",
    radioactive: false,
    category: "Lanthanoid",
    num: 63
  },
  Gd: {
    name: "Gadolinium",
    radioactive: false,
    category: "Lanthanoid",
    num: 64
  },
  Tb: {
    name: "Terbium",
    radioactive: false,
    category: "Lanthanoid",
    num: 65
  },
  Dy: {
    name: "Dysprosium",
    radioactive: false,
    category: "Lanthanoid",
    num: 66
  },
  Ho: {
    name: "Holmium",
    radioactive: false,
    category: "Lanthanoid",
    num: 67
  },
  Er: {
    name: "Erbium",
    radioactive: false,
    category: "Lanthanoid",
    num: 68
  },
  Tm: {
    name: "Thulium",
    radioactive: false,
    category: "Lanthanoid",
    num: 69
  },
  Yb: {
    name: "Ytterbium",
    radioactive: false,
    category: "Lanthanoid",
    num: 70
  },
  Lu: {
    name: "Lutetium",
    radioactive: false,
    category: "Lanthanoid",
    num: 71
  },
  Hf: {
    name: "Hafnium",
    radioactive: false,
    category: "Transition Metal",
    num: 72
  },
  Ta: {
    name: "Tantalum",
    radioactive: false,
    category: "Transition Metal",
    num: 73
  },
  W: {
    name: "Tungsten",
    radioactive: false,
    category: "Transition Metal",
    num: 74
  },
  Re: {
    name: "Rhenium",
    radioactive: false,
    category: "Transition Metal",
    num: 75
  },
  Os: {
    name: "Osmium",
    radioactive: false,
    category: "Transition Metal",
    num: 76
  },
  Ir: {
    name: "Iridium",
    radioactive: false,
    category: "Transition Metal",
    num: 77
  },
  Pt: {
    name: "Platinum",
    radioactive: false,
    category: "Transition Metal",
    num: 78
  },
  Au: {
    name: "Gold",
    radioactive: false,
    category: "Transition Metal",
    num: 79
  },
  Hg: {
    name: "Mercury",
    radioactive: false,
    category: "Transition Metal",
    num: 80
  },
  Tl: {
    name: "Thallium",
    radioactive: false,
    category: "Post-transition Metal",
    num: 81
  },
  Pb: {
    name: "Lead",
    radioactive: false,
    category: "Post-transition Metal",
    num: 82
  },
  Bi: {
    name: "Bismuth",
    radioactive: false,
    category: "Post-transition Metal",
    num: 83
  },
  Po: {
    name: "Polonium",
    radioactive: true,
    category: "Metalloid",
    num: 84
  },
  At: {
    name: "Astatine",
    radioactive: true,
    category: "Halogen",
    num: 85
  },
  Rn: {
    name: "Radon",
    radioactive: true,
    category: "Noble Gas",
    num: 86
  },
  Fr: {
    name: "Francium",
    radioactive: true,
    category: "Alkali Metal",
    num: 87
  },
  Ra: {
    name: "Radium",
    radioactive: true,
    category: "Alkaline Earth Metal",
    num: 88
  },
  Ac: {
    name: "Actinium",
    radioactive: true,
    category: "Actinoid",
    num: 89
  },
  Th: {
    name: "Thorium",
    radioactive: true,
    category: "Actinoid",
    num: 90
  },
  Pa: {
    name: "Protactinium",
    radioactive: true,
    category: "Actinoid",
    num: 91
  },
  U: {
    name: "Uranium",
    radioactive: true,
    category: "Actinoid",
    num: 92
  },
  Np: {
    name: "Neptunium",
    radioactive: true,
    category: "Actinoid",
    num: 93
  },
  Pu: {
    name: "Plutonium",
    radioactive: true,
    category: "Actinoid",
    num: 94
  },
  Am: {
    name: "Americium",
    radioactive: true,
    category: "Actinoid",
    num: 95
  },
  Cm: {
    name: "Curium",
    radioactive: true,
    category: "Actinoid",
    num: 96
  },
  Bk: {
    name: "Berylium",
    radioactive: true,
    category: "Actinoid",
    num: 97
  },
  Cf: {
    name: "Californium",
    radioactive: true,
    category: "Actinoid",
    num: 98
  },
  Es: {
    name: "Einsteinium",
    radioactive: true,
    category: "Actinoid",
    num: 99
  },
  Fm: {
    name: "Fermium",
    radioactive: true,
    category: "Actinoid",
    num: 100
  },
  Md: {
    name: "Mendelevium",
    radioactive: true,
    category: "Actinoid",
    num: 101
  },
  No: {
    name: "Nobelium",
    radioactive: true,
    category: "Actinoid",
    num: 102
  },
  Lr: {
    name: "Lawrencium",
    radioactive: true,
    category: "Actinoid",
    num: 103
  },
  Rf: {
    name: "Rutherfordium",
    radioactive: true,
    category: "Transition Metal",
    num: 104
  },
  Db: {
    name: "Dubnium",
    radioactive: true,
    category: "Transition Metal",
    num: 105
  },
  Sg: {
    name: "Seaborgium",
    radioactive: true,
    category: "Transition Metal",
    num: 106
  },
  Bh: {
    name: "Bohrium",
    radioactive: true,
    category: "Transition Metal",
    num: 107
  },
  Hs: {
    name: "Hassium",
    radioactive: true,
    category: "Transition Metal",
    num: 108
  },
  Mt: {
    name: "Meitnerium",
    radioactive: true,
    category: "Transition Metal",
    num: 109
  },
  Ds: {
    name: "Darmstadtium",
    radioactive: true,
    category: "Transition Metal",
    num: 110
  },
  Rg: {
    name: "Roentgenium",
    radioactive: true,
    category: "Transition Metal",
    num: 111
  },
  Cn: {
    name: "Copernicium",
    radioactive: true,
    category: "Transition Metal",
    num: 112
  },
  Nh: {
    name: "Nihonium",
    radioactive: true,
    category: "Post-transition Metal",
    num: 113
  },
  Fl: {
    name: "Flerovium",
    radioactive: true,
    category: "Post-transition Metal",
    num: 114
  },
  Mc: {
    name: "Moscovium",
    radioactive: true,
    category: "Post-transition Metal",
    num: 115
  },
  Lv: {
    name: "Livermorium",
    radioactive: true,
    category: "Post-transition Metal",
    num: 116
  },
  Ts: {
    name: "Tennessine",
    radioactive: false,
    category: "Halogen",
    num: 117
  },
  Og: {
    name: "Oganesson",
    radioactive: true,
    category: "Noble Gas",
    num: 118
  }
}

// Color palette
const colors = {
  //'background': '#F2EFE9',
  'background': '#00000000',
  'other-non-metal': '#1AFF00',
  'alkali-metal': '#FF0C00',
  'alkaline-earth-metal': '#FF6700',
  'transition-metal': '#FF54A4',
  'metalloid': '#FFB800',
  'post-transition-metal': '#FF762E',
  'halogen': '#00EEFF',
  'noble-gas': '#0E94FF',
  'rare-earth': '#FF006A',
  'actinoid': '#FF00C6'
}



let viewHelpText = `Welcome to ELEMENTLE! Please read the help(?) for info and tips on game play. This Beta version is best viewed on a desktop.`
initViewHelpModal();

// Viewport width
const viewportSize = $('.full-table').width()

$('#screen-width').text(viewportSize)




let elementsArray = [];

// For every element...
let i = 0;
$('.element').each(function() {


  let elementObj = {
    elName: "",
    elSym: "",
    elNum: 0     
  }

  // Append an h4 to the element with its name
  const elementSymbol = $(this).children('.symbol').text()
  const elementName = elementInfo[elementSymbol]['name']
  const elementNum = elementInfo[elementSymbol]['num']
  $(this).append(`<h4 class="name">${elementName}</h4>`)
  elementObj.elName = elementName;
  elementObj.elNum = elementNum;
  elementObj.elSym = elementSymbol;
  if (i<120){
    elementsArray.push(elementObj);
    i++;
  }
})  // End of .element block of code






// June 22 - add code to get the array of correct elements from localstorage and remove those from the active elements still to be discovered
let correctElements = JSON.parse(window.localStorage.getItem('elements'));


if (correctElements){
    correctElementsArray = JSON.parse(window.localStorage.getItem('elements'));

    for (i=0; i<correctElementsArray.length; i++){

      const index = elementsArray.findIndex(object => {
        return object.elName.toUpperCase() === correctElementsArray[i];
      });
      
      fillPeriodicTable(elementsArray[index].elNum, elementsArray[index].elSym)
 
      elementsArray.splice(index,1);
    }
}  // End of if correctElements block






// Events for mobile screen sizes
  if (viewportSize <= 700) {

  $('.element').on('click', function(){
    // Check that the element clicked isn't already expanded
    if ($(this).hasClass('element__expanded')) {
      $(this).removeClass('element__expanded')
    } else {
      // Remove the expanded classes from whatever element has them currently (previously clicked element)
      $('.element').removeClass('element__expanded')
      // Add the expanded classes to the currently selected element
      $(this).addClass('element__expanded')
    }




    // Show the selected element's category type in hovered mode
    // const elementSymbol = $(this).children('.symbol').text()
    // const elementCategory = elementInfo[elementSymbol]['category']
    // $(this).append(`<h3 class="category">${elementCategory}</h3>`)
  })
}  // end of viewportsize <= 700 block

// Events for larger screen size
//if (viewportSize > 760) {
  if (viewportSize > 300) {
  $('.element').removeClass('element__expanded')
  // Helpful tip on what the corner number is for large screens
  $('.number').attr('title', 'Atomic Number')

  // Hover effects only large screens can enjoy
  $('.element').hover(
    function() {
      console.log("checking hoverableness")
      if ($(this).hasClass("hoverable")){

      } else {
        return;
      }


      const elementSymbol = $(this).children('.symbol').text()
      const elementName = elementInfo[elementSymbol]['name']
      const elementNum = elementInfo[elementSymbol]['num']
      let isa = ", is a "
      if (elementInfo[elementSymbol]['category'].charAt(0) === "A"){
        isa = ", is an ";
      }
      const elementCategory = elementName + " #" + elementNum + isa +  elementInfo[elementSymbol]['category'] +  " discovered by " +   elementInfo[elementSymbol]['discoverer'] + " in " + elementInfo[elementSymbol]['discdate'] + ". " + elementInfo[elementSymbol]['intfact']
      let categoryColorSelector = $(this).attr('class').replace(/element /, '')
      categoryColorSelector = categoryColorSelector.replace(/ hoverable/, '')
   //   const groupLabelColor = colors[categoryColorSelector]
      const groupLabelColor = 'linear-gradient(65deg, ' + colors[categoryColorSelector] + ', antiquewhite';
      const isRadioactive = elementInfo[elementSymbol]['radioactive']

        // Display hovered element's category name under the title
      $('.group-label').text(elementCategory)
     
        // Make the background of the category label box the color of the hovered category
      $('.group-label').css('background', groupLabelColor)
      $('.group-label').css('font-size', '14px')
 
      $("#group-element-name").text("Hello world!");
  //    $("#"+styleTarget).css({'font-size':'"+$(this).val()+"px'});
         // Add some attributes to the element to be used later
       $(this).attr({
         "title": elementName,
         "data-isRadioactive": isRadioactive
       })
    },
    // When moved from hovering this element...
    function() {
      // Remove the group label box and set its background color back to the page's background color
      $('.group-label').text('')
      $('.group-label').css('background-color', colors['background'])
      $('.group-label').css('background', colors['background'])
      $('.group-label').css('background-color', colors['red'])
    }
  )
}

// When an element is clicked...
$('.element').on('click', function() {
// Make sure it is hoverable which is synonomous with clickable
if ($(this).hasClass("hoverable")){

} else {
  return;
}

// June 25 try to detect if touchstart - if yes check if previous touched was the same before showing video 

  const elementNumber = $(this).children('.number').text()
  const elementName = $(this).attr("title")

  // // Check to see if the clicked element is radioactive
  if ($(this).attr("data-isRadioactive") === "true") {
    alert(`Watch out! ${elementName} is radioactive, yo!`)
  }
  // Make the Periodic Videos URL
  const videoUrl = () => {
      let urlNumber = [...elementNumber]
      while (urlNumber.length < 3) {
        urlNumber.unshift('0')
      }
      return `https://periodicvideos.com/videos/${urlNumber.join('')}.htm`
    }
    // Open the video for this element in a new tab if you want to watch it
 // if (confirm(`${elementName} video?`)) {
    window.open(videoUrl())
 // }
})


$("#table").click(function(){

  $("#wordle-container").toggle();
  $(".periodic-table").toggle();


}); 
// END OF ELEMENTS CODE
// END OF ELEMENTS CODE
// END OF ELEMENTS CODE
// END OF ELEMENTS CODE
// END OF ELEMENTS CODE
// END OF ELEMENTS CODE
// END OF ELEMENTS CODE






let protoWordsArray = [
]

const backgroundImagesPortrait=[
 // "https://images.pexels.com/photos/1834407/pexels-photo-1834407.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "https://images.pexels.com/photos/2627945/pexels-photo-2627945.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "https://images.pexels.com/photos/302743/pexels-photo-302743.jpeg",
  "https://images.pexels.com/photos/221502/pexels-photo-221502.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "https://cdn.pixabay.com/photo/2017/08/31/11/35/alps-2700403_960_720.jpg",
  "https://images.unsplash.com/photo-1543837173-6c26bc89937b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YXV0dW1ufGVufDB8MXwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1553114836-026cecec9778?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fG5hdHVyZXxlbnwwfDF8MHx8&auto=format&fit=crop&w=500&q=60"
//  "https://cdn.pixabay.com/photo/2023/01/22/12/17/flower-7736238__340.jpg"
]

const backgroundImagesLandscape=[
  "https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?auto=compress&cs=tinysrgb&w=1600",
  "https://cdn.pixabay.com/photo/2021/01/09/20/23/road-5903402__340.jpg",
  "https://images.pexels.com/photos/221502/pexels-photo-221502.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "https://cdn.pixabay.com/photo/2017/08/31/11/35/alps-2700403_960_720.jpg",
  "https://images.pexels.com/photos/302743/pexels-photo-302743.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "https://images.unsplash.com/photo-1566155119454-2b581dd44c59?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDZ8fHNwcmluZ3xlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60"
]

const audios=[ {name: "default",
                link: "./auds/bgmusic.mp3",
                vol: .105
              },
              {name: "Dream",
              link: "./auds/dream.mp3",
              vol: .25
            },
                {name: "Classical Gas",
                link: "./auds/classicalgas.m4a",
                vol: .25
              }
             ]

let helpText = `"ELEMENTLE" is designed to help you learn about the Elements. Each time you play, one of the 118 elements will be randomly selected and you will, in Wordle fashion, have to determine what that element is. But there is a lot more to it than that. As you figure out each game, and get the correct answer, you will be taken to a layout of the periodic table. All of the elements that you have figured out will show with their number and symbol. Positions for all the other elements will show up, but only as blank color coded boxes. These colors correspond to groupings of elements. When correct, you will automatically be taken to the Periodic table. Hover over any of the revealed elements and additional info will be displayed. Click on the element and a link to a rather involved video about that element will show. The table icon in the upper right of the screen will toggle between the Periodic Table and the Game play display.          
TIPS - 
----------------
----------------
`


let sound = true;
let soundPlayer = "";
let randomAudioIdx = Math.floor(Math.random()*audios.length)
soundPlayer = new Audio (audios[randomAudioIdx].link);
let audioName = audios[randomAudioIdx].name;
soundPlayer.loop = true;
soundPlayer.volume = audios[randomAudioIdx].vol
soundPlayer.currentTime = 1;
const maxLettersNarrowScreen = 21;
let chameleon = false;
DANCE_ANIMATION_DURATION = 1500;


let fullScreen = false;
let wordsArray=[]
let keyboardClicks = false;

let playButtonEl = ""
const containerEl = document.getElementById('container')
let currentWordIndex = 0;
let guessedWordCount = 0;
let guessedWords = [[]]
let availableSpace = 1; 
let numofLetters = 5
let numofGuesses = 6
let wordle = ""
let wordleElNum = 0
let wordleElSym = ""
let gameInProgress = false;
let atLeastOneGuessMade = false;
let maxCharacters = 35;

let randomArray = 0;
let randomWordle = 0;
let revealLetterNum = 0;
const messageContainerEl = document.getElementById('message-container')

/*let categoryPreferences = [
  true, false, false, false, false, false, false, false, false, false, false, false, false, false, false,
  false, false, false, false, false, false, false, false, false, false, false, false, false
];*/

let categoryPreferences = [
];

let resultsArray = []
let resultObj = {
  date: 0,
  wordle: "",
  guesses: 0
}

document.addEventListener("DOMContentLoaded", () => {



    initPreferencesModal();
    initCategories();
    initHelpModal();
    initStatsModal();
//    initCategoriesModal();
    initPeriodicBtn();
   
    initLook();
    
    playButtonEl = document.getElementById("start")

    playButtonEl.addEventListener("click", ({ target }) => {
       letsPlay()
     })


    });

    /*
    function initLocalStorage() {
      const storedCurrentWordIndex = window.localStorage.getItem('currentWordIndexEl')
      if (!storedCurrentWordIndex){
        window.localStorage.setItem('currentWordIndexEl', currentWordIndex)
      } else {
        currentWordIndex = Number(storedCurrentWordIndex) 
      }
    }*/

function letsPlay() {
  // Clear the classes of the keyboard that were set in any previous Wordle

   initClasses();

//   playMusic();

currentWordIndex = 0;
guessedWordCount = 0;
revealLetterNum = 0;
guessedWords = [[]]
availableSpace = 1; 
numofLetters = 5
numofGuesses = 6
wordle = ""
gameInProgress = true;



  setColors();


// END OF INIT
  
//



  playButtonEl.style.display = "none";
  messageContainerEl.innerText = ""


 // randomWordle = Math.floor(Math.random()*(elementsArray).length);
  if (elementsArray.length === 0){
     messageContainerEl.innerText = "No more elements"
     return;
  }
  randomWordle = Math.floor(Math.random()*(elementsArray).length);
  

  
  console.log("randomWordle = " + randomWordle) 
  numofLetters = elementsArray[randomWordle].elName.length;
  wordle = elementsArray[randomWordle].elName.toUpperCase();
  wordleElNum = elementsArray[randomWordle].elNum;
  wordleElSym = elementsArray[randomWordle].elSym;
  if(window.innerWidth < 900){
    if (numofLetters > maxLettersNarrowScreen){
      messageContainerEl.innerText = "Mobile Screen - " + numofLetters + " character Wordle has been truncated to " + maxLettersNarrowScreen;
      setTimeout(function(){
        messageContainerEl.innerText = ""
    }, 4500);
      numofLetters = maxLettersNarrowScreen;
      wordle = wordle.slice(0, maxLettersNarrowScreen);
    }
  }
  
  console.log("wordle = " + wordle +  " num of letters = " + numofLetters)
 // let guessedWordCount = 0;
  numofGuesses = 6;
  if (numofLetters > 10){
    numofGuesses = 8;
  }

  function initClasses(){
  /*  let keys = document.getElementsByClassName('correct-letter-in-place');
    if (keys){
    keys.forEach(key => {
      key.classList.remove("correct-letter-in-place")  
    });
    }
*/
    const allElements = document.querySelectorAll('*');
    
allElements.forEach((element) => {
  element.classList.remove('correct-letter-in-place');
  element.classList.remove('correct-letter');
  element.classList.remove('incorrect-letter');
});



  }
 
  createSquares();
  // Check to see if keyboard click event listener has already been set via the first game of the session  
  if (!keyboardClicks){

    addKeyboardClicks();
    document.addEventListener('keydown', function(event) {

      handleKeystroke(event.key)
      });
  }

  guessedWords = [[]]
  availableSpace = 1; 

  const keys = document.querySelectorAll('.keyboard-row button')


  function getCurrentWordArr() {
    const numberOfGuessedWords = guessedWords.length;
    return guessedWords[numberOfGuessedWords - 1]
  }

  function updateGuessedLetters(letter){
    const currentWordArr = getCurrentWordArr()

    if (currentWordArr && currentWordArr.length < numofLetters){
      currentWordArr.push(letter)
      const availableSpaceEl = document.getElementById(availableSpace)
      availableSpace++;

      availableSpaceEl.textContent = letter;
    }
  }

  function getIndicesOfLetter(letter, arr){
    const indices = [];
    let idx = arr.indexOf(letter);
    while (idx != -1){
      indices.push(idx);
      idx = arr.indexOf(letter, idx+1);
    }
    return indices;
  } // END OF getIndicesOfLetter

  function getTileClass(letter, index, currentWordArr) {
    const isCorrectLetter = wordle
      .toUpperCase()
      .includes(letter.toUpperCase());
      if (!isCorrectLetter){
        return "incorrect-letter";
      }

      const letterInThatPosition = wordle.charAt(index);
      const isCorrectPosition = letter.toLowerCase() === letterInThatPosition.toLowerCase();
      if (isCorrectPosition){
        return "correct-letter-in-place";
      }

  
       const isGuessedMoreThanOnce =
       currentWordArr.filter((l) => l === letter).length > 1;

       if (!isGuessedMoreThanOnce) {
        return "correct-letter";
      }

      const existsMoreThanOnce = wordle.split("").filter((l) => l === letter).length > 1;

    // is guessed more than once and exists more than once
    if (existsMoreThanOnce) {
      return "correct-letter";
    }

    const hasBeenGuessedAlready = currentWordArr.indexOf(letter) < index;

    const indices = getIndicesOfLetter(letter, wordle.split(""));
    const otherIndices = indices.filter((i) => i !== index);
    const isGuessedCorrectlyLater = otherIndices.some(
      (i) => i > index && currentWordArr[i] === letter
    );

    if (!hasBeenGuessedAlready && !isGuessedCorrectlyLater) {
      return "correct-letter";
    }

    return "incorrect-letter";


} // END OF getTileClass


  function handleSubmitWord(){

    const currentWordArr = getCurrentWordArr();
    const guessedWord = currentWordArr.join("");
    if (guessedWord.length !== numofLetters){
      messageContainerEl.innerText = (`You entered ${currentWordArr.length} characters which is less than the ${numofLetters} needed`);
      return;
    }
    window.navigator.vibrate(450);
    //flipTile();

    atLeastOneGuessMade = true;
    let checkWordle = wordle;
    const guess = [];
  
    currentWordArr.forEach(tile => {
 
    //  guess.push({letter: tile, color: 'dontknow'});
      guess.push({letter: tile, color: 'incorrect-letter'});
    })


    guess.forEach(guess => {
      if (!checkWordle.includes(guess.letter.toUpperCase())){
        guess.color = 'incorrect-letter'

        }
    })






    guess.forEach((guess, index) => {
    
      if (guess.letter == wordle[index].toLowerCase()){
        guess.color = 'correct-letter-in-place'

        checkWordle = checkWordle.replace(guess.letter.toUpperCase(), '')
 
      }
    })


    guess.forEach(guess => {
      console.log("guess letter = " + guess.letter);
      if (checkWordle.includes(guess.letter.toUpperCase())){
        console.log ("guess.color before setting to yellow = " + guess.color)
        if (guess.color === "correct-letter-in-place"){

        } else {
        guess.color = 'correct-letter'
        console.log ("set yellow overlay")
        checkWordle = checkWordle.replace(guess.letter.toUpperCase(), '')
        console.log ("guess array = " + guess + " checkWordle = " + checkWordle)
        console.log (" ")
      }
      }
    })




  
    let result = guessedWord.toUpperCase();

    const firstLetterId = guessedWordCount * numofLetters + 1;
    let interval = 2500 / numofLetters;









    currentWordArr.forEach((tile, index) => {
    
      setTimeout(() => {
    //    tile.classList.add("animate__flipInX")
    //    tile.classList.add(guess[index].color)
        const letterId = firstLetterId + index;
        const letterEl = document.getElementById(letterId);
     //   if (letter === " "){
     //     letter = "space"
     //   }
     //  let keyboardLetter = letter.toLowerCase();
     //  const keyboardLetterEl = document.querySelector("[data-key=" + keyboardLetter + "]");
 

     //   console.log("keyboard letter = " + keyboardLetterEl)
        letterEl.classList.add(guess[index].color)
        letterEl.classList.add("animate__flipInX")
    //    addColorToKey(guess[index].letter, guess[index].color)
        if (tile === " "){
          tile = "space"
        }

    const keyboardEl = document.querySelector(`[data-key=${tile}]`);
    console.log ("keyboardEl = " + keyboardEl + " tile = " + tile);
    keyboardEl.classList.add(guess[index].color);

      }, interval * index)
  
    })

    guessedWordCount += 1;
    let date = new  Date();
//    resultObj.date = date.toString()
    resultObj.date = new Date();
    console.log("New date = " + resultObj.date)
    console.log("New date is of type " + typeof(resultObj.date))
    resultObj.wordle = wordle;
    console.log("guessed word = " + guessedWord + "  wordle = " + wordle)
    let guessedWordUpper = guessedWord.toUpperCase();
    if (guessedWordUpper === wordle){
      messageContainerEl.innerText = "Congratulations!"
      const audio = new Audio ("./auds/success.mp3");
      audio.play()
      danceTiles(currentWordArr, firstLetterId);
      setTimeout(function(){
        showPeriodicTable(wordleElNum, wordleElSym);
    }, 4500);
    // June 22 - add code to update array of correct elements in localstorage 
    elementsArray.splice(randomWordle,1);
    let correctElementsArrayTemp = JSON.parse(window.localStorage.getItem('elements'));
    if (correctElementsArrayTemp){
        let correctElementsArray = JSON.parse(window.localStorage.getItem('elements'));
        correctElementsArray.push(wordle);
        window.localStorage.setItem('elements', JSON.stringify(correctElementsArray));
    } else {
      let correctElementsArray = [];
      correctElementsArray[0] = wordle;
      window.localStorage.setItem('elements', JSON.stringify(correctElementsArray));
    }







      resultObj.guesses = guessedWordCount;
      let resultsArrayTemp = JSON.parse(window.localStorage.getItem('resultsEl'));
      if (resultsArrayTemp){
          resultsArray = JSON.parse(window.localStorage.getItem('resultsEl'));
          console.log("New date right before push = " + resultObj.date)
          resultsArray.push(resultObj);
          console.log("Array after push = " + resultsArray);
          console.log ("item date just added = " + resultsArray[resultsArray.length-1].date);
          window.localStorage.setItem('resultsEl', JSON.stringify(resultsArray));
      } else {
        resultsArray[0] = resultObj;
        window.localStorage.setItem('resultsEl', JSON.stringify(resultsArray));
      }

      setTimeout(function(){
        playButtonEl.innerText = "Play Again?";
        playButtonEl.style.display = "block";
        messageContainerEl.innerText = ""
    }, 4500);
      const totalWins = window.localStorage.getItem("totalWinsEl") || 0;
      window.localStorage.setItem("totalWinsEl", Number(totalWins) + 1);

      const currentStreak = window.localStorage.getItem("currentStreakEl") || 0;
      const maxStreak = window.localStorage.getItem("maxStreakEl") || 0;
      let text = "currenStreak = " + currentStreak + " maxStreak = " + maxStreak
   //   window.alert(text)
      window.localStorage.setItem("currentStreakEl", Number(currentStreak) + 1);
      if ((Number(currentStreak)+1) > Number(maxStreak)){
   //     window.alert("updating max")
        window.localStorage.setItem("maxStreakEl", Number(currentStreak) + 1);
      }
      updateTotalGames();
    //  removeKeyboardListeners();
     return;
    } // END OF CORRECT WORD LOGIC

    if (guessedWords.length ===  numofGuesses && guessedWord !== wordle) {
      resultObj.guesses = 10;
      let resultsArrayTemp = JSON.parse(window.localStorage.getItem('resultsEl'));
      if (resultsArrayTemp){
          resultsArray = JSON.parse(window.localStorage.getItem('resultsEl'));
          resultsArray.push(resultObj);
          window.localStorage.setItem('resultsEl', JSON.stringify(resultsArray));
      } else {
        resultsArray[0] = resultObj;
        window.localStorage.setItem('resultsEl', JSON.stringify(resultsArray));
      }

      messageContainerEl.innerText = (`Sorry, no more guesses. The wordle is ${wordle}`)
      window.localStorage.setItem("currentStreakEl", 0);
      const audio = new Audio ("./auds/negative.mp3");
      audio.play()
      updateTotalGames();     setTimeout(function(){
        messageContainerEl.innerText = ""
        playButtonEl.innerText = "Play Again?";
        playButtonEl.style.display = "block";
    }, 4500);




    //  removeKeyboardListeners();
      return;
    } 

    const audio = new Audio ("./auds/ascending.mp3");
    audio.play()
    guess.forEach(guess => {
      console.log("letter = " + guess.letter + " color = " + guess.color)
    }
    )




    guessedWords.push([]);
    console.log("Guessedwords length = " + guessedWords.length)


   /* 
    currentWordArr.forEach((letter, index) => {
      setTimeout(() => {
        const tileClass = getTileClass(letter, index, currentWordArr);
        if (tileClass){
          const letterId = firstLetterId + index;
          console.log("letter = " + letter);
          const letterEl = document.getElementById(letterId);
       //   if (letter === " "){
       //     letter = "space"
       //   }
       //  let keyboardLetter = letter.toLowerCase();
       //  const keyboardLetterEl = document.querySelector("[data-key=" + keyboardLetter + "]");
      //   console.log("keyboard letter = " + keyboardLetterEl)
          letterEl.classList.add("animate__flipInX")
          console.log ("class should have been set to flip")
          letterEl.classList.add(tileClass)
      //  letterEl.style = `background-color:${tileColor};border-color:${tileColor}`;
    //    letterEl.style.backgroundColor = tileColor;
    //    letterEl.style.borderColor = tileColor;
    //    keyboardLetterEl.style.backgroundColor = tileColor;
          const keyboardEl = document.querySelector(`[data-key=${letter}]`);
          console.log ("keyboardEl = " + keyboardEl);
          keyboardEl.classList.add(tileClass);
        }
      }, interval * index);  // END OF setTimeout
    });  // END OF forEach letter in the current word

    guessedWordCount += 1;
    console.log("guessed word = " + guessedWord + "  wordle = " + wordle)
    let guessedWordUpper = guessedWord.toUpperCase();
    if (guessedWordUpper === wordle){
      messageContainerEl.innerText = "Congratulations!"
    }

    if (guessedWords.length ===  numofGuesses && guessedWord !== wordle) {
      window.alert(`Sorry, no more guesses. The wordle is ${wordle}`)
    } 


    guessedWords.push([]);
    console.log("Guessedwords length = " + guessedWords.length)*/
  } // END OF handleSubmitWord

  function updateTotalGames(){
    const totalGames = window.localStorage.getItem("totalGamesEl") || 0;
    window.localStorage.setItem("totalGamesEl", Number(totalGames) + 1);
    gameInProgress = false;
    atLeastOneGuessMade = false;
  }


  function createSquares(){
    let screenWidth = window.innerWidth;
    if (screenWidth > 700){
      screenWidth = 700;
    }
    let screenHeight = window.innerHeight;

    console.log ("createSquares  screenWidth = " + screenWidth + "  screenHeight = " + screenHeight);

    const gameBoard = document.getElementById("board")


    // Clear out any elements of class "square"
    let squares = document.getElementsByClassName('square');
    while (squares[0]){
      squares[0].parentNode.removeChild(squares[0]);
    }

    for (let i = 0; i < (numofLetters*numofGuesses); i++) {
      let square = document.createElement("div");
      square.classList.add("square");
      square.classList.add("animate__animated");
      square.setAttribute("id", i + 1);
      gameBoard.appendChild(square)
    }  

    //  FROM HERE TO END OF FUNCTION ADDED BECAUSE NUMBER OF LETTERS IN WORDLE CAN VARY
    const board = document.getElementById("board")
    const square = document.querySelectorAll(".square")
    console.log(square)
    square.forEach(square => {
      square.style.width = (screenWidth / (numofLetters + 4) + 'px');
      square.style.height = ((screenHeight / 15) + 'px');
      square.style.height = (screenWidth / (numofLetters + 4) + 'px');
      square.style.fontSize = (screenWidth / (numofLetters + 4) + 'px');
      if (screenWidth > screenHeight){
        square.style.height = ((screenHeight / 15) + 'px');
        square.style.fontSize = ((screenHeight / 20) + 'px');

      }
    });
    board.style.gridTemplateColumns = 'repeat(' + numofLetters + ', 1fr)'
  
  } // END OF createSquares

  function handleDelete(){
    const currentWordArr = getCurrentWordArr()
    console.log(currentWordArr)
    if (currentWordArr.length === 0){
      console.log("blank array")
      return;
    }
    currentWordArr.pop();

    guessedWords[guessedWords.length - 1] = currentWordArr

    const lastLetterEl = document.getElementById(availableSpace - 1)

    lastLetterEl.innerHTML = ""   
    availableSpace--; 

  } // END OF handleDelete


  function removeKeyboardListeners(){
    console.log("entered remove listeners")
    const keys = document.querySelectorAll(".keyboard-row button");
    for (let i = 0; i < keys.length; i++) {
      console.log("keyboard count = " + i)
      keys[i].removeEventListener("click")
    }
   }

  function addKeyboardClicks(){    
      keyboardClicks = true;
      const keys = document.querySelectorAll(".keyboard-row button");
      for (let i = 0; i < keys.length; i++) {
        keys[i].addEventListener("click", ({ target }) => {
          if (!gameInProgress){
            return;
          }
      
          messageContainerEl.innerText = ""

          let key = target.getAttribute("data-key");
          target.blur() 
  
 
          if (key === "enter") {
            const audio = new Audio ("./auds/hard-keypress.wav");
            audio.play()
            handleSubmitWord();
            return;
          }
  
          if (key === "del") {
            const audio = new Audio ("./auds/hard-keypress.wav");
            audio.play()
            handleDelete();
            return;
          }

          if (key === "space") {
            const audio = new Audio ("./auds/keypress2.wav");
            audio.play()
            key = " "
          }
          const audio = new Audio ("./auds/keypress2.wav");
          audio.play()
          updateGuessedLetters(key);
        });
      }  // END OF FOR KEYBOARD LOOP

      const titleEl = document.querySelector(".title")
      titleEl.addEventListener("click", ({ target }) => {
      if (!atLeastOneGuessMade){
         return;
        }
        populateRow();
      });
    


        // holdSpaceDel();
        initMisc();




    } // END OF Ians addKeyboardClicks 

function populateRow(){
  console.log("add code to place any green tiles from above onto the current row")
  const allSquaresEl = document.querySelectorAll(".square")
  const currentWordArr = getCurrentWordArr()
  guessedWords[guessedWords.length - 1] = [];
  availableSpace = guessedWordCount * numofLetters + 1;
  console.log ("available spacei in  pop row is " + availableSpace)


  for (i=0; i<numofLetters; i++){
 //   for (i=0; i<4; i++){
    // check for equal modulus values that would indicate the same column, if find correct letter in correct space class output it
    // get id then check class
   // element.classList.contains(class);
 //   updateGuessedLetters('x');
    // loop thru checking all columns except for the last
    let foundGreen = false;
    for (j=0; j<numofGuesses; j++){
    //  let idNum = Number(allSquaresEl[(i*j)-1].id)
      let idNum = (i)+(j*numofLetters)
      console.log ("id num in populateRow function = " + idNum)
      if (allSquaresEl[idNum].classList.contains("correct-letter-in-place")){
        console.log("correct letter in place - that letter is " + allSquaresEl[idNum].innerText )
       /* if (j%numofLetters === i){*/
           foundGreen = (allSquaresEl[idNum].innerText.toLowerCase())
           console.log("FOUNDGREEN SET TO " + foundGreen )
      /*  }*/
      } 
      } // end of for j
    if (foundGreen){
      updateGuessedLetters(foundGreen)
    } else {
      updateGuessedLetters(' ')
    }
  }
} //END OF POPULATE ROW


function initMisc(){


}




    function holdSpaceDel(){
          // The item (or items) to press and hold on
    let itemSpace = document.querySelector(".space-button");
    let itemDel = document.querySelector(".del-button");

    let timerID;
    let counter = 0;

    let spaceHoldEvent = new CustomEvent("spaceHold");
    let delHoldEvent = new CustomEvent("delHold");  

    // Increase or decreae value to adjust how long
    // one should keep pressing down before the pressHold
    // event fires
    let pressHoldDuration = 50;

    // Listening for the mouse and touch events    
    itemSpace.addEventListener("mousedown", pressingDown, false);
    itemSpace.addEventListener("mouseup", notPressingDown, false);
    itemSpace.addEventListener("mouseleave", notPressingDown, false);

    itemSpace.addEventListener("touchstart", pressingDown, false);
    itemSpace.addEventListener("touchend", notPressingDown, false);
    // Listening for our custom pressHold event
    itemSpace.addEventListener("spaceHold", spaces, false);

        // Listening for the mouse and touch events on Delete    
        itemDel.addEventListener("mousedown", pressingDown2, false);
        itemDel.addEventListener("mouseup", notPressingDown2, false);
        itemDel.addEventListener("mouseleave", notPressingDown2, false);
    
        itemDel.addEventListener("touchstart", pressingDown2, false);
        itemDel.addEventListener("touchend", notPressingDown2, false);
        // Listening for our custom pressHold event
        itemDel.addEventListener("delHold", deletes, false);

    function pressingDown(e) {
      // Start the timer
      requestAnimationFrame(timer);
      console.log ("e key = " + e.key)
      e.preventDefault();

      console.log("Pressing!");
    }

    function notPressingDown(e) {
      // Stop the timer
      cancelAnimationFrame(timerID);
      counter = 0;

      console.log("Not pressing!");
    }

    //
    // Runs at 60fps when you are pressing down
    //
    function timer() {
      console.log("Timer tick!");

      if (counter < pressHoldDuration) {
        timerID = requestAnimationFrame(timer);
        counter++;
      } else {
        console.log("Press threshold reached!");
        itemSpace.dispatchEvent(spaceHoldEvent);
      }
    }




    function pressingDown2(e) {
      // Start the timer
      requestAnimationFrame(timer2);
      e.preventDefault();

      console.log("Pressing del!");
    }

    function notPressingDown2(e) {
      // Stop the timer
      cancelAnimationFrame(timerID);
      counter = 0;

      console.log("Not pressing del!");
    }

    //
    // Runs at 60fps when you are pressing down
    //
    function timer2() {
      console.log("Timer2 tick!");

      if (counter < pressHoldDuration) {
        timerID = requestAnimationFrame(timer2);
        counter++;
      } else {
        console.log("Del Press threshold reached!");
        itemDel.dispatchEvent(delHoldEvent);
      }
    }

    function spaces(e) {
 //     console.log("pressHold event fired on spaces!");
   //   for (i=1; i<maxCharacters; i++){
   //     updateGuessedLetters('x');
   //   }
   //   console.log("done with loop of spaces");
      // submit all the spaces
      // handleSubmitWord();
     }

     function deletes(e) {
      console.log("pressHold event fired on delete!");
      for (i=1; i<maxCharacters; i++){
       handleDelete();
      }
     }


    }





/*   MAY WANT TO ADD SOME OF THIS INTO ABOVE FUNCTION

      var audio = new Audio("./keypress.wav");
      audio.play();
      //let containerEl = document.getElementById('container')
      //containerEl.requestFullscreen();
      if (letter === "enter" ){
        handleSubmitWord();
        return;
      }

      if (letter === "del" ){
        console.log("available space = " + availableSpace)
        handleDeleteLetter();
        return;
      }

      if (letter === 'space'){
        letter = ' ';
      }
      console.log('clicked letter = ' + letter )
      updateGuessedWords(letter);
    }  // END OF addKeyboardClicks 
*/


  function handleKeystroke(letter){
    if (!gameInProgress){
      return;
    }

    console.log ("key in handleKeystroke function - "  + letter)
    messageContainerEl.innerText = "";
    let containerEl = document.getElementById('container')
  //  containerEl.requestFullscreen();

  if (letter === "Enter" || letter === "Delete"){
    console.log ("key in handleKeystroke function2 - "  + letter)
  } else {
      let alpha = "abcdefghijklmnopqurstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ ";
      let result = alpha.includes(letter);
      if (!result){
        return;
      }
    }
    if (letter === "Enter" ){
      console.log ("about to submitword")
      handleSubmitWord();
      return;
    }

    if (letter === "Delete" ){
      console.log("available space = " + availableSpace)
      handleDelete();
      return;
    }


    console.log("dont want to reach here")
    letter = letter.toLowerCase();
    updateGuessedLetters(letter);

  }

}

// THIS LOGIC IS TAKEN FROM ANIA KUBOWS WORDLE CLONE - ITS COLOR LOGIC WORKS CORRECTLY 
const flipTile = () => {
  // pick up at 
  const rowTiles = document.querySelector('#guessRow-' + currentRow).childNodes;

  let checkWordle = wordle;
  const guess = [];

  rowTiles.forEach(tile => {
    guess.push({letter: tile.getAttribute('data'), color: 'grey-overlay'})
  })

  guess.forEach((guess, index) => {
    if (guess.letter == wordle[index]){
      guess.color = 'green-overlay'
      checkWordle = checkWordle.replace(guess.letter, '')
    }
  })

  guess.forEach(guess => {
    if (checkWordle.includes(guess.letter)){
      guess.color = 'yellow-overlay'
      checkWordle = checkWordle.replace(guess.letter, '')
    }
  })

  rowTiles.forEach((tile, index) => {
    
    setTimeout(() => {
      tile.classList.add('flip')
      tile.classList.add(guess[index].color)
      addColorToKey(guess[index].letter, guess[index].color)
    }, 500 * index)

  })
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
    helpEl.innerText = helpText + "\n" + "\n"
    const audio = new Audio ("./auds/stats.mp3");
    audio.play()
 //   helpEl.requestFullscreen();
  });

  // When the user clicks on <span> (x), close the modal
  span.addEventListener("click", function () {
    modal.style.display = "none";
  });

  // When the user clicks anywhere outside of the modal, close it
  window.addEventListener("click", function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  });
}

function updateStatsModal(){
  const currentStreak = window.localStorage.getItem("currentStreakEl");
  const maxStreak = window.localStorage.getItem("maxStreakEl");
  const totalWins = window.localStorage.getItem("totalWinsEl");
  const totalGames = window.localStorage.getItem("totalGamesEl");
  const audio = new Audio ("./auds/stats.mp3");
  audio.play()

  document.getElementById('total-played').textContent = totalGames;
  document.getElementById('total-wins').textContent = totalWins;
  document.getElementById('current-streak').textContent = currentStreak;
  document.getElementById('max-streak').textContent = maxStreak;

  const winPct = Math.round((totalWins / totalGames) * 100) || 0
  document.getElementById('win-pct').textContent = winPct;

}

function initStatsModal() {
  const modal = document.getElementById("stats-modal");
  // Get the button that opens the stats modal
  const btn = document.getElementById("stats");

  // Get the <span> element that closes the modal
  const span = document.getElementById("close-stats");
  const delEl = document.getElementById("delete-stats");
  const delBodyEl = document.getElementById("delete-body");
  const delModal = document.getElementById("delete-modal");
  const closeDel = document.getElementById("close-delete");
  const yesEl = document.getElementById("yes");
  const noEl = document.getElementById("no");

  // Get the element that shows results
  const resultsEl = document.querySelector(".results")
  const resultsButton = document.getElementById("stats-info");


  // When the user clicks on the button, open the modal
  btn.addEventListener("click", function () {
    console.log("just clicked on stats button classlist = " + btn.classList)
    updateStatsModal();
    modal.style.display = "block";
    helpEl = document.getElementById("stats-modal")
 //   helpEl.requestFullscreen();
  });

  // When the user clicks on <span> (x), close the modal
  span.addEventListener("click", function () {
    modal.style.display = "none";
    resultsEl.style.display = "none";
  });


    // When the user clicks on delete stats <span> (x), display confirmation box
    delEl.addEventListener("click", function () {
      delModal.style.display = "block";
    });


      // When the user clicks on <span> (x), close the delete modal
    closeDel.addEventListener("click", function () {
      delModal.style.display = "none";
    });

      // When the user clicks on Yes, clear history via localstorage clear the results tray and close delete modal
      yesEl.addEventListener("click", function () {
        localStorage.removeItem("resultsEl")
        localStorage.removeItem("currentStreakEl")
        localStorage.removeItem("maxStreakEl")
        localStorage.removeItem("totalWinsEl")
        localStorage.removeItem("totalGamesEl")
        const resultsTrayEl = document.getElementById("results-tray");
        resultsTrayEl.innerHTML = ""
        delModal.style.display = "none";
        resultsArray = [];
      });

      // When the user clicks on No, close delete modal
      noEl.addEventListener("click", function () {
        delModal.style.display = "none";
      });
      

  

    // When the user clicks on stats info (i) show results
    resultsButton.addEventListener("click", function () {
      console.log("just clicked on results button")
      resultsEl.style.display = "block";
      buildResults();
    });

  // When the user clicks anywhere outside of the modal, close it
  window.addEventListener("click", function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
      resultsEl.style.display = "none";
    }
  });
}

function buildResults(){
  console.log("entered build results")
  const resultsTrayEl = document.getElementById("results-tray")
  // LOOP THRU RESULTS IN REVERSE ORDER

  let resultItemEl = document.createElement('div')
//      resultItemEl.innerText = "here are where results will go"
//  resultsTrayEl.appendChild(resultItemEl)

  let resultsArrayTemp = JSON.parse(window.localStorage.getItem('resultsEl'));
  if (resultsArrayTemp){
      resultsArray = JSON.parse(window.localStorage.getItem('resultsEl'));
      console.log("resultsArray =  " + resultsArray);
      console.log("results array date = " + resultsArray[resultsArray.length-1].date)
      date = new Date(resultsArray[resultsArray.length-1].date);
      const year = date.getFullYear();
      const hours = date.getHours();
      console.log("after getfullyear function year = " + year + " hours = " + hours)
      resultsTrayEl.innerHTML = ""
      let resultItemEl = document.createElement('div')
      resultItemEl.innerText = "Date"
      resultItemEl.style.fontWeight = "bold"
      resultsTrayEl.appendChild(resultItemEl)
      resultItemEl = document.createElement('div')
      resultItemEl.innerText = "Wordle"
      resultItemEl.style.fontWeight = "bold"
      resultsTrayEl.appendChild(resultItemEl)
      resultItemEl = document.createElement('div')
      resultItemEl.innerText = "#"
      resultItemEl.style.fontWeight = "bold"
      resultsTrayEl.appendChild(resultItemEl)

      for (i=resultsArray.length - 1; i>-1; i--){
        let resultItemEl = document.createElement('div')
        let date = new Date(resultsArray[i].date);
        let year = date.getFullYear();
        let yy = year.toString().slice(2);
        let month = date.getMonth() + 1;
        let day = date.getDate();
        resultItemEl.innerText = month + "/" + day + "/" + yy
        if (resultsArray[i].guesses === 10){
          resultItemEl.style.color = "red";  
        }
        let screenWidth = window.innerWidth;
        resultsTrayEl.appendChild(resultItemEl)
        resultItemEl = document.createElement('div')
        resultItemEl.innerText = resultsArray[i].wordle
        if (resultsArray[i].wordle.length > maxLettersNarrowScreen){
          if (screenWidth < 400){
             resultItemEl.innerText = resultsArray[i].wordle.slice(0, maxLettersNarrowScreen - 1) + ".."
          }
        }
        if (resultsArray[i].guesses === 10){
          resultItemEl.style.color = "red";  
        }
        resultsTrayEl.appendChild(resultItemEl)
        resultItemEl = document.createElement('div')
        resultItemEl.innerText = resultsArray[i].guesses
        if (resultsArray[i].guesses === 10){
          resultItemEl.innerText = "-"  
          resultItemEl.style.color = "red";
        }
        resultsTrayEl.appendChild(resultItemEl)
      }
      // write out buffer for padding
      resultItemEl = document.createElement('div')
      resultItemEl.innerText = "a"
      resultItemEl.style.color = "transparent"
      resultsTrayEl.appendChild(resultItemEl)
      resultItemEl = document.createElement('div')
      resultItemEl.innerText = "a"
      resultItemEl.style.color = "transparent"
      resultsTrayEl.appendChild(resultItemEl)
      resultItemEl = document.createElement('div')
      resultItemEl.innerText = "a"
      resultItemEl.style.color = "transparent"
      resultsTrayEl.appendChild(resultItemEl)

  }

}

function updateCategoriesModal(){
 /* const currentStreak = window.localStorage.getItem("currentStreakEL");
  const totalWins = window.localStorage.getItem("totalWinsEL");
  const totalGames = window.localStorage.getItem("totalGamesEL");

  document.getElementById('total-played').textContent = totalGames;
  document.getElementById('total-wins').textContent = totalWins;
  document.getElementById('current-streak').textContent = currentStreak;

  const winPct = Math.round((totalWins / totalGames) * 100) || 0
  document.getElementById('win-pct').textContent = winPct;
*/

let categories = document.querySelectorAll(".category")
for (i=0; i<categories.length; i++){
  if (protoWordsArray[i].sel){
    categories[i].style.color = "black";
    categories[i].style.fontWeight = "bold";

  } else {
     categories[i].style.color = "grey";
     categories[i].style.fontWeight = "normal";

  }
  if (protoWordsArray[i].parent==="parent"){
    categories[i].style.color = "green";
    categories[i].style.fontWeight = "normal";
    calcTotalParentItems(protoWordsArray[i].cat, i)
  }
 }
}

function calcTotalParentItems(parentCat, i){
  console.log("total all of the children of " + parentCat)
  let childClass = (".child" + parentCat)
  const childEls = document.querySelectorAll(childClass)
  console.log("lenght of children = " + childEls.length)
  let total = 0; 
  for (j=0; j<childEls.length; j++){
    if(protoWordsArray[i+j+1].sel){
  //    total = total + protoWordsArray[i+j+1].items.length;
      total = total + protoWordsArray[i+j+1].numOfItems;
      console.log("total = " + total)
    }
  }
  const category = document.querySelector("."+parentCat)
  category.innerText = `${protoWordsArray[i].cat} ${total}...`;
  if(total>0){
    category.innerText = `${protoWordsArray[i].cat} ${total}...`;
    category.style.fontWeight = "bold";
  } else {
    category.innerText = `${protoWordsArray[i].cat}...`;
    category.style.fontWeight = "normal";
  }
}

function initCategoriesModal() {
  // Look for category preferences in localstorage
  // if found apply those values to the protoarray
  console.log("add category local storage get logic")
  let categoryPreferencesTemp = JSON.parse(window.localStorage.getItem('categoryPreferencesEl'));

  if (categoryPreferencesTemp) {
    categoryPreferences = JSON.parse(window.localStorage.getItem('categoryPreferencesEL'))
    console.log("prefernces = " + categoryPreferences)
    for (i=0; i<protoWordsArray.length; i++){
      protoWordsArray[i].sel = categoryPreferences[i]
      if (protoWordsArray[i].parent === "parent"){
        protoWordsArray[i].sel = false; 
      }
    }
    
}
  const modal = document.getElementById("categories-modal");
  // Get the button that opens the categories modal
  const btn = document.getElementById("categories");

  // Get the <span> element that closes the modal
  const span = document.getElementById("close-categories");


  let categoriesContainerEl = document.getElementById("categories-body")
  categoriesContainerEl.innerHTML = ""

  for (i=0; i<protoWordsArray.length; i++){
    let category = document.createElement("div");
  //  category.innerText = `${protoWordsArray[i].cat} ${protoWordsArray[i].items.length}`;
    category.innerText = `${protoWordsArray[i].cat} ${protoWordsArray[i].numOfItems}`;
    if (protoWordsArray[i].parent === "parent"){
      category.innerText = protoWordsArray[i].cat + "...";
    }

    category.classList.add("category")
    // Add class of parent or child
    if (protoWordsArray[i].parent === "parent"){
      category.classList.add("parent")
      category.classList.add(protoWordsArray[i].cat)
      console.log("parent")
    }
    if (protoWordsArray[i].parent === "Music"){
      category.classList.add("child")
      category.classList.add("child")
      category.classList.add("childMusic")
      console.log("child")
    }
    if (protoWordsArray[i].parent === "Sports"){
      category.classList.add("child")
      category.classList.add("childSports")
      console.log("child")
    }    
    category.id = i;
    categoriesContainerEl.appendChild(category);
    category.addEventListener("click", ({ target }) => {
       // window.alert(category.innerText + category.id)
        protoWordsArray[category.id].sel = !(protoWordsArray[category.id].sel)
        if (protoWordsArray[category.id].sel){
          const audio = new Audio ("./auds/shortgood.mp3");
          audio.play()
        } 
        else {
          const audio = new Audio ("./auds/pop39222.mp3");
          audio.play()     
        }
        if (protoWordsArray[category.id].parent==="parent"){
          let children = document.querySelectorAll(".child"+protoWordsArray[category.id].cat)
          console.log("category = " + protoWordsArray[category.id].cat)
          if (protoWordsArray[category.id].sel){
            for (l=0; l<children.length; l++){
              children[l].style.display = "block"
            }
          } else {
            for (l=0; l<children.length; l++){
              children[l].style.display = "none"
            }
          } 
        }

        updateCategoriesModal()
      });
  }

  // When the user clicks on the button, open the modal
 /* console.log("right before categores button add event click listener")
  btn.addEventListener("click", function () {
    console.log("just clicked on categories button")
    updateCategoriesModal();
    const audio = new Audio ("./auds/stats.mp3");
    audio.play()
    modal.style.display = "block";
    helpEl = document.getElementById("categories-modal")
   });*/

  // When the user clicks on <span> (x), close the modal
  span.addEventListener("click", function () {
    modal.style.display = "none";
    preserveCategories();

  });

  // When the user clicks anywhere outside of the modal, close it
  window.addEventListener("click", function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  });
}

function initPeriodicBtn(){
    // When the user clicks on the button, open the modal
//    const modal = document.getElementById("categories-modal");
    const btn = document.getElementById("table");
    console.log("right before categores button add event click listener")
    btn.addEventListener("click", function () {
      console.log("just clicked on table button")
   //   updateCategoriesModal();
      const audio = new Audio ("./auds/stats.mp3");
      audio.play()
   //   modal.style.display = "block";
  //    helpEl = document.getElementById("categories-modal")
     });
  
}

function preserveCategories(){
  console.log("add category local storage update logic in preserve function")
    for (i=0; i<protoWordsArray.length; i++){
      console.log(protoWordsArray[i].sel)
      console.log(categoryPreferences[i])
      categoryPreferences[i] = protoWordsArray[i].sel
    }
    window.localStorage.setItem('categoryPreferencesEl', JSON.stringify(categoryPreferences));
}





function revealLetter(){
  console.log ("entered reveal letter function")
 // const currentWordArr = getCurrentWordArr()

  const numberOfGuessedWords = guessedWords.length;
  currentWordArr = guessedWords[numberOfGuessedWords - 1]
  let letter = wordle[revealLetterNum]
  console.log('current array = ' + currentWordArr)
  console.log("numofLetters = " + numofLetters )
    currentWordArr[revealLetterNum] = letter;
    //const availableSpaceEl = document.getElementById(revealLetterNum)
  //  availableSpaceEl.textContent = letter;
    const availableSpaceEl = document.getElementById(revealLetterNum+1)
    availableSpaceEl.textContent = letter;
    revealLetterNum++

}

function initLook(){
  return;
      // Select background image based on portrait or landscape mode but first check for default
      const body = document.getElementsByTagName('body')[0];
      let backgroundImage  = JSON.parse(window.localStorage.getItem('backgroundEL'));
      console.log("background from localstorage = " + backgroundImage)
  //    window.localStorage.setItem('backgroundEl', JSON.stringify(resultsArray));
      if (backgroundImage === "Random" || !backgroundImage){
        if (window.innerHeight > window.innerWidth){
          let randomImg = Math.floor(Math.random()*backgroundImagesPortrait.length)
  //        const body = document.getElementsByTagName('body')[0];
          body.style.backgroundImage = "url(" + backgroundImagesPortrait[randomImg] + ")";
        } else {  
          let randomImg = Math.floor(Math.random()*backgroundImagesLandscape.length)
    //      const body = document.getElementsByTagName('body')[0];
          body.style.backgroundImage = "url(" + backgroundImagesLandscape[randomImg] + ")";
      }
    } else {
      body.style.backgroundImage = "url(" + backgroundImage + ")";
    }


      initAudio()
    }



function initAudio(){
let icon = document.querySelector(".fa-volume-up");

icon.onclick = function (){
    music();
    console.log("classlist when clicked = " + icon.classList)
    if(icon.classList.contains("fa-volume-up")){
        icon.classList.replace("fa-volume-up", "fa-volume-off");
    }
    else{
        icon.classList.replace("fa-volume-off", "fa-volume-up");
    }
}
}


function music(){
  console.log("entered music toggle")
  sound = !sound;
  if (sound===false){
    if (soundPlayer){
      soundPlayer.pause();
    }
  }
  if (sound===true){
    if (soundPlayer){
      soundPlayer.play();
    }
  }
}


function playMusic(){
  if (sound){
  soundPlayer.play();
  }
}


function initPreferencesModal() {


  const modal = document.getElementById("preferences-modal");
  // Get the button that opens the preferences modal
  const btn = document.getElementById("preferences");
  const rndLandscapeEl = document.getElementById("random-bg-container");
  const rndPortraitEl = document.getElementById("portrait-random-bg-container");
  maxCharEl = document.getElementById("max-char")
  maxCharacters = window.localStorage.getItem("maxCharsEL") || 35;
  maxCharEl.value = maxCharacters;

  // Get the <span> element that closes the modal 
  const span = document.getElementById("close-preferences");


  const preferencesContainerEl = document.getElementById("preferences-body")
  const portraitPreferencesContainerEl = document.getElementById("portrait-preferences-body")

  const textAreaEl = document.querySelector("textarea");
 // preferencesContainerEl.style.display="none"
  portraitPreferencesContainerEl.style.display="none"

  // When the user clicks on the button, open the modal
  btn.addEventListener("click", function () {
    console.log("just clicked on preferences button")
    const audio = new Audio ("./auds/stats.mp3");
    audio.play()
    modal.style.display = "block";
    helpEl = document.getElementById("preferences-modal")
  });

  // When the user clicks on <span> (x), close the modal
  span.addEventListener("click", function () {
    modal.style.display = "none";
    maxCharEl = document.getElementById("max-char")
    console.log("max-char value = " + maxCharEl.value + " max-char is " + typeof(maxCharEl.value))
    maxCharacters = Number(maxCharEl.value);
    if (maxCharacters < 5){
      maxCharacters = 5;
      maxCharEl.value = 5;
    }
    initCategories();
    initCategoriesModal();
    console.log("maxCharacters converted to number = " + maxCharacters)
    window.localStorage.setItem("maxCharsEl", Number(maxCharacters));
  });

  // When the user clicks anywhere outside of the modal, close it
  window.addEventListener("click", function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  });

    // When the user clicks anywhere outside of the modal, close it
    textAreaEl.addEventListener("keydown", function (event) {
      var key = event.keyCode;
      // If the user has pressed enter
      if (key === 13) {
        console.log("enter key pressed " + textAreaEl.value)
        const body = document.getElementsByTagName('body')[0];
        body.style.backgroundImage = "url(" + textAreaEl.value + ")"
        window.localStorage.setItem('backgroundEl', JSON.stringify(textAreaEl.value));
      }
    });


    // When the user clicks on the random landscpape - randomly change the background
    rndLandscapeEl.addEventListener("click", function (event) {
      console.log("add code to randomly change background")
      let randomImg = Math.floor(Math.random()*backgroundImagesLandscape.length)
      const body = document.getElementsByTagName('body')[0];
      body.style.backgroundImage = "url(" + backgroundImagesLandscape[randomImg] + ")"
      window.localStorage.setItem('backgroundEl', JSON.stringify("Random"));
    });

        // When the user clicks on the random portrait - randomly change the background
        rndPortraitEl.addEventListener("click", function (event) {
          console.log("add code to randomly change background")
          let randomImg = Math.floor(Math.random()*backgroundImagesLandscape.length)
          const body = document.getElementsByTagName('body')[0];
          body.style.backgroundImage = "url(" + backgroundImagesLandscape[randomImg] + ")"
          window.localStorage.setItem('backgroundEl', JSON.stringify("Random"));
        });
    


    const bgs = document.querySelectorAll(".maxi-img");
    for (let i = 0; i < bgs.length; i++) {
      bgs[i].addEventListener("click", ({ target }) => {

        let bg = target.getAttribute("src");
        const body = document.getElementsByTagName('body')[0];
        body.style.backgroundImage = "url(" + bg + ")"
        window.localStorage.setItem('backgroundEl', JSON.stringify(bg));

      });
      }


      initBgAudios();
      initChameleon();
    }




    
function initBgAudios() {

  const audioContainerEl = document.getElementById("audios-body")
  let bgAudio = document.createElement("div");
 // bgAudio.innerText = "Random"
//  bgAudio.style.color = "gray";
//  audioContainerEl.appendChild(bgAudio);
  for (i=0; i<audios.length; i++){
    let bgAudio = document.createElement("div");
    bgAudio.innerText = audios[i].name;
    
    bgAudio.id = i;
    bgAudio.style.color = "gray";
    bgAudio.classList.add("audio")
    audioContainerEl.appendChild(bgAudio);  


    bgAudio.addEventListener("click", ({ target }) => {
      const toggleAudios = document.querySelectorAll(".audio");
      for (i=0; i<audios.length; i++){
        toggleAudios[i].style.color = "gray"
        toggleAudios[i].style.fontWeight = "normal"
      }
      soundPlayer.setAttribute('src',audios[target.id].link); //change the source
      bgAudio.style.color = 'black';
      bgAudio.style.fontWeight = 'bold';
      let audioName = audios[target.id].name
      soundPlayer.volume = audios[target.id].vol
      playMusic()
          });
  }
}


function initChameleon() {

  const chameleonEl = document.getElementById("chameleon")
    console.log("entered initchameleon")

    chameleonEl.addEventListener("click", ({ target }) => {
      console.log("clicked initchameleon")
        chameleon = !chameleon;
        if (chameleon){
          chameleonEl.style.color = 'black';
          chameleonEl.style.fontWeight = 'bold';
          const audio = new Audio ("./auds/shortgood.mp3");
          audio.play()
        } else {
          chameleonEl.style.color = 'gray'; 
          chameleonEl.style.fontWeight = 'normal';
          const audio = new Audio ("./auds/pop39222.mp3");
          audio.play() 
        }
          });
  }



  // DANCE TILES FROM WEBDEV SIMPLIFIED
function danceTiles(tiles, firstLetterId){

  tiles.forEach((tile, index) => {
    setTimeout(() => {
    const letterId = firstLetterId + index;
    const letterEl = document.getElementById(letterId);
    letterEl.classList.add("dance")
    letterEl.addEventListener(
      "animationend",
      () => {
        letterEl.classList.remove("dance")
        console.log("removed dance class")
      },
      {once: true}
      )
    }, index * DANCE_ANIMATION_DURATION / tiles.length)
  })
}

function setColors(){
  
  let r = document.querySelector(':root');
  if (chameleon){
      let colorNum1 = Math.floor(Math.random()*280);
      let colorNum2 = Math.floor(Math.random()*299);
      // Make sure color hues are sufficiently different
      if (colorNum2 > colorNum1){
        if ((colorNum2-colorNum1) < 60){
          colorNum2 = colorNum2 + 60;
        }
      } else {
        if ((colorNum1-colorNum2) < 60){
          colorNum1 = colorNum1 + 60;
        }
      }
      let randomColor = "";
  
      randomColor =  "hsl(" + colorNum1 + ", 60%, 55%)"
      r.style.setProperty('--correctLetter', randomColor);
  
      randomColor =  "hsl(" + colorNum2 + ", 60%, 35%)"
      r.style.setProperty('--correctLetterInPlace', randomColor);
    } else { // Set default Wordle colors 
      r.style.setProperty('--correctLetter', 'rgb(181, 159, 59)');
      r.style.setProperty('--correctLetterInPlace', 'rgb(83, 141, 78)');
    }
}

function initCategories(){
  // PLACE THE NUMBER OF ITEMS FOR EACH CATEGORY THAT MEET OR EXCEED THE MAX CHARACTERS ALLOWED
  console.log("Max characters = " + maxCharacters)
  // LOOP THRU EACH CATEGORY
  for(i=0; i<protoWordsArray.length; i++){
    let workcount = 0;
    for(j=0; j<protoWordsArray[i].items.length; j++){
      if ((protoWordsArray[i].items[j].length) > (maxCharacters)){
         
      }
      else {
        workcount++;
      }
    }
    protoWordsArray[i].numOfItems = workcount;
    console.log("items for array " + protoWordsArray[i].cat + " equals " + workcount)
  } 


}

function showPeriodicTable(elNum, elSym){
  elNum = 'no'+elNum;
  console.log("entered showPeriodic el num = " + elNum)
  $("#wordle-container").toggle();
  $(".periodic-table").toggle();

  $('.' + elNum).css({ opacity: 1 });
  let categoryColorSelector =   $('.' + elNum).parent().attr('class').replace(/element /, '');
  $('.' + elNum).parent().addClass("hoverable");



  const groupLabelColor = 'linear-gradient(65deg, ' + colors[categoryColorSelector] + ', antiquewhite';
 




  const elementSymbol = elSym;
  const elementName = elementInfo[elementSymbol]['name']
  const elementNum = elementInfo[elementSymbol]['num']
// let elementCategory = elementName + " is a(n) " +
 elementInfo[elementSymbol]['category'] +  " Discovered by " +   elementInfo[elementSymbol]['discoverer'] + " in " + elementInfo[elementSymbol]['discdate'] + ". " + elementInfo[elementSymbol]['intfact']


 // Added June 25
 let isa = ", is a "
      if (elementInfo[elementSymbol]['category'].charAt(0) === "A"){
        isa = ", is an ";
      }
      let elementCategory = elementName + " #" + elementNum + isa +  elementInfo[elementSymbol]['category'] +  " discovered by " +   elementInfo[elementSymbol]['discoverer'] + " in " + elementInfo[elementSymbol]['discdate'] + ". " + elementInfo[elementSymbol]['intfact']
 


 // End of June 25 add





   $('.group-label').text(elementCategory)
// $('.group-label').text("test")
  // Make the background of the category label box the color of the hovered category
// $('.group-label').css('background-color', groupLabelColor)
$('.group-label').css('background', groupLabelColor)
$('.group-label').css('font-size', '14px')








} 

function fillPeriodicTable(elNum, elSym){
  elNum = 'no'+elNum;
  console.log("entered fillPeriodic el num = " + elNum)

  $('.' + elNum).css({ opacity: 1 });
  let categoryColorSelector =   $('.' + elNum).parent().attr('class').replace(/element /, '');
  $('.' + elNum).parent().addClass("hoverable");

  const elementSymbol = elSym;
  const elementName = elementInfo[elementSymbol]['name']
  const elementCategory = elementName + " is a(n) " +
   elementInfo[elementSymbol]['category'] +  " Discovered by " +   elementInfo[elementSymbol]['discoverer'] + " in " + elementInfo[elementSymbol]['discdate']
 


} 


function initViewHelpModal() {
  const modal = document.getElementById("view-help-modal");
  const span = document.getElementById("close-view-help");

    modal.style.display = "block";
    helpEl = document.getElementById("view-help")
    helpEl.innerHTML = viewHelpText
 
  // When the user clicks on <span> (x), close the modal
  span.addEventListener("click", function () {
  modal.classList.toggle("fade-out")
  setTimeout(function(){
    modal.style.display = "none";
    modal.classList.toggle("fade-out")
   }, 2500);

  });


}



// June 23  experimenting with doubletap detection
document.body.addEventListener('touchend', detectDoubleTapClosure(), { passive: false });
function detectDoubleTapClosure() {
  let lastTap = 0;
  let timeout;
  return function detectDoubleTap(event) {
    const curTime = new Date().getTime();
    const tapLen = curTime - lastTap;
    if (tapLen < 500 && tapLen > 0) {
      console.log('Double tapped!');
      event.preventDefault();
    } else {
      timeout = setTimeout(() => {
        clearTimeout(timeout);
      }, 500);
    }
    lastTap = curTime;
  };
}


// June 24 2023 try adding swipe logic to table elements
