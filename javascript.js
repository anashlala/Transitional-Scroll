let stars = document.getElementById("stars");
let moon = document.getElementById("moon");
let mountens3 = document.getElementById("mountens3");
let mountens4 = document.getElementById("mountens4");
let river = document.getElementById("river");
let boat = document.getElementById("boat");
let title = document.querySelector('.title');


window.onscroll = function(){

    let value = scrollY;
    
    stars.style.left = value + 'px';
    moon.style.top = value * 2 +'px';
    
    mountens3.style.top = value + 'px';
    mountens4.style.top = value + 'px';
    river.style.top = value + 'px';
    boat.style.left = value * 4 + 'px';

    title.style.fontSize = value + 'px';


    if(scrollY >= 172){
        document.querySelector('.main').style.background = 'linear-gradient(#376281 , #10001f)';
    }else{
        document.querySelector('.main').style.background = 'linear-gradient( rgb(39, 3, 50), rgb(1, 0, 1))';
    }
    

    if(scrollY >= 80){
        title.style.fontSize = 80 + 'px';
        title.style.position = "fixed";
        if(scrollY >= 455){
            title.style.display = "none";
        }else{
            title.style.display = "block";
        }
    }



    if(scrollY >= 200){
        boat.style.display = "none";
    }else{
        boat.style.display = "block";
    }


    if(scrollY >= 176){
        moon.style.display = "none";
        mountens3.style.display = "none";
        mountens4.style.display = "none";
        river.style.display = "none";
        
    }else{
        moon.style.display = "block";
        mountens3.style.display = "block";
        mountens4.style.display = "block";
        river.style.display = "block";
        
    }

}

