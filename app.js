flag = 1

function myFunc () {
  
  
    const b1 = document.getElementById("b1").value
    const b2 = document.getElementById("b2").value
    const b3 = document.getElementById("b3").value
    const b4 = document.getElementById("b4").value
    const b5 = document.getElementById("b5").value
    const b6 = document.getElementById("b6").value
    const b7 = document.getElementById("b7").value
    const b8 = document.getElementById("b8").value
    const b9 = document.getElementById("b9").value
}
// player x wins
if ((b1 == 'x' || b1 == 'X') && (b2 == 'x' || b2 == 'X') && (b3 == 'x' || b3 == 'X')) {
  document.getElementById('print')
      .innerHTML = "Player X won";
    document.getElementById("b4").disabled = true;
    document.getElementById("b5").disabled = true;
    document.getElementById("b6").disabled = true;
    document.getElementById("b7").disabled = true;
    document.getElementById("b8").disabled = true;
    document.getElementById("b9").disabled = true;
    window.alert('player X won!');
}

else if ((b1 === 'x' || b1 === 'X') && (b4 === 'x' || b4 === 'X') && (b7 === 'x' || b7 === 'X')) {
  document.getElementById('print').innerHTML = "Player X won";
    document.getElementById('b2').disabled = true
    document.getElementById('b3').disabled = true
    document.getElementById('b5').disabled = true
    document.getElementById('b6').disabled = true
    document.getElementById('b8').disabled = true
    document.getElementById('b9').disabled = true
    window.alert('player X won!')
}

else if ((b4 === 'x' || b4 === 'X') && (b5 === 'x' || b5 === 'X') && (b6 === 'x' || b6 === 'X')) {
  document.getElementById('print').innerHTML = "Player X won";
    document.getElementById('b1').disabled = true
    document.getElementById('b2').disabled = true
    document.getElementById('b3').disabled = true
    document.getElementById('b7').disabled = true
    document.getElementById('b8').disabled = true
    document.getElementById('b9').disabled = true
    window.alert('player X won!')
}

else if ((b7 === 'x' || b7 === 'X') && (b8 === 'x' || b8 === 'X') && (b9 === 'x' || 93 === 'X')) {
  document.getElementById('print').innerHTML = "Player X won";
    document.getElementById('b1').disabled = true
    document.getElementById('b2').disabled = true
    document.getElementById('b3').disabled = true
    document.getElementById('b4').disabled = true
    document.getElementById('b5').disabled = true
    document.getElementById('b6').disabled = true
    window.alert('player X won!')
}

else if ((b2 === 'x' || b2 === 'X') && (b5 === 'x' || b5 === 'X') && (b8 === 'x' || b8 === 'X')) {
  document.getElementById('print').innerHTML = "Player X won";
    document.getElementById('b1').disabled = true
    document.getElementById('b3').disabled = true
    document.getElementById('b4').disabled = true
    document.getElementById('b6').disabled = true
    document.getElementById('b7').disabled = true
    document.getElementById('b9').disabled = true
    window.alert('player X won!')
}

else if ((b3 === 'x' || b3 === 'X') && (b6 === 'x' || b6 === 'X') && (b9 === 'x' || b9 === 'X')) {
  document.getElementById('print').innerHTML = "Player X won";
    document.getElementById('b1').disabled = true
    document.getElementById('b2').disabled = true
    document.getElementById('b4').disabled = true
    document.getElementById('b5').disabled = true
    document.getElementById('b7').disabled = true
    document.getElementById('b8').disabled = true
    window.alert('player X won!')
}

else if ((b1 === 'x' || b1 === 'X') && (b5 === 'x' || b5 === 'X') && (b9 === 'x' || b9 === 'X')) {
  document.getElementById('print').innerHTML = "Player X won";
    document.getElementById('b2').disabled = true
    document.getElementById('b3').disabled = true
    document.getElementById('b4').disabled = true
    document.getElementById('b6').disabled = true
    document.getElementById('b7').disabled = true
    document.getElementById('b8').disabled = true
    window.alert('player X won!')
}

