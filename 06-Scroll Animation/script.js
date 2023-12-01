const boxes = document.querySelectorAll('.box')

showContent();

window.addEventListener('scroll', showContent);

function showContent() {

    const triggerBox = window.innerHeight / 5 * 4;

    boxes.forEach(box => {
        
        const boxTop = box.getBoundingClientRect().top;

        if(boxTop < triggerBox){
            box.classList.add('show');
        }else {
            box.classList.remove('show');
        }
    })

}