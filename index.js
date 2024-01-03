var encodeDecode = document.getElementById("encode_decode");
var inputAlphabet = document.getElementById("inputAlphabet");
var cipherResult = document.getElementById("cipherResult");
var imgResult = document.getElementById("imgResult");
var btnSubmit = document.getElementById("btnSubmit");
var btnClear = document.getElementById("btnClear");

var bigAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var smallAlphabet = bigAlphabet.toLowerCase();

var decipherImages = [
    "img/1.png",
    "img/2.png",
    "img/3.png",
    "img/4.png",
    "img/5.png",
    "img/6.png",
    "img/7.png",
    "img/8.png",
    "img/9.png",
    "img/10.png",
    "img/11.png",
    "img/12.png",
    "img/13.png",
    "img/14.png",
    "img/15.png",
    "img/16.png",
    "img/17.png",
    "img/18.png",
    "img/19.png",
    "img/20.png",
    "img/21.png",
    "img/22.png",
    "img/23.png",
    "img/24.png",
    "img/25.png",
    "img/26.png",
];



const inputAlphabetFunction = (alphabet) => {
    for(var i = 0; i < alphabet.length; i++){

        var code = alphabet.charAt(i);

        if(alphabet[i] === alphabet[i].toUpperCase()){
            var index = bigAlphabet.indexOf(code);
            var img = decipherImages[index];
        }else{
            var index = smallAlphabet.indexOf(code);
            var img = decipherImages[index];
        }
        
        var create_img = document.createElement("img");
        create_img.setAttribute("class", "img")
        create_img.setAttribute("src", img);
        imgResult.appendChild(create_img);
        
    }

}


const inputFunction = () => {

    //we only want the result to display if the value is not null
    if(inputAlphabet.value !== null){
        //remove the old symbols img
        var elementToRemoved = document.querySelectorAll(".img")
        elementToRemoved.forEach((element) => {
            element.parentNode.removeChild(element);
        });
        //add the new symbols img
        inputAlphabetFunction(inputAlphabet.value);
    }
}

btnSubmit.addEventListener('click', e => {
    e.preventDefault();
    inputFunction();
})

btnClear.addEventListener('click', e => {

    if(inputAlphabet.value !== null && imgResult.childNodes.length > 0){
        inputAlphabet.value = "";
        var elementToRemoved = document.querySelectorAll(".img")
        elementToRemoved.forEach((element) => {
            element.parentNode.removeChild(element);
        });
    }

});


