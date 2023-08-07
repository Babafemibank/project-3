var circles = document.querySelectorAll(".circle-group div");

circles.forEach((circle, index1) => {
    circle.addEventListener("click", () =>
    { 
        circles.forEach((circle, index2)=> {
index1 >= index2 ? circle.classList.replace("hover", "active") : circle.classList.replace("active", "hover");

        });
    });
});
function rate(){
const elements = document.querySelectorAll(".active");
let count = elements.length;
if(count < 1){
    let btn =   document.getElementById('btn');
btn.disabled = true;
}
else {
    document.getElementById("span").innerHTML = count;
    document.getElementById("alert").style.visibility = "visible";
    document.getElementById("rating").style.visibility = "hidden";
}



}