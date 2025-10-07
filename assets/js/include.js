document.addEventListener('DOMContentLoaded', async () => {
  const inject = async (sel, url) => {
    const el = document.querySelector(sel);
    if (!el) return;
    try { el.innerHTML = await (await fetch(url)).text(); } catch(e) { console.error(e); }
  };
  await inject('[data-include="header"]', '/partials/header.html');
  await inject('[data-include="footer"]', '/partials/footer.html');
});
