const navSlide = () => {
    const menu = document.querySelector('.menu');
    const nav = document.querySelector('.responsive_navbar');
    const sidebar = document.querySelector('.sidebar');
    const home_content = document.querySelector('.home_content');
    menu.addEventListener('click',()=>{
       nav.classList.toggle('responsive_navbar_active');
       sidebar.classList.toggle('sidebar_active');
       home_content.classList.toggle('home_content_active');
    });
}

function displaySize(){
    var res = window.innerWidth + "x" + window.innerHeight;
    document.getElementById("result").innerHTML = res;

}


displaySize();
navSlide();


