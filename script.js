// VARIABLES
const pageNumber = document.getElementById("page-number");
const price = document.getElementById("price-number");
const slider = document.getElementById("slider-bar");
const checkboxToggle = document.getElementById("checkbox");
let step = document.querySelector("[step]").step;

// FUNCTIONS
function getSliderValues() {

    let sliderValue = slider.value;

    switch (sliderValue) {
        case "1":   
            pageNumber.innerText = "10K ";
            price.innerText = "$8.00";
            break;
        case "2":
            pageNumber.innerText = "50K ";
            price.innerText = "$12.00";
            break;
        case "3":
            pageNumber.innerText = "100K ";
            price.innerText = "$16.00";
            break;
        case "4":
            pageNumber.innerText = "500K ";
            price.innerText = "$24.00";
            break;
        case "5":
            pageNumber.innerText = "1M ";
            price.innerText = "$36.00";
            break;
        default:
            pageNumber.innerText = "100K ";
            price.innerText = "$16.00";
            break;
    }

    // If discount toggle is active:
    if (checkboxToggle.checked) {
        let priceNum = Number(price.innerText.match(/[1-9]/g).join(''));
        let discountedPrice = priceNum - ((priceNum / 100) * 25);
        console.log(priceNum, discountedPrice)
        price.innerText = '$' + discountedPrice + '.00';
    }
}


function discount() {
    let sliderValue = slider.value;
    if (checkboxToggle.checked) {
        switch (sliderValue) {
        case "1":   
            price.innerText = "$6.00";
            break;
        case "2":
            price.innerText = "$9.00";
            break;
        case "3":
            price.innerText = "$12.00";
            break;
        case "4":
            price.innerText = "$18.00";
            break;
        case "5":
            price.innerText = "$27.00";
            break;
        default:
            price.innerText = "$12.00";
            break;
        }
    } else {
        getSliderValues();
    }  
}

// EVENT LISTENERS
slider.addEventListener("change", getSliderValues);
checkboxToggle.addEventListener("click", discount);