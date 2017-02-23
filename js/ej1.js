function division(){
  var num1 = document.getElementById("input1");
  var num2 = document.getElementById("input2");
    if(num2 == 0)
      alert("No se puede dividid por 0");
    else
      var res = num1%num2;
        if(res == 0){
          var cociente = num1/num2;
          alert("La division es exacta y el cociente es " + cociente);
        }
        else{
          var cociente = num1/num2;
          var cociente = ParseInt(cociente);
          alert("la division no es exacta. El residuo es " + res "y el cociente es " + cociente);
        }
}
