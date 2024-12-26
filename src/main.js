// import { add } from './tools';
// console.log(add(1, 2));

// import './style/style.less';
// import './style/style.css';
// import img from './images/image1.png';

// const el = document.createElement('div');
// el.className = 'title';
// el.innerHTML = 'webpack5-learning';
// document.body.appendChild(el);

// const imgEl = document.createElement('img');
// imgEl.src = img;
// document.body.appendChild(imgEl);

import App from './App.vue';
import { createApp } from 'vue';

const app = createApp(App);

app.mount('#app');