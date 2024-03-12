var crsr = document.querySelector("#cursor")
var blur = document.querySelector("#cursorblur")
document.addEventListener("mousemove", function(dets){
  crsr.style.left = dets.x + "px"
  crsr.style.top = dets.y+"px"
  blur.style.left = dets.x-150 + "px"
  blur.style.top = dets.y-150+"px"
})

gsap.to("#nav", {
  backgroundColor: "#000",
  duration: 1,
  height: "100px",
  scrollTrigger: {
    trigger: "#nav",
    scroller: "body",
    // markers:true,
    start: "top -10%",
    end: "top -11%",
    scrub: 1,
  },
});

gsap.to("#main",{
  backgroundColor: "#fff7ec",
  scrollTrigger: {
    trigger:"#main",
    scroller:"body",
    start: "top -30vh",
    end: "top -100vh",
    scrub:2
  }
})