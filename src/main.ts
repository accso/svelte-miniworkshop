import './assets/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

// Only comment in the one you are working on:
import App from './task-1/App.svelte';
// import App from './task-2/App.svelte';
// import App from './task-3/App.svelte';
// import App from './final/App.svelte';

const app = new App({
  target: document.getElementById('app'),
});

export default app;
