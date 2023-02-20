import { createApp } from 'vue'
import './styles/base.scss'
import App from './App.vue'
// import store from './store.js';
import store from './store/index.js'
import router from './router.js';

// creating app
const app = createApp(App);

// import global components
import BaseButton from './components/ui/BaseButton.vue';
import BaseHeading from './components/ui/BaseHeading.vue';
import BaseDialog from './components/ui/BaseDialog.vue';
import FormError from './components/ui/FormError.vue';

app
.component('BaseButton', BaseButton)
.component('BaseHeading', BaseHeading)
.component('BaseDialog', BaseDialog)
.component('FormError', FormError)

app.use(store);
app.use(router);

app.mount('#app')