else if ((b3 === 'x' || b3 === 'X') && (b5 === 'x' || b5 === 'X') && (b7 === 'x' || b7 === 'X')) {
  document.getElementById('print').innerHTML = "Player X won";
    document.getElementById('b1').disabled = true
    document.getElementById('b2').disabled = true
    document.getElementById('b4').disabled = true
    document.getElementById('b6').disabled = true
    document.getElementById('b8').disabled = true
    document.getElementById('b9').disabled = true
    window.alert('player X won!')
}
// player 0 wins 
else if ((b1 === 'o' || b1 === 'O') && (b2 === 'o' || b2 === 'O') && (b3 === 'o' || b3 === 'O')) {
  document.getElementById('print').innerHTML = "Player O won";
    document.getElementById('b4').disabled = true
    document.getElementById('b5').disabled = true
    document.getElementById('b6').disabled = true
    document.getElementById('b7').disabled = true
    document.getElementById('b8').disabled = true
    document.getElementById('b9').disabled = true
    window.alert('player O won!')
}

else if ((b1 === 'o' || b1 === 'O') && (b4 === 'o' || b4 === 'O') && (b7 === 'o' || b7 === 'O')) {
  document.getElementById('print').innerHTML = "Player O won";
    document.getElementById('b2').disabled = true
    document.getElementById('b3').disabled = true
    document.getElementById('b5').disabled = true
    document.getElementById('b6').disabled = true
    document.getElementById('b8').disabled = true
    document.getElementById('b9').disabled = true
    window.alert('player O won!')
}

else if ((b4 === 'o' || b4 === 'O') && (b5 === 'o' || b5 === 'O') && (b6 === 'o' || b6 === 'O')) {
  document.getElementById('print').innerHTML = "Player O won";
    document.getElementById('b1').disabled = true
    document.getElementById('b2').disabled = true
    document.getElementById('b3').disabled = true
    document.getElementById('b7').disabled = true
    document.getElementById('b8').disabled = true
    document.getElementById('b9').disabled = true
    window.alert('player O won!')
}

else if ((b7 === 'o' || b7 === 'O') && (b8 === 'o' || b8 === 'O') && (b9 === 'o' || 93 === 'O')) {
  document.getElementById('print').innerHTML = "Player O won";
    document.getElementById('b1').disabled = true
    document.getElementById('b2').disabled = true
    document.getElementById('b3').disabled = true
    document.getElementById('b4').disabled = true
    document.getElementById('b5').disabled = true
    document.getElementById('b6').disabled = true
    window.alert('player O won!')
}

else if ((b2 === 'o' || b2 === 'O') && (b5 === 'o' || b5 === 'O') && (b8 === 'o' || b8 === 'O')) {
  document.getElementById('print').innerHTML = "Player O won";
    document.getElementById('b1').disabled = true
    document.getElementById('b3').disabled = true
    document.getElementById('b4').disabled = true
    document.getElementById('b6').disabled = true
    document.getElementById('b7').disabled = true
    document.getElementById('b9').disabled = true
    window.alert('player O won!')
}

else if ((b3 === 'o' || b3 === 'O') && (b6 === 'o' || b6 === 'O') && (b9 === 'o' || b9 === 'O')) {
  document.getElementById('print').innerHTML = "Player O won";
    document.getElementById('b1').disabled = true
    document.getElementById('b2').disabled = true
    document.getElementById('b4').disabled = true
    document.getElementById('b5').disabled = true
    document.getElementById('b7').disabled = true
    document.getElementById('b8').disabled = true
    window.alert('player O won!')
}

else if ((b1 === 'o' || b1 === 'O') && (b5 === 'o' || b5 === 'O') && (b9 === 'o' || b9 === 'O')) {
  document.getElementById('print').innerHTML = "Player O won";
    document.getElementById('b2').disabled = true
    document.getElementById('b3').disabled = true
    document.getElementById('b4').disabled = true
    document.getElementById('b6').disabled = true
    document.getElementById('b7').disabled = true
    document.getElementById('b8').disabled = true
    window.alert('player O won!')
}

