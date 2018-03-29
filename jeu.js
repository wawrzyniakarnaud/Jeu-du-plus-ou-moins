var number = Math.floor(Math.random() * 101);

var input = document.getElementById("champ");

var button = document.getElementById("send");

var change = document.getElementById("change");

var red = document.getElementById('red');

console.log(number)

button.addEventListener("click", function(event){
     
     var value = input.value
     
console.log(value)
     
     
     if (value<number) {
          red.innerHTML = "Il est plus grand !";
         input.style.backgroundColor = "red";
     
     }else if (value>number) {
          red.innerHTML = "Il es plus petit !";
          input.style.backgroundColor = "red";
     
     }else{ red.innerHTML = "" ;
          change.innerHTML = "Bravo ..!";
          input.style.backgroundColor = "green";


}});



