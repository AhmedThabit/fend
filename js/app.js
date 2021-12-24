/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 *
*/


const sectionlists = document.querySelectorAll('section');
let n = sectionlists.length;
const menu= document.getElementById('navbar__list');
/**
 * End Global Variables
 * Start Helper Functions
 *
*/

function createNavigationItemHTML(id, name){
    const itemHTML = `<a class ="menu__link" href="#${id}">${name}</a>`;
    return itemHTML;
}


/**
 * End Helper Functions
 * Begin Main Functions
 *
*/

// build the nav
function buildNavigation(){

    for (let i=0; i < n; i++){
        const fullMenuItem = document.createElement('li');
        const sectionId = sectionlists[i].getAttribute('id');
        const sectionName = sectionlists[i].getAttribute('data-nav');

        fullMenuItem.innerHTML = createNavigationItemHTML(sectionId, sectionName);
        //append
        menu.appendChild(newMenuItem);
    }
}

//view section
function sectinInView(element){
    let sPos= element.getBoundingClientRect();
return (sPos.top>=0);
}


// Add class 'active' to section when near top of viewport
function addClassActive(){
    for (let i=0; i < n; i++){
        if (sectinInView(sectionlists[i])){
            sectionlists[i].classList.add("your-active-class");
        }else{
            sectionlists[i].classList.remove("your-active-class");
        }
    }
}



/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu
buildNavigation();

// Set sections as active
document.addEventListener('scroll', addClassActive);
