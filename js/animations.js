const INCREASE_NUMBER_ANIMATION_SPEED = 50
// за шаг анимации
function increaseNumberAnimationStep(i, element, endNumber){
    if (i <= endNumber) {
        if (i === endNumber) {
            element.innerText = i + '+';
        } else {
            element.innerText = i;
        }
        
        i+=100;

        setTimeout(function() {
            increaseNumberAnimationStep(i, element, endNumber);
          }, INCREASE_NUMBER_ANIMATION_SPEED);        
    }
} 

// инициализирует и запускает ее
function initIncreaseNumberAnimation() {
    let element = document.querySelector('.features__clients-count')
    increaseNumberAnimationStep(0, element, 5000)
}




let budget = document.querySelector('#budget')

budget.addEventListener('change', function handleSelectChange(event) {
    const formContainer = document.createElement('div')
    const input = document.createElement('input')
    const otherInput = document.querySelector('.form__other-input')
    
    if(event.target.value !== 'other' && Boolean(otherInput)){
        document.querySelector('.form form').removeChild(otherInput)
    } else {

        formContainer.classList.add('form__group');
        formContainer.classList.add('form__other-input');

        input.placeholder = 'Введите ваш вариант'
        input.type = 'text'
        
        formContainer.appendChild(input)
        document.querySelector('.form form').insertBefore(formContainer, document.querySelector('.form__submit'));
    }
    
})

let animationInited = false;

function updateScroll() {
    if (window.scrollY > 0) {
      document.querySelector('header').classList.add('header__scrolled');
    } else {
      document.querySelector('header').classList.remove('header__scrolled');
    }
   
    let windowBottomPosition = window.scrollY + window.innerHeight;
    let countElementPosition = document.querySelector('.features__clients-count').offsetTop;
    
    if (windowBottomPosition >= countElementPosition && !animationInited) {
      animationInited = true;
      initIncreaseNumberAnimation();
    }
}
window.addEventListener('scroll', updateScroll);