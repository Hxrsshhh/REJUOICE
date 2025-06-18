gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});


// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();




let vid=document.querySelector("video");
let play=document.querySelector(".play");
vid.addEventListener("mousemove",(dets)=>{

    gsap.to(play,{
        x:dets.x,
        y:dets.y,
    })
})

vid.addEventListener("mouseenter",(dets)=>{

    gsap.to(play,{
        opacity:1,
        scale:1,
    })
})
vid.addEventListener("mouseleave",(dets)=>{

    gsap.to(play,{
        opacity:0,
        scale:0,
    })
})
const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
})


gsap.from(".hero",{
    height:"0px",
    duration:1.5,
    delay:1,
})
gsap.from(".head",{
    y:"-100%",
    opacity:0,
    duration:1,
    delay:1,
})
gsap.from(".vid",{
    opacity:0,
    duration:1,
    delay:2.5,
})

gsap.from(".page2-h1 h1",{
    y:"100%",
    opacity:0,
    scrollTrigger:{
        trigger:".page2",
        scroller:".main",
        stagger:.5,
       // markers:true,
        start:"top 70%",
        end:"top 40%",
        scrub:2,
    }
})

gsap.from(".page2-cnt",{
    y:"100%",
    opacity:0,
    scrollTrigger:{
        trigger:".page2",
        scroller:".main",
        stagger:.5,
      //  markers:true,
        start:"top 40%",
        end:"top 60%",
        scrub:2,
    }
})

gsap.from(".page6-pt2",{
  padding:"8vw 10vw",
  duration:2,
  scrollTrigger:{
    trigger:".page6-pt2",
    scroller:".main",
   // markers:true,
    start:"top 80%",
    scrub:2,


  }

})


let hover=document.querySelector(".a-box");
let hover2=document.querySelector(".abt-box");
hover.addEventListener("mouseenter",()=>{
  console.log("heyyy")
  gsap.to(hover,{
    y:"-70%",
    duration:1,
    opacity:0,
  })

   gsap.to(hover2,{
    y:"-70%",
    duration:1,
    opacity:1,
  })
})

hover.addEventListener("mouseleave",()=>{
  console.log("heyyy out")
  gsap.to(hover,{
    y:"0%",
    duration:1,
    opacity:1,
  })

     gsap.to(hover2,{
    y:"40%",
    duration:1,
    opacity:0,
  })
})




gsap.from(".footer2 h1",{
  y:"-50%",
  opacity:0,
  duration:1,
  scrollTrigger:{
    trigger:".footer2",
    scroller:".main",
   // markers:true,
    start:"top 80%",
    end:"top 90%",
    scrub:3,


  }

})
