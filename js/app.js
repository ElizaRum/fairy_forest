window.addEventListener("scroll", (e) => {
  document.body.style.cssText += `--scrollTop: ${this.scrollY}px`; /* при скроле указываем переменную и передаем тегу Body, при этом важно использовать "+ =", ибо указывает, что мы добавляем стили, к уже имеющимся, а не заменяем, как при просто "=" */
});
gsap.registerPlugin(ScrollTrigger, ScrollSmoother); /*регистрируем плагины*/
ScrollSmoother.create({
  wrapper: ".wrapper" /* обязательно с точкой*/,
  content: ".content" /* обязательно с точкой*/,
});
