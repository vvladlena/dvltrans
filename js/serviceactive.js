const liList = document.getElementsByClassName("services__offer");
const liArray = [...liList];

const time = 2000;
let active = 0;

const changeActive = () =>{
    active++;

    if(active===liArray.length){
        active = 0;
    }

    const activeItem = liArray.findIndex(liItem=>liItem.classList.contains('services__offer--active'));
    liArray[activeItem].classList.remove('services__offer--active');
    liArray[active].classList.add('services__offer--active');
}


setInterval(changeActive, time)
