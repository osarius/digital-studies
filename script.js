let sect = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');
const navlink = document.querySelector('.gamesound');
const audio = document.querySelector('#audio1');
window.onscroll = () => {
    sect.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navlinks.forEach(links=>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*='+id+']').classList.add('active');
            });
        };
    });      
};

navlink.addEventListener('click', () => {
    audio.play();
  });

  document.querySelector(".item1").addEventListener("click",function(){
    document.querySelector("#input-data").innerHTML = "-1";
  });
  document.querySelector(".item2").addEventListener("click",function(){
    document.querySelector("#input-data").innerHTML = "-1";
  });
  document.querySelector(".item3").addEventListener("click",function(){
    document.querySelector("#input-data").innerHTML = "-1";
  });
  document.querySelector(".item4").addEventListener("click",function(){
    document.querySelector("#input-data").innerHTML = "0";
  });
  document.querySelector(".item5").addEventListener("click",function(){
    document.querySelector("#input-data").innerHTML = ".5";
  });
  document.querySelector(".item6").addEventListener("click",function(){
    document.querySelector("#input-data").innerHTML = "0";
  });
  document.querySelector(".item7").addEventListener("click",function(){
    document.querySelector("#input-data").innerHTML = "1";
  });
  document.querySelector(".item8").addEventListener("click",function(){
    document.querySelector("#input-data").innerHTML = "3";
  });
  document.querySelector(".item9").addEventListener("click",function(){
    document.querySelector("#input-data").innerHTML = "1";
  });