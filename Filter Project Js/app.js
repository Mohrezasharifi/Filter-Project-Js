const buttons = document.querySelectorAll('button');
const allEl = document.querySelectorAll('.col-lg-3');
//////
buttons.forEach(function(button){
    button.addEventListener('click', function(e){
        let clickedEl = e.currentTarget.classList;
        if(clickedEl.contains('all')){
            allEl.forEach(function(event){
                event.style.display = 'flex';
            })
        }
        else if(clickedEl.contains('cakes')){
            allEl.forEach(function(event){
                if(event.classList.contains('cake')){
                    event.style.display = 'flex';
                }else{
                    event.style.display = 'none';
                }
            })
        }
        else if(clickedEl.contains('vegetables')){
            allEl.forEach(function(event){
                if(event.classList.contains('vegetable')){
                    event.style.display = 'flex';
                }else{
                    event.style.display = 'none';
                }
            })
        }
        else if(clickedEl.contains('drinks')){
            allEl.forEach(function(event){
                if(event.classList.contains('drink')){
                    event.style.display = 'flex';
                }
                else{
                    event.style.display = 'none';
                }
            })
        }
        else if(clickedEl.contains('fruits')){
            allEl.forEach(function(event){
                if(event.classList.contains('fruit')){
                    event.style.display = 'flex';
                }
                else{
                    event.style.display = 'none';
                }
            })
        }
    })
})
///////////----------------------
const searchBox = document.getElementById('search');
searchBox.addEventListener('keyup', function(e){
    const searchFilter = e.target.value.toLowerCase().trim();
    allEl.forEach(function(event){
        if(event.classList.contains(searchFilter)){
            event.style.display = 'flex';
        }else{
            event.style.display = 'none';
        }
    })
})