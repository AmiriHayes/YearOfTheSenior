const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link')

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})

const readingPg = document.getElementById('reading');
const mathPg = document.getElementById('math');
const comsciPg = document.getElementById('comsci');
// const englishPg = document.getElementById('english');
const sciencePg = document.getElementById('science');
const otherPg = document.getElementById('other');

readingPg.addEventListener("click", function() {
    clrEds()
    document.getElementById("visible1").style.display = 'block';
});
mathPg.addEventListener("click", function() {
    clrEds()
    document.getElementById("visible2").style.display = 'block';
});
comsciPg.addEventListener("click", function() {
    clrEds()
    document.getElementById("visible3").style.display = 'block';
});
// englishPg.addEventListener("click", function() {
//     clrEds()
//     document.getElementById("visible4").style.display = 'block';
// });
sciencePg.addEventListener("click", function() {
    clrEds()
    document.getElementById("visible5").style.display = 'block';
});
otherPg.addEventListener("click", function() {
    clrEds()
    document.getElementById("visible6").style.display = 'block';
});

function clrEds(strIn) {
    document.getElementById('visible1').style.display = 'none';
    document.getElementById('visible2').style.display = 'none';
    document.getElementById('visible3').style.display = 'none';
    document.getElementById('visible4').style.display = 'none';
    document.getElementById('visible5').style.display = 'none';
    document.getElementById('visible6').style.display = 'none';
    return;
}

const mediaQuery = window.matchMedia('(max-width: 650px)');
if (mediaQuery.matches) {
    educationQuery()
}

// function educationQuery() {
//     document.getElementsByClassName('reading_block1').innerHTML += "Hello JavaScript!";
//     //var ammendment = document.getElementsByClassName('reading_block1');
//     //ammendment.innerHTML += '<p>_</p><p>Textbook: A Primer for Mathematics Competitions,Zawaira & Hitchcock</p>';
// }

