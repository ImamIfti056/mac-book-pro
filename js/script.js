// selecting elements
const memoryCost = document.getElementById('memory-cost');
const storageCost = document.getElementById('storage-cost');
const deliveryCost = document.getElementById('delivery-cost');
const price = document.getElementById('price');
const totalPrice = document.getElementById('total-price');
const pomoPrice = document.getElementById('pomo-price');
const pomoInput = document.getElementById('pomo-input');


function memory(GB){
    if(GB==8){
        memoryCost.innerText = "0";
    } else{
        memoryCost.innerText = "180";
    }

    getTotalPrice();
}

function storage(GB){
    if(GB==256){
        storageCost.innerText = "0";
    } else if(GB==512){
        storageCost.innerText = "100";
    } else{
        storageCost.innerText = "180";
    }

    getTotalPrice();
}

function delivery(type){
    if(type=="free"){
        deliveryCost.innerText = "0";
    } else{
        deliveryCost.innerText = "20";
    }

    getTotalPrice();
}

function getTotalPrice(){
    totalPrice.innerText = parseInt(price.innerText) + parseInt(memoryCost.innerText) + parseInt(storageCost.innerText) + parseInt(deliveryCost.innerText);
    // update pomo price
    pomoPrice.innerText = parseInt(totalPrice.innerText);
}

// applying pomo code
document.getElementById('button-pomo').addEventListener('click', function(){
    if(pomoInput.value == "stevekaku"){
        pomoPrice.innerText = parseInt(totalPrice.innerText) * 0.8; // decreasing 20% of the total price or, setting the total price to 80%
    }
    pomoInput.value = "";
});
