var smcircle = document.querySelector("#smcircle");

function get_smcircle() {
  window.addEventListener("mousemove", function (dets) {
    (smcircle.style.top = `${dets.clientY}px`),
    (smcircle.style.left = `${dets.clientX}px`),
    (smcircle.style.opacity = '1');
  });

  document.querySelector('#main').addEventListener("mouseleave", function () {
    (smcircle.style.opacity = '0');
  });
}

function get_textillate() {
  $(".xy").textillate({ in: { effect: "fadeInUp", delay: "80" } });
  $(".textblock h2").textillate({ in: { effect: "fadeInDown", delay: "10" } });
  $(".textblock h6 , .para").textillate({ in: { effect: "fadeInUp", delay: "10" } });
}

function mouse_animation_engine() {
  document.querySelectorAll(".enlarge").forEach(function (elem) {
    elem.addEventListener("mousemove", function (dets) {
      (smcircle.style.width = "60px"),
        (smcircle.style.height = "60px"),
        (smcircle.style.backgroundColor = "white"),
        (smcircle.style.mixBlendMode = "difference");

      document.querySelector(".arrowsvg").style.opacity = "1";
      document.querySelector(".wheelsvg").style.opacity = "1";
      document.querySelector("#main").style.backgroundColor = `${dets.target.dataset.color}`;
    });

    elem.addEventListener("mouseleave", function (dets) {
      (smcircle.style.width = "15px"),
        (smcircle.style.height = "15px"),
        (smcircle.style.backgroundColor = "transparent"),
        (smcircle.style.mixBlendMode = "initial");

      document.querySelector(".arrowsvg").style.opacity = "0";
      document.querySelector(".wheelsvg").style.opacity = "0";
      document.querySelector("#main").style.backgroundColor = "#f8f8f8";
    });
  });
}

function normal_circle() {
  document.querySelectorAll(".asdf").forEach(function (elem) {
    elem.addEventListener("mousemove", function (dets) {
      (smcircle.style.width = "65px"),
        (smcircle.style.height = "65px"),
        (smcircle.style.backgroundColor = "white"),
        (smcircle.style.mixBlendMode = "difference");
    });

    elem.addEventListener("mouseleave", function (dets) {
      (smcircle.style.width = "15px"),
        (smcircle.style.height = "15px"),
        (smcircle.style.backgroundColor = "transparent"),
        (smcircle.style.mixBlendMode = "initial");
    });
  });
}

function blue_color_circle() {
  document.querySelectorAll(".jkl").forEach(function (elem) {
    elem.addEventListener("mousemove", function (dets) {
      smcircle.style.borderColor = "#0657A2";
    });

    elem.addEventListener("mouseleave", function (dets) {
      smcircle.style.borderColor = "initial";
    });
  });
}

function color() {
  document.querySelectorAll(".box").forEach(function (e) {
    e.addEventListener("mouseover", function () {
      document.querySelectorAll(".qwer").forEach(function (r) {
        r.style.color = "#fff";      
      });
      document.querySelectorAll(".uiop").forEach(function (s) {
        s.style.color = "rgb(219, 219, 219)";      
      });
    });

    e.addEventListener("mouseleave", function () {
      document.querySelectorAll(".qwer").forEach(function (r) {
        r.style.color = "initial";
      });
      document.querySelectorAll(".uiop").forEach(function (s) {
        s.style.color = "#999";
      });
    });
  });
}

function email_circle() {
  document.querySelector('.email-circle').addEventListener("mousemove", function (dets) {
    document.querySelector('.email-circle').style.transform = `translate(${dets.clientX*.09}px,-${dets.clientY*.06}px)`;
    document.querySelector('.email-circle').style.width = '140px';
    document.querySelector('.email-circle').style.height = '140px';
  });
  document.querySelector('.email-circle').addEventListener('mouseleave', function(dets) {
    document.querySelector('.email-circle').style.transform = `translate(0px,0px)`;
    document.querySelector('.email-circle').style.width = '125px';
    document.querySelector('.email-circle').style.height = '125px'
  });
}

function menu_click() {
  var flag = 0;
  
  document.querySelector('#nav-i').addEventListener('click',function(){
    if(flag === 0){
      this.style.backgroundColor = '#000';
      this.style.width = '250px';

      for(let i of document.querySelectorAll('#nav-i h2')){
        i.style.opacity = '1';
      }
      flag = 1;
    }
    else{
      this.style.backgroundColor = 'transparent';
      this.style.width = '60px';

      for(let i of document.querySelectorAll('#nav-i h2')){
        i.style.opacity = '0';
      }
      flag = 0;
    }
  })
}

function menu_icon_rotate() {
  document.querySelector('.ri-menu-line').addEventListener('mousemove' , function(){
    document.querySelector('.ri-menu-line').style.transition= 'all ease-in-out 1s';
    document.querySelector('.ri-menu-line').style.transform = 'rotate(180deg)';
    
  })
  document.querySelector('.ri-menu-line').addEventListener('mouseleave' , function(){
    document.querySelector('.ri-menu-line').style.transition= 'all ease-in-out 0s';
    document.querySelector('.ri-menu-line').style.transform = 'rotate(0deg)';
    
  })
}



get_smcircle();
get_textillate();
mouse_animation_engine();
color();
normal_circle();
blue_color_circle();
email_circle();
menu_click();
menu_icon_rotate();