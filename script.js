//Meat - 400g per person  + than 6 hours = 600g per person
//Beer - 1200 ml per persom  + than 6 hours = 2000 ml per person
//Soda/Water - 1000 ml per person  + than 6 hours = 1500 ml per person

//Children are worth 0.5

const inputAdults = document.getElementById("adults");
const inputChildren = document.getElementById("children");
const inputDuration = document.getElementById("duration");

const result = document.getElementById("result");

function meatPP(duration){
    if(duration >= 6){
        return 650;
    }
    else{
        return 400;
    }
}

function beerPP(duration){
    if(duration >= 6){
        return 2000;
    }
    else{
        return 1200;
    }
}

function drinkPP(duration){
    if(duration >= 6) {
        return 1500;
    }
    else{
        return 1000;
    }
}

function calculate(){
    console.log("Calculating...")

    const adults = inputAdults.value;
    const children = inputChildren.value;
    const duration = inputDuration.value;

    const totalMeat = meatPP(duration) * adults + (meatPP(duration) / 2 * children);
    const totalBeer = beerPP(duration) * adults;
    const totalDrinks = drinkPP(duration) * adults + (drinkPP(duration) / 2 * children);


    result.innerHTML = `<h2 class="result-info">You will need:</h2>`

    result.innerHTML +=     
    `<div class="block-result">
       <p class="resultP">${totalMeat/1000} Kg of Meat</p>
    </div>
    `
    
    result.innerHTML += `
    <div class="block-result">
        <p class="resultP">${Math.ceil(totalBeer/355)} cans of Beer</p>
    </div>
    `

    result.innerHTML += `
    <div class="block-result">
        <p class="resultP">${Math.ceil(totalDrinks/2000)} bottles of Soda/Water</p>
    </div>
    `
    result.style.boxSizing = 'border-box'
    result.style.marginLeft = '55%'
    result.style.marginTop = '30px'
    result.style.backgroundColor = '#FFF'
    result.style.width = '500px'
    result.style.height = '230px'
    result.style.borderRadius = '3%'   
    result.style.padding = '10px'
    result.style.fontFamily = '"Itim", cursive'
}
