const arrows = document.querySelectorAll('.arrow');
const titles = document.querySelectorAll('.element-title');

function togglePanel(e){

    
    if(e.target.classList.contains('up')){
        e.target.classList.remove('up');
        e.target.parentNode.classList.remove('active');
    }else{
        arrows.forEach(arrow => arrow.classList.remove('up'));
        e.target.classList.add('up');
        e.target.parentNode.classList.add('active');
        
    }
}

function setTitleActive(e){
    // clicks on the div element title
    if(e.target.lastElementChild != null){
        if(e.target.lastElementChild.classList.contains('up')){
            e.target.lastElementChild.classList.remove('up');
            e.target.classList.remove('active');
            e.target.parentNode.classList.remove('show-text');
        }else{
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
            e.target.nextElementSibling.classList.add('up');
            e.target.parentNode.parentNode.classList.add('show-text');
        }
    }
}

titles.forEach(title => title.addEventListener('click',setTitleActive));
arrows.forEach(arrow => arrow.addEventListener('click',togglePanel));