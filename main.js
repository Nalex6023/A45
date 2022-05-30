gsap.fromTo(".img4", { opacity: 1 }, { opacity: 0, duration: 0.1, delay: 0.5 });
gsap.fromTo(".img3", { opacity: 1 }, { opacity: 0, duration: 0.1, delay: 0.8 });
gsap.fromTo(".img2", { opacity: 1 }, { opacity: 0, duration: 0.1, delay: 1.1 });
gsap.fromTo(
  ".img-container",
  { transform: "scale(0.5)" },
  { transform: "scale(1)", delay: 2, ease: "circ.out(2)", "border-radius": "0" }
);
gsap.fromTo(".cookies", { opacity: 0, y: 200 }, { opacity: 1, y: 0, delay: 3 });
const ok = document.querySelector(".ok");
ok.addEventListener("click", function () {
  gsap.fromTo(
    ".cookies",
    { opacity: 1, y: 0 },
    { opacity: 0, y: 200, display: "none" }
  );
});
const scroll = gsap.timeline({
  scrollTrigger: {
    trigger: ".first",
    start: "80%",
    end: "90%",
    scrub: true,
  },
});
const scroll2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".first",
    start: "80%",
    end: "82%",
  },
});
scroll.to(".navbar", { color: "black" });
scroll2.fromTo(".title h1", { y: 50, opacity: 0 }, { y: 0, opacity: 1 });
scroll2.fromTo(".line", { width: "0%" }, { width: "100%" });
scroll2.fromTo(".imgs img", { y: 10, opacity: 0 }, { y: 0, opacity: 1 });

const scroll3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".second",
    start: "50%",
    end: "60%",
  },
});
scroll3.fromTo(".third", { padding: "0" }, { padding: "5% 10%" });
