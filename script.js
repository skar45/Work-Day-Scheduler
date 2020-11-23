
function pressed(event){
    let g = event.target.parentElement.children[1].value
    localStorage.setItem(event.target.parentElement.id,g)
}

document.querySelector("#currentDay").textContent = moment().format('MMM Do YY');

for (item in document.querySelector(".container").children){
    if(item == "item"){
        break;
    }
    console.log(item);
    if (moment().hours()>document.querySelector(".container").children[item].id){
      document.querySelector(".container").children[item].classList.add("past");
    } else if(moment().hours()==document.querySelector(".container").children[item].id) {
      document.querySelector(".container").children[item].classList.add("present");
    } else {
      document.querySelector(".container").children[item].classList.add("future");
    }
    document.querySelector(".container").children[item].children[2].addEventListener("click",pressed);
    document.querySelector(".container").children[item].children[1].value = localStorage.getItem(document.querySelector(".container").children[item].id);

}