else if ((b3 === 'o' || b3 === 'O') && (b5 === 'o' || b5 === 'O') && (b7 === 'o' || b7 === 'O')) {
  document.getElementById('print').innerHTML = "Player O won";
    document.getElementById('b1').disabled = true
    document.getElementById('b2').disabled = true
    document.getElementById('b4').disabled = true
    document.getElementById('b6').disabled = true
    document.getElementById('b8').disabled = true
    document.getElementById('b9').disabled = true
    window.alert('player O won!')
}
// ties
else if ((b1 == 'X' || b1 == 'O') && (b2 == 'X' || b2 == 'O') && (b3 == 'X' || b3 == 'O') && (b4 == 'X' || b4 == 'O') && (b5 == 'X' || b5 == 'O') && (b6 == 'X' || b6 == 'O') && (b7 == 'X' || b7 == 'O') && (b8 == 'X' || b8 == 'O') && (b9 == 'X' || b9 == 'O')) {
  document.getElementById('print').innerHTML = "Match Tie"
  window.alert('Match Tie')
}

else {
  if (flag == 1) {
    document.getElementById('print').innerHTML = "Player X Turn"
  }
  else {
    document.getElementById('print').innerHTML = "Player O Turn"
  }
}

// function to reset game
function myFunc_2() {
  location.reload()
  document.getElementById('b1').value = ''
  document.getElementById('b2').value = ''
  document.getElementById('b3').value = ''
  document.getElementById('b4').value = ''
  document.getElementById('b5').value = ''
  document.getElementById('b6').value = ''
  document.getElementById('b7').value = ''
  document.getElementById('b8').value = ''
  document.getElementById('b9').value = ''
}

// functions check turn of player and put x or o in accordingly


function myFunc_3(myFunc) {
  if (flag == 1) {
    document.getElementById('b1').value = "X"
    document.getElementById('b1').disabled = true
    flag = 0
  }
else {
  document.getElementById('b1').value = "O"
    document.getElementById('b1').disabled = true
    flag = 1
  }
}

function myFunc_4() {
  if (flag === 1) {
    document.getElementById('b2').value = "X"
    document.getElementById('b2').disabled = true
    flag = 0
  }
else {
  document.getElementById('b2').value = "O"
    document.getElementById('b2').disabled = true
    flag = 1
  }
}

function myFunc_5() {
  if (flag === 1) {
    document.getElementById('b3').value = "X"
    document.getElementById('b3').disabled = true
    flag = 0
  }
else {
  document.getElementById('b3').value = "O"
    document.getElementById('b3').disabled = true
    flag = 1
  }
}

function myFunc_6() {
  if (flag === 1) {
    document.getElementById('b4').value = "X"
    document.getElementById('b4').disabled = true
    flag = 0
  }
else {
  document.getElementById('b4').value = "O"
    document.getElementById('b4').disabled = true
    flag = 1
  }
}

function myFunc_7() {
  if (flag === 1) {
    document.getElementById('b5').value = "X"
    document.getElementById('b5').disabled = true
    flag = 0
  }
else {
  document.getElementById('b5').value = "O"
    document.getElementById('b5').disabled = true
    flag = 1
  }
}

function myFunc_8() {
  if (flag === 1) {
    document.getElementById('b6').value = "X"
    document.getElementById('b6').disabled = true
    flag = 0
  }
else {
  document.getElementById('b6').value = "O"
    document.getElementById('b6').disabled = true
    flag = 1
  }
}

function myFunc_9() {
  if (flag === 1) {
    document.getElementById('b7').value = "X"
    document.getElementById('b7').disabled = true
    flag = 0
  }
else {
  document.getElementById('b7').value = "O"
    document.getElementById('b7').disabled = true
    flag = 1
  }
}

function myFunc_10() {
  if (flag === 1) {
    document.getElementById('b8').value = "X"
    document.getElementById('b8').disabled = true
    flag = 0
  }
else {
  document.getElementById('b8').value = "O"
    document.getElementById('b8').disabled = true
    flag = 1
  }
}

function myFunc_11() {
  if (flag === 1) {
    document.getElementById('b9').value = "X"
    document.getElementById('b9').disabled = true
    flag = 0
  }
else {
  document.getElementById('b9').value = "O"
    document.getElementById('b9').disabled = true
    flag = 1
  }
}
