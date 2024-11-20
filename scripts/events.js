const showContent = e => {// e or event both is same

 console.log(e.target.textContent) ;

}
document.querySelector(".porcupine").onclick = showContent;

const tagContent = e =>  {
    console.log(e.target.tagName)
}
document.querySelector(".panther").onclick = tagContent;

window.onclick = event => {
    console.log(event.target)
}
   
/*document.querySelector(".penguin").onclick = (event) => console.log(event.target.textContent.toUpperCase()); //shortend format

window.onclick = event => {
    console.log(event.target.textContent.toUpperCase());
}*/

const addListen = () => {
    for (let i=0 ; i < 3; i++) {
        console.log(`I LOVE PELICANS`)
    }  
}

document.querySelector(".pelican").addEventListener("click" , addListen); // if the argument is not passed then no need to create anonyms fuction

const birdLove = (animal) => {
    console.log(`${animal} is a pretty boy.`)
}

document.querySelector(".parrot").addEventListener("click",(event) => birdLove(event.target.textContent));//(event.target.textContent)you can directly give"parrot"
document.querySelector(".peacock").addEventListener("click",(event) => birdLove(event.target.textContent));

const notAntEater = () => {
    console.log("I am NOT an anteater");
}

const armadillo = () => {
    console.log("I am NOT an armadillo")
}

//document.querySelector(".pangolin").onclick = notAntEater;
//document.querySelector(".pangolin").onclick = armadillo; //onclick is an attribute it only have one function you cannot declared more than one time for same item

document.querySelector(".pangolin").addEventListener("click",notAntEater);
document.querySelector(".pangolin").addEventListener("click",armadillo);

/*let x = document.querySelectorAll(".tab")
console.log(x)
let tabs = Array.from(document.querySelectorAll(".tab"));//creates array and queryselectorall is used if class name is used for more than one time
console.log(tabs);

tabs.forEach(item => item.addEventListener("click", () => alert(item.textContent)));*/

let animals = Array.from(document.querySelectorAll(".tab"));

const display = (animal) => {

console.log((animal.toLowerCase() !== "panther") ? `${animal} is the best` : `${animal} is the jungle assasin`);
 
/*if(animal.toLowerCase() !== "panther"){
    console.log(`${animal} is the best`);
 }else {
    console.log(`${animal} is the jungle assasin`);
 }*/
}

animals.forEach(item => item.addEventListener("click", () => display(item.textContent) ));

document.querySelector("footer").addEventListener("click", () => console.log("Footer"),true);

document.querySelector("footer p").addEventListener("click", () => console.log("Paragraph"), true);

document.querySelector("footer p span").addEventListener("click", () => console.log("Span"));

document.querySelector(".porcupine").classList.add("hello");//add new class

const setActive = (clickedTab) => {
    animals.forEach(tab => tab.classList.remove("active"));
    clickedTab.classList.add("active");
    document.querySelector(".title").textContent = clickedTab.textContent;
}

animals.forEach(tab => tab.addEventListener("click", () => setActive(tab)));

document.querySelector(".pangolin").addEventListener("mouseenter", () => alert("hover"));

let animalContent = Array.from(document.querySelectorAll(".content"));

const findContent = (classToMatch) => {
    animalContent.forEach(contentDiv => {
        if (contentDiv.classList.contains(classToMatch)) {
            contentDiv.classList.add("featured");
        }
    })
}

animals.forEach(tab => tab.addEventListener("mouseenter", () => findContent(tab.textContent.toLowerCase())));

animals.forEach(tab => tab.addEventListener("mouseleave", () => 
    animalContent.forEach(contentDiv => contentDiv.classList.remove("featured"))));

let searchInput = document.querySelector("#search");



const findTab = () => {
    animals.forEach(tab => {
        if (tab.textContent.toLowerCase().includes(searchInput.value)) {
            tab.classList.add('active');
        } else {
            tab.classList.remove('active');
        }
    })
}

searchInput.addEventListener("input", findTab);//gives value while user entering the input
//searchInput.addEventListener("change", findTab) // gives value only when the mouse leaves the field

/****************************************OBJECT***************************************************************** */

function Country(name , capitalCity , language , population, sports) { //constructor function if you have more than one object than this to be used
    this.name = name,
    this.capitalCity = capitalCity,
    this.language=language,
    this.population = population,
    this.sports = sports
    this.description = () => console.log(`${this.name}'s capital is ${this.capitalCity}`);
}

let australia = new Country("Australia", "Canberra" , "English",250000 ,  ["Cricket","Aussie Rules","Tennis"]);
let sweden = new Country("Sweden" , "Stockholm", "Svenska" , 11000000 , ["Hockey" , "Brandboll" , "Bandy"]);
let pakistan = new Country("Paksitan", "Islamabad", "Urdu", 24100000 , ["Hockey", "cricket"]);

console.log(`The capital of ${sweden.name} is ${sweden.capitalCity}`);
console.log(`The sports of ${australia.name} is ${australia.sports[0]}`);
console.log(`There are ${australia.population} people living in ${australia.name}`);

let countries = [sweden , australia , pakistan];
countries.forEach(country => country.description());

