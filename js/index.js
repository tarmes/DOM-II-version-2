// Your code goes here

// Click

const logo = document.querySelector('.logo-heading');

logo.addEventListener('click', function (event) {
    event.target.style.color = 'green';
})

// Mouseover && Mouseout

const allLinks = document.querySelectorAll('.main-navigation a');
console.log(allLinks);

allLinks.forEach(link => {
    link.addEventListener('mouseover', evt => {
        evt.target.style.fontSize = '3em'
    })
    link.addEventListener('mouseout', evt => {
        evt.target.style.fontSize = '2em'
    })
})

// Keydown

const introBomb = document.querySelector('.intro p')

document.addEventListener('keydown', evt => {
    if (event.key === 'b') {
        introBomb.textContent = 'BOOOOOOOOOOOOOOOOOOOOOOOOOOOM!!!!!!!!!!!!!!';
        introBomb.style.fontSize = '10em';
        introBomb.style.color = 'red';
    }
})



