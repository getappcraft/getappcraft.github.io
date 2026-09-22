// Scroll behaviour, all of it optional: with reduced motion on, elements are visible from
// the start and nothing moves.
(() => {
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Nav gains a background once you leave the hero.
  const nav = document.querySelector(".nav");
  if (nav) {
    const onScroll = () => nav.setAttribute("data-scrolled", String(window.scrollY > 24));
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  if (reduced) {
    document.querySelectorAll(".reveal").forEach((el) => el.setAttribute("data-visible", "true"));
    return;
  }

  // Reveal on entry. Once revealed, stop observing — re-animating on scroll-up is noise.
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.setAttribute("data-visible", "true");
        observer.unobserve(entry.target);
      });
    },
    { rootMargin: "0px 0px -12% 0px", threshold: 0.1 }
  );

  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

  // Hero glow drifts a little slower than the page. rAF-throttled so scrolling stays smooth.
  const glow = document.querySelector(".hero__glow");
  if (glow) {
    let ticking = false;
    window.addEventListener(
      "scroll",
      () => {
        if (ticking) return;
        ticking = true;
        requestAnimationFrame(() => {
          const y = Math.min(window.scrollY, 900) * 0.25;
          glow.style.transform = `translateX(-50%) translateY(${y}px)`;
          ticking = false;
        });
      },
      { passive: true }
    );
  }
})();
