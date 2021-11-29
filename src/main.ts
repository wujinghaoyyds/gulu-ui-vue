import {createApp} from 'vue';
import App from './App.vue';
import './index.css';
import {createWebHashHistory, createRouter} from 'vue-router';
import Wu from './components/Wu.vue';
import Wu2 from './components/Wu2.vue';

const history = createWebHashHistory();
const router = createRouter(
    {
        history: history,
        routes: [
            {path: '/', component: Wu},
            {path: '/xxx', component: Wu2},
        ]
    }
);
const app = createApp(App);
app.use(router);
app.mount('#app');
