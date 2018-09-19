const buttonPrev = document.querySelector(".banner-prev");
const buttonNext = document.querySelector(".banner-next");
const slides = document.querySelectorAll(".banner-slide");
const articleLink = document.querySelectorAll(".main-article-link");
const arrow = document.querySelectorAll('.list_arrow');
const panel = document.querySelectorAll('.list_panel');
const chairSummary = document.querySelectorAll('.list_label');
const transport = document.getElementById('transport');
const transportValue = document.querySelector('span.transport.value');
const yourChair = document.querySelector('h4.title');
const colorChair = document.querySelector('span.color');
const pattern = document.querySelector('span.pattern');
const sum = document.querySelector('.sum');
const yourChairValue = document.querySelector('h4.title.value');
const colorChairValue = document.querySelector('span.color.value');
const patternValue = document.querySelector('span.pattern.value');
const summaryImg = document.querySelector('.image_part img');


/************** slider ************/
buttonNext.addEventListener('click', () => {
    slides.forEach(item => {
        item.classList.contains('banner-slide-active') ?
            item.classList.remove('banner-slide-active') :
            item.classList.add('banner-slide-active');
    })
});


buttonPrev.addEventListener('click', () => {
    slides.forEach(item => {
        item.classList.contains('banner-slide-active') ?
            item.classList.remove('banner-slide-active') :
            item.classList.add('banner-slide-active');
    })
});

/************** mouseover effect ************/

for (let i = 0; i < articleLink.length; i++) {
    articleLink[i].addEventListener("mouseover", function () {
        let bar = this.querySelector(".main-article-bar");
        bar.style.display = "none";
    })
}

for (let i = 0; i < articleLink.length; i++) {
    articleLink[i].addEventListener("mouseout", function() {
        let bar = this.querySelector(".main-article-bar");
        bar.style.display = "block";
    })
}

/************** dynamic form ************/

for (let i = 0; i < arrow.length; i++) {
    arrow[i].addEventListener('click', ()=> {
        arrow[i].nextElementSibling.style.display === 'block' ?
            arrow[i].nextElementSibling.style.display = 'none':
            arrow[i].nextElementSibling.style.display = 'block';
    })
}

for (let i = 0; i < panel.length; i++) {
    panel[i].addEventListener('click', (e) => {
        e.target.parentElement.previousElementSibling.previousElementSibling.innerHTML = e.target.innerHTML;
        e.target.parentElement.previousElementSibling.previousElementSibling.style.color = 'black';
        panel[i].style.display = 'none';
        check();
    })
}

const chairsProperties = {
    Clair: {
        price: '150',
        img: "./images/red_chair.png"
        },
    Selena: {
        price: '200',
        img: "./images/black_chair.png"
    },
    Margarita: {
        price: '250',
        img: "./images/orange_chair.png"
    }
    };

const check = () => {

    let chosenChair = chairSummary[0].innerText;

    /************** Type of the chair ************/
    if (chosenChair !== 'Wybierz rodzaj') {
        yourChair.innerHTML = chosenChair;
        yourChairValue.innerHTML = chairsProperties[chosenChair].price;
        summaryImg.setAttribute('src', chairsProperties[chosenChair].img);
    }
    /************** Color of the chair ************/

    chairSummary[1].innerText === "Wybierz kolor" ? colorChair.innerHTML = "" : colorChair.innerHTML = chairSummary[1].innerHTML;
    chairSummary[1].innerText !== "Wybierz kolor" ? colorChairValue.innerHTML = '0' : colorChairValue.innerHTML = '';

    /************** Material of the chair ************/

    chairSummary[2].innerText === "Wybierz materiał" ? pattern.innerHTML = "" : pattern.innerHTML = chairSummary[2].innerHTML;

    if (pattern.innerHTML === 'Skóra') {
        patternValue.innerHTML = '100';
    } else if (pattern.innerHTML === 'Tkanina') {
        patternValue.innerHTML = '0';
    }

    sumValue();
};

/************** Charge for transport ************/

transport.addEventListener('change', function () {
    let isTransport = document.querySelector('span.transport');
    let transportValue = document.querySelector('span.transport.value');

    if (transport.checked) {
        isTransport.innerHTML = 'Transport';
        transportValue.innerHTML = '50';
    } else {
        isTransport.innerHTML = '';
        transportValue.innerHTML = '';
    }
    sumValue();
});

const sumValue = () => {
    sum.innerHTML = Number(yourChairValue.innerHTML) + Number(colorChairValue.innerHTML) + Number(patternValue.innerHTML) + Number(transportValue.innerHTML);
    };