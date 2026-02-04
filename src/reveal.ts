export function initScrollReveal() {
  const observerOptions: IntersectionObserverInit = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        (entry.target as HTMLElement).classList.add("revealed");
        revealObserver.unobserve(entry.target);
      }
    });
  }, observerOptions);

  const observeElements = () => {
    document.querySelectorAll(".reveal:not(.revealed)").forEach((el) => {
      revealObserver.observe(el);
    });
  };

  observeElements();

  const domObserver = new MutationObserver(observeElements);
  domObserver.observe(document.body, { childList: true, subtree: true });
}
