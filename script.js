function Scroll(){

    gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});

locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, 
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());


ScrollTrigger.refresh();

}

function fsbox(){
  var tl=gsap.timeline();
tl.to("#fs",{
  height:"100%",
  width:"100%",
  ease:Circ.easeInout,
  duration:1,
})
.to("#fs",{
  top:"0%",
  ease:Circ.easeInout,
  duration:1,
  onComplete:function(){
        document.querySelector("#fs").style.display="none";
  }
})
}

function newone(){
  var shoew=gsap.timline();
shoew.to("fs h1",{
  height:"20%",
  width:"100%",
  ease:easeInout,
  
})
}
Scroll();
fsbox();

