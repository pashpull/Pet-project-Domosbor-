
// кнопка меню/закрытия модалки

let modBtn = document.querySelector('.modal-btn');

modBtn.addEventListener('click', () => {
    document.querySelector('.header').classList.toggle('header_modal-active')
    modBtn.classList.toggle('modal-btn_active');
    modalWrap.classList.toggle('modal_active');
    bodyOverflow()
    if(modalContent.innerHTML !== "") {
        modalContent.innerHTML = ""
    }
});

// модальное окно
let modalWrap = document.querySelector('.modal');
let callback = document.querySelector('.callback');
let login = document.querySelector('.login');
let advancedSearch = document.querySelector('.config__choice-more');
let modalContent = document.querySelector('.modal__content')



const modalActive = () => {
    modalWrap.classList.add('modal_active');
    modBtn.classList.add('modal-btn_active');
    document.querySelector('.header').classList.add('header_modal-active')
}

const bodyOverflow = () => {
    if(modalWrap.classList.contains('modal_active')) {
        document.getElementsByTagName('body')[0].style.overflow = 'hidden';
    } else {
        document.getElementsByTagName('body')[0].style.overflow = 'auto';
    }
}

callback.addEventListener('click', () => {
    modalActive();
    bodyOverflow()
});

login.addEventListener('click', () => {
    modalActive();
    bodyOverflow();
    if (!document.querySelector('.login-modal')) {
        modalContent.innerHTML = 
        `<div class="login-modal">
            <div class="login-modal__choiсe">
                <div class="login-modal__choiсe-wrap"></div>
                <button class="login-modal__choiсe-option login-modal__choiсe-option_active">Пользователь</button>
                <button class="login-modal__choiсe-option">Профессионал</button>
            </div>
            <div class="login-modal__forms">
                <div class="login-modal__form">
                    <div class="login-modal__form-title">Электронная почта / Телефон</div>
                    <input class="login-modal__input modal-input" type="text" id="mail-or-phone" placeholder="Электронная почта / Телефон">
                </div>
                <div class="login-modal__form">
                    <div class="login-modal__form-title">Пароль</div>
                    <input class="login-modal__input modal-input" type="text" id="mail-or-phone" placeholder="Пароль">
                </div>
                <button class="login-modal__in-btn btn-invert">Войти</button>
                <button class="login-modal__swap-to-reg">Регистрация</button>
            </div>
        </div>`;
    }
    if (document.querySelector('.login-modal')) {

        let swapToRegBtn = document.querySelector('.login-modal__swap-to-reg')

        document.querySelector('.login-modal__choiсe').onclick = function(event) {

            let target = event.target; 

            if (target.tagName === 'BUTTON'){
                document.querySelector('.login-modal__choiсe-option_active').classList.remove('login-modal__choiсe-option_active')
                target.classList.add('login-modal__choiсe-option_active');  
            }

            if (document.querySelectorAll('.login-modal__choiсe-option')[1].classList.contains('login-modal__choiсe-option_active')){
                
                document.querySelector('.login-modal__choiсe-wrap').classList.add('login-modal__choiсe-wrap_pro')
            }else {
                document.querySelector('.login-modal__choiсe-wrap').classList.remove('login-modal__choiсe-wrap_pro')
            }
        };
        
        swapToRegBtn.addEventListener('click', () => {
            console.log(swapToRegBtn)
            console.log('swapToRegBtn')
            modalContent.innerHTML = 
                `<div class="modal-registration">
                <div class="modal-registration__top">
                    <h2 class="modal-registration__title">Регистрация</h2>
                    <h3 class="modal-registration__subtitle">Введите почту и пароль</h2>
                </div>
                <div class="modal-registration__forms">
                    <input class="modal-registration__input modal-input" type="text" placeholder="Электронная почта">
                    <input class="modal-registration__input modal-input" type="password" placeholder="Пароль">
                    <input class="modal-registration__input modal-input" type="password" placeholder="Пароль повторно">             
                </div>
                <button class="modal-registration__btn btn-invert">Регистрация</button>
            </div>`;
        });
    }
   
});

advancedSearch.addEventListener('click', () => {
    modalActive();
    bodyOverflow()
});

// форма поиска

let searchBtn = document.querySelector('.search__btn');

searchBtn.addEventListener('click', () => {
    document.querySelector('.search__input').classList.toggle('search__input_active')
});


// переключение языка

let ruBtn = document.getElementById('ru');
let enBtn = document.getElementById('en');

ruBtn.addEventListener('click', () => {
    document.querySelector('.lang-switch__wrap').classList.remove('lang-switch__wrap_en');
    ruBtn.classList.add('lang-switch__item_active');
    enBtn.classList.remove('lang-switch__item_active');
});

