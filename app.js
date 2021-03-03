const texts = ["It's Wonder full","Having a Sister","Like  You !","I Wish You","All Happiness in","The World.","Happy  Birtday" ,"       ","Me Tula 12 Wasta Wish Kalay"  ];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';
(function type(){
   
   if (count === texts.length) {
    count = 0;
   }
   currentText = texts[count];
   letter = currentText.slice(0, ++index);
   document.querySelector(".typing").textContent = letter;
   if(letter.length === currentText.length){
    count++;
    index = 0;

   }
   setTimeout(type, 700);

  }()); 