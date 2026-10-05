// Runs before CSS: only an explicit saved Dark choice overrides the light default.
(()=>{let t='light';try{if(localStorage.getItem('theme')==='dark')t='dark';}catch{}document.documentElement.dataset.theme=t;document.querySelector('meta[name="theme-color"]').content=t==='dark'?'#0d1512':'#f8faf9';})();
