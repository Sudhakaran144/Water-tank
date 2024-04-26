let topPosition = 0; 
let animationInterval;
const waterflow = document.getElementById("waterflow")

function toggleWaterLevel() {
    const btn1 = document.getElementById("btn1")
    if(btn1.classList.contains("btn")){
        btn1.classList.toggle("active")
        waterflow.classList.toggle("flow")
    }   
    if (!animationInterval) {     
        animationInterval = setInterval(decreaseWaterLevel, 50);      
    } else {
        clearInterval(animationInterval);  
        animationInterval = null; 
    }
}

function decreaseWaterLevel() {  
    if (topPosition <= 100) {
        topPosition += 1;         
        updateWaterLevel();  
    }
    if (topPosition > 100) {
        waterflow.classList.toggle("flow")
        clearInterval(animationInterval);  
        animationInterval = null;  
    }
}

function updateWaterLevel() {
    const waterElement = document.getElementById('water');  
    waterElement.style.top = topPosition + '%';  
}
