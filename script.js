gsap.set(".anim-hero", { opacity: 0, y: 30 });
window.addEventListener("load", () => {
    gsap.to(".anim-hero", { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: "power3.out" });

    const typed = new Typed('#typed-output', {
        strings: ['Hai, Aku Ridho.'],
        typeSpeed: 50,
        backSpeed: 25,
        backDelay: 1500,
        startDelay: 500,
        loop: true,
    });
});

gsap.registerPlugin(ScrollTrigger);
const animatedElements = gsap.utils.toArray(".anim-scroll");
animatedElements.forEach(el => {
    gsap.fromTo(el, { autoAlpha: 0, y: 50 }, { autoAlpha: 1, y: 0, duration: 1, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 80%", toggleActions: "play none none none" } });
});