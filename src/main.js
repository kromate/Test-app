import { createApp } from 'vue'
import App from './App.vue'
import {registerComponents} from './plugin/registerGlobally'
import router from './router';

import './assets/style/index.css'

const init = async ()=>{

    const app = createApp(App)
await registerComponents(app)
app.use(router).mount('#app')
}

init()


