var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-link");
  }

  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }

  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}


var sidemenu=document.getElementById("sidemenu");

function openMenu(){
  sidemenu.style.right="0";
}

function closeMenu(){
  sidemenu.style.right="-200px";
}

function page1Animation(){
  var tl = gsap.timeline()

  tl.from("nav a,nav li",{
    y:-40,
    duration:0.5,
    delay:0.3,
    opacity:0,
    stagger:0.15
  })

  tl.from(".header-text p",{
    x:-200,
    opacity:0,
    duration:0.2
  })

  tl.from(".header-text h1",{
    x:-200,
    opacity:0,
    duration:0.3
  })

  tl.from(".header-text img",{
    y:-200,
    opacity:0,
    duration:0.5
  })
}

function page2Animation(){
  var tl2=gsap.timeline({
    scrollTrigger:{
      trigger:"#about",
      scroller:"body",
      start:"top 50%",
      end:"top 0",
      scrub:2
    }
  })

  tl2.from("#about .about-col-1 img",{
    opacity:0,
    stagger:0.15,
    y:30,
    duration:0.8
  })

  tl2.from("#about .about-col-2",{
    opacity:0,
    stagger:0.15,
    x:40,
    duration:0.6
  })
}

function page3Animation(){
  var tl3=gsap.timeline({
    scrollTrigger:{
      trigger:"#services",
      scroller:"body",
      start:"top 50%",
      end:"top 0",
      scrub:2
    }
  })

  tl3.from("#services .container",{
    opacity:0,
    stagger:0.15,
    y:30,
    duration:0.8
  })

}

function page4Animation(){
  var tl4=gsap.timeline({
    scrollTrigger:{
      trigger:"#portfolio",
      scroller:"body",
      start:"top 50%",
      end:"top 0",
      scrub:2
    }
  })

  tl4.from("#portfolio .container",{
    opacity:0,
    stagger:0.15,
    y:30,
    duration:0.8
  })

}

function page5Animation(){
  var tl5=gsap.timeline({
    scrollTrigger:{
      trigger:"#contact",
      scroller:"body",
      start:"top 50%",
      end:"top 0",
      scrub:2
    }
  })

  tl5.from("#contact .container",{
    opacity:0,
    stagger:0.15,
    y:30,
    duration:0.8
  })

}

page1Animation()
page2Animation()
page3Animation()
page4Animation()
page5Animation()