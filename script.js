gsap.from("#navt" ,{
    duration:2.5,
ease: "bounce.out",
y: -200,
stagger:1
})
gsap.from("ul li" ,{
    duration:2.5,
ease: "bounce.out",
y: -500,
stagger:.3
})
gsap.from("#jumbo", {
    duration:2.5,
    ease: "expoScale(0.5,7,none)",
    y: -500
    });
    gsap.from(".card", {
        duration:2,
        ease: "power2.inOut",
        x: -2000,
        stagger:.5,
        scrollTrigger:".card"
        });

        gsap.from("#logo" ,{
            duration:2.5,
            rotate:360,
            scale:0
        
        })       
        gsap.from("form", {
            opacity:0,
            duration:4
            
          });