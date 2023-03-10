// Skapa ref till knapp

let switchBtn = document.querySelector('#switchBtn');
let bodyRef = document.querySelector('body');
// console.log(bodyRef);

switchBtn.addEventListener('click', function(){
// console.log ('funkar');
bodyRef.classList.toggle('dark');
});

