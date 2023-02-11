function area(){
    const PI= 3.14;
    const radio= document.getElementById("radio").value;
    var resultado =PI*radio*radio;
    document.getElementById("resultado").value= resultado;
}