enBtn.addEventListener('click', () => {
    document.querySelector('.lang-switch__wrap').classList.add('lang-switch__wrap_en');
    document.querySelector('.lang-switch__wrap').classList.remove('lang-switch__wrap_ru');
    enBtn.classList.add('lang-switch__item_active');
    ruBtn.classList.remove('lang-switch__item_active');
});


// переключение "построить"/"купить"/"аренда" на главной

document.querySelector('.config__choice').onclick = function(event) {
    let target = event.target; 

    if (target.tagName === 'BUTTON'){
        document.querySelector('.btn_active').classList.remove('btn_active')
        target.classList.add('btn_active');  
    }
};


// выпадающие списки в конфигураторе

document.querySelector('.config__options').addEventListener('click',  (event) => {
    let target = event.target.closest('.dropdown');
   
    if (Boolean(document.querySelector('.dropdown__form-arrow_active')) && !target.querySelector('.dropdown__form-arrow').classList.contains('dropdown__form-arrow_active')){
        document.querySelector('.dropdown__form-arrow_active').classList.remove('dropdown__form-arrow_active');
        document.querySelector('.dropdown__list_active').classList.remove('dropdown__list_active');
    }

    if (target) {
       
        target.querySelector('.dropdown__form-arrow').classList.toggle('dropdown__form-arrow_active');
        target.querySelector('.dropdown__list').classList.toggle('dropdown__list_active');
    }

    let dropListTarg = event.target.closest('.dropdown__option');
   
    if(dropListTarg) {
        target.querySelector('.dropdown__selected').textContent = dropListTarg.textContent;
    }
});


// слайдеры в конфигурациях

let sliderMin = document.querySelectorAll(".range__slider_1");
let sliderMax = document.querySelectorAll(".range__slider_2");
let minValue = document.querySelector('.range__val-min');
let maxValue = document.querySelector('.range__val-max');
let greenLine = document.querySelector('.range__line_green');

window.onload = () => {
    for(let i = 0; i < document.querySelectorAll('.range__val-min').length; i++ ){
        document.querySelectorAll('.range__val-min')[i].querySelector(".range__in").placeholder = sliderMin[i].min;
        document.querySelectorAll('.range__val-min')[i].querySelector(".range__in").style.width = sliderMin[i].min.length * 10 + "px";

        document.querySelectorAll('.range__val-max')[i].querySelector(".range__in").placeholder = sliderMax[i].max;
        document.querySelectorAll('.range__val-max')[i].querySelector(".range__in").style.width = sliderMax[i].max.length * 10 + "px";
    }
}



document.querySelector('.config').addEventListener('input',  (event) => {

    let target = event.target.closest('.range');

    sliderMin = target.querySelector(".range__slider_1");
    sliderMax = target.querySelector(".range__slider_2");
    minValue = target.querySelector('.range__val-min').querySelector(".range__in");
    maxValue = target.querySelector('.range__val-max').querySelector(".range__in");
    greenLine = target.querySelector('.range__line_green');

// //////////

minValue.addEventListener('keyup', (event) => {
        
    if (event.key === 'Enter'){
       console.log(minValue.value) 
       sliderMin.value = minValue.value;
        if (minValue.value < sliderMin.min || isNaN(Number(minValue.value))) {
            minValue.value = sliderMin.min;
        } 
      
    }

    sliderTrack ()

    minValue.style.width = minValue.value.length * 10 + "px";
    

})

maxValue.addEventListener('keyup', (event) => {
    // console.log(maxValue.value)

    if (event.key === 'Enter'){
        console.log(maxValue.value, sliderMax.max)
        if (maxValue.value > sliderMax.max || isNaN(Number(maxValue.value))) {
            maxValue.value = sliderMax.max;
        }   
        sliderMax.value = maxValue.value;
    }

    sliderTrack ()

    maxValue.style.width = maxValue.value.length * 10 + "px"
    
})
console.log(minValue.value) 

// //////////

    if (event.data === undefined) {
        
        sliderTrack ()

        sliderMin.oninput = sliderOne()
        sliderMax.oninput = sliderTwo()
    }

    console.log(minValue.value) 
    
    function sliderOne() {
        if(+sliderMax.value - +sliderMin.value <= 10){
            sliderMin.value = +sliderMax.value - 10;
        }
        minValue.value = sliderMin.value;
    }
    
    function sliderTwo() {
        if(+sliderMax.value - +sliderMin.value <= 10){
            sliderMax.value = +sliderMin.value + 10;    
        }
        maxValue.value = sliderMax.value;
    }

    function sliderTrack () {
        greenLine.style.left =  `calc(10px + ${(sliderMin.value - sliderMin.min) * 90 / (sliderMin.max - sliderMin.min)}%)`;
        greenLine.style.right = `calc(10px + ${90 - (sliderMax.value - sliderMax.min) * 90 / (sliderMax.max - sliderMax.min)}%)`;
    }

    minValue.style.width = minValue.value.length * 10 + "px";
    maxValue.style.width = maxValue.value.length * 10 + "px"
})







    
