const arrows = document.querySelectorAll('.arrow');
const titles = document.querySelectorAll('.element-title');
const elements = document.querySelectorAll('.element');

function resetAccordions(){
    arrows.forEach(arrow => arrow.classList.remove('up'));
    titles.forEach(title => title.classList.remove('active'));
    elements.forEach(element => element.classList.remove('show-text'));
}


function toogleAccordion(e){


    // clicks on the div element title
    if(e.target.lastElementChild != null){
        if(e.target.lastElementChild.classList.contains('up')){
            e.target.lastElementChild.classList.remove('up');
            e.target.classList.remove('active');
            e.target.parentNode.classList.remove('show-text');
        }else{
            resetAccordions();
            e.target.lastElementChild.classList.add('up');
            e.target.classList.add('active');
            e.target.parentNode.classList.add('show-text');
        }
    // clicks on the title text
    }else if(e.target.nextElementSibling != null){

        if(e.target.nextElementSibling.classList.contains('up')){
            e.target.nextElementSibling.classList.remove('up');
            e.target.parentNode.classList.remove('active');
            e.target.parentNode.parentNode.classList.remove('show-text');
        }else{
            resetAccordions();
            e.target.nextElementSibling.classList.add('up');
            e.target.parentNode.parentNode.classList.add('show-text');
        }
    }else{

        if(e.target.classList.contains('up')){
            e.target.classList.remove('up');
            e.target.parentNode.classList.remove('active');
            e.target.parentNode.parentNode.classList.remove('show-text');

        }else{
            resetAccordions();
            e.target.classList.add('up');
            e.target.parentNode.classList.add('active');
            e.target.parentNode.parentNode.classList.add('show-text');

            
        }
    }
}

titles.forEach(title => title.addEventListener('click',toogleAccordion));
