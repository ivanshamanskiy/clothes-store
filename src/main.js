import { createApp } from "vue";
import "./styles/base.scss";
import App from "./App.vue";
// import store from './store.js';
import store from "./store/index.js";
import router from "./router.js";

// import global components
import BaseButton from "./components/ui/BaseButton.vue";
import BaseHeading from "./components/ui/BaseHeading.vue";
import BaseDialog from "./components/ui/BaseDialog.vue";
import FormError from "./components/ui/FormError.vue";
import BaseInput from "./components/ui/BaseInput.vue";
import BaseSpinner from "./components/ui/BaseSpinner.vue";

// creating app
const app = createApp(App);

app
  .component("BaseButton", BaseButton)
  .component("BaseHeading", BaseHeading)
  .component("BaseDialog", BaseDialog)
  .component("FormError", FormError)
  .component("BaseInput", BaseInput)
  .component("BaseSpinner", BaseSpinner);

app.use(store);
app.use(router);

app.mount("#app");
