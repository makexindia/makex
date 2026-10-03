// Runs before CSS. Storage can be unavailable; CSS also follows the system theme.
(()=>{try{const t=localStorage.getItem('theme');if(t==='light'||t==='dark')document.documentElement.dataset.theme=t;}catch{}})();
