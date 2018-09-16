let b_prev = document.querySelector(".banner-prev");
let b_next = document.querySelector(".banner-next");
let slides = document.querySelectorAll(".banner-slide");
let article_link = document.querySelectorAll(".main-article-link");
let arrow = document.querySelectorAll('.list_arrow');
let panel = document.querySelectorAll('.list_panel');
let chair_summary = document.querySelectorAll('.list_label');
let transport = document.getElementById('transport');
let transportValue = document.querySelector('span.transport.value');
let yourChair = document.querySelector('h4.title');
let colorChair = document.querySelector('span.color');
let pattern = document.querySelector('span.pattern');
let sum = document.querySelector('.sum');
let yourChairValue = document.querySelector('h4.title.value');
let colorChairValue = document.querySelector('span.color.value');
let patternValue = document.querySelector('span.pattern.value');
let summaryImg = document.querySelector('.image_part img');



/************** slider ************/
b_next.addEventListener('click', function () {
    slides.forEach(item => {
        item.classList.contains('banner-slide-active') ?
            item.classList.remove('banner-slide-active') :
            item.classList.add('banner-slide-active');
    })
});


b_prev.addEventListener('click', function () {
    slides.forEach(item => {
        item.classList.contains('banner-slide-active') ?
            item.classList.remove('banner-slide-active') :
            item.classList.add('banner-slide-active');
    })
});

/************** mouseover effect ************/

for (let i = 0; i < article_link.length; i++) {
    article_link[i].addEventListener("mouseover", function () {
        let bar = this.querySelector(".main-article-bar");
        bar.style.display = "none";
    })
}

for (let i = 0; i < article_link.length; i++) {
    article_link[i].addEventListener("mouseout", function () {
        let bar = this.querySelector(".main-article-bar");
        bar.style.display = "block";
    })
}

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


const check = () => {
    yourChair.innerHTML = chair_summary[0].innerText;
    chair_summary[1].innerText === "Wybierz kolor" ? colorChair.innerHTML = "" : colorChair.innerHTML = chair_summary[1].innerHTML;
    chair_summary[1].innerText !== "Wybierz kolor" ? colorChairValue.innerHTML = '0' : colorChairValue.innerHTML = '';
    chair_summary[2].innerText === "Wybierz materiał" ? pattern.innerHTML = "" : pattern.innerHTML = chair_summary[2].innerHTML;


    if (yourChair.innerHTML === 'Clair') {
        yourChairValue.innerHTML = '150';
        summaryImg.setAttribute('src', '/images/red_chair.png');
    } else if (yourChair.innerHTML === 'Selena') {
        yourChairValue.innerHTML = '200';
        summaryImg.setAttribute('src', '/images/black_chair.png');
    } else if (yourChair.innerHTML === 'Margarita') {
        yourChairValue.innerHTML = '250';
        summaryImg.setAttribute('src', '/images/orange_chair.png');
    }

    if (pattern.innerHTML === 'Skóra') {
        patternValue.innerHTML = '100';
    } else if (pattern.innerHTML === 'Tkanina') {
        patternValue.innerHTML = '0';
    }

    sum.innerHTML = Number(yourChairValue.innerHTML) + Number(colorChairValue.innerHTML) + Number(patternValue.innerHTML) + Number(transportValue.innerHTML);

};

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

    sum.innerHTML = Number(yourChairValue.innerHTML) + Number(colorChairValue.innerHTML) + Number(patternValue.innerHTML) + Number(transportValue.innerHTML);

});