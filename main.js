function spin(){
    document.getElementById('h1').classList.add('hidden');
    var file = ['assets/seven.png','assets/orange.svg','assets/lemon.png','assets/cherry.png','assets/watermelon.png','assets/grape.png']

    // top div elements
    var topNums = document.getElementById("top").getElementsByTagName('img');

    // loop through topNums
    for(var i = 0; i < topNums.length; i++){
        var randomFile = file[Math.floor(Math.random() * file.length)]
        topNums[i].src = randomFile;
    }
    // console.log(randomEl, randomNum);

    // center div elements
    var centerNums = document.getElementById("center").getElementsByTagName('img');

    // loop through centerNums
    for(var i = 0; i < centerNums.length; i++){
        var randomFile = file[Math.floor(Math.random() * file.length)]
        centerNums[i].src = randomFile;
    }

    // btm div elements
    var btmNums = document.getElementById("btm").getElementsByTagName('img');

    // loop through centerNums
    for(var i = 0; i < btmNums.length; i++){
        var randomFile = file[Math.floor(Math.random() * file.length)]
        btmNums[i].src = randomFile;
    }
    middle = new Array
    for(var i = 0; i < centerNums.length; i++){
        middle.push(centerNums[i].src);
    }
    // allEqual( [1,1,1,1] )  // true
    var check = middle.allValuesSame()
    console.log(check);
    if(check == true){
        var total = parseInt(document.getElementById('total').innerHTML);
        document.getElementById('score').innerHTML = 50
        document.getElementById('total').innerHTML = total + 50;
        var h1 = document.getElementById('h1');
        h1.classList.remove('hidden');
        fade(h1);
        setTimeout(function(){
            h1.classList.add('hidden')},1000);
    }
}

if (Array.prototype.allValuesSame === undefined) {
    Array.prototype.allValuesSame = function() {
      for (let i = 1; i < this.length; i++) {
        if (this[i] !== this[0]) {
          return false;
        }
      }
      return true;
    }
  }

  function fade(element) {
    var op = 2;  // initial opacity
    var timer = setInterval(function () {
        if (op <= 0.1){
            clearInterval(timer);
            // element.style.display = 'none';
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= op * 0.1;
    }, 50);
}

function autospin(e){
    console.log(e.checked);
    if (e.checked == true) {
        setInterval(function(){
            spin();
        },2000);
    }
    if (e.checked == false){
        location.reload();
    }
}
