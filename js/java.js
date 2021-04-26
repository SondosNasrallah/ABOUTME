/* eslint-disable no-unused-vars */


'use strict';

alert('My Name start with MAHM and ends with OUD');

let userName = prompt('Say my name');

while (userName.toUpperCase() !== 'MAHMOUD') {
  userName = prompt('Say my name');
}
alert('You are GOD DAMN RIGHT');

alert('Answer 5 Question to enter my HEART\n من الاخر بدي اقززك');


let mGame = prompt('Am I a Gamer');

switch (mGame.toUpperCase()) {
case 'YES':
case 'Y':
  alert('You Are Rock');
  break;
case 'NO':
case 'N':
  alert('You lost a point');
  break;
}

let mWeight = prompt('Am I fat');

switch (mWeight.toUpperCase()) {
case 'YES':
case 'Y':
  alert('You lost 2 points');
  break;
case 'NO':
case 'N':
  alert('Habibi, you are right');
  break;
}

let mTv = prompt('Am I a Breaking Bad Fans');
switch (mTv.toUpperCase()) {
case 'YES':
case 'Y':
  alert('You Are SOOO RIGHT');
  break;
case 'NO':
case 'N':
  alert('Go watch Cartoon Network');
  break;
}

let mSport = prompt('Am I a Basketball fan');
switch (mSport.toUpperCase()) {
case 'YES':
case 'Y':
  alert('Yalaaaa, lets run');
  break;
case 'NO':
case 'N':
  alert('Lazzzzzzyyy!');
  break;
}

let mFood = prompt('Am I a food fan');
switch (mFood.toUpperCase()) {
case 'YES':
case 'Y':
  alert('Burger is the besttt');
  break;
case 'NO':
case 'N':
  alert('I think I am going to eat you');
  break;
}
