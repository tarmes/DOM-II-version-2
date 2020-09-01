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

// Double Click

const bigPic = document.querySelector('.intro img');

bigPic.addEventListener('dblclick', evt => {
    evt.target.src = 'https://images.unsplash.com/photo-1520105072000-f44fc083e508?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80'
})

// Keyup

document.addEventListener('keyup', evt => {
    if (event.key === 'b') {
        introBomb.textContent = 'Traveling expedition modern, clean webdesign blogger clean website theme website modern. Design pretty design, travelblogger adventure WordPress wanderlust theme blogger website expedition theme travelblogger. Adventure fun traveler pretty design website expedition.'
        introBomb.style.fontSize = '1em'
        introBomb.style.color = 'black'
    }
})




