'use strict';

// const mainBlock = document.createElement('div');
// const button = document.createElement('button');
// const myPic = document.createElement('img');

// document.body.appendChild(mainBlock);
// button.innerText = 'click me!';
// mainBlock.appendChild(button);
//
// function showPicture() {
//   myPic.style.width = '300px';
//   myPic.style.height = '300px';
//   mainBlock.appendChild(myPic);
//   button.remove();
// } 
// button.addEventListener('click', showPicture);


fetch(' https://reqres.in/api/users')
    .then(res => res.json())
    .then(res => {
        res.data.filter(user => {
          if (user.id <= 3) { 
            console.log(`${user.first_name} ${user.last_name}`);
          }
        });
    });


//  function sleep(time) {
//    return new Promise (function(resolve) { 
//   setTimeout(function() {resolve ()
//    }, time);
//  });
//  }

//  sleep(1000, function() {
//    console.log('hello');
//  });

//  sleep(1000).then(function() {
//    console.log('hello');
//  });

// function sleep(time, cb) {
//   setTimeout(function() {
//     cb();
//   }, time);
// }

// sleep(1000, function() {
//   console.log('hello');
// });

// sleep(1000).then(function() {
//   console.log('hello');
// });
