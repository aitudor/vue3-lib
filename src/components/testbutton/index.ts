import { App as Application } from "vue";
import TestButton from "./TestButton.vue";
//import Dialog  from "primevue/dialog";

export default {
  install(vueApp: Application) {
    vueApp.component('TestButton', TestButton); 
  }
};

export { TestButton };
