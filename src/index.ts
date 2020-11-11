import { App as Application, Plugin} from 'vue';
import TestButtonPlugin from './components/testbutton';
import { Dialog } from 'primevue/dialog';

const AppPlugin = {
  install(vueApp: Application) {
    vueApp.use(TestButtonPlugin);
    vueApp.component('Dialog', Dialog);
  }
};

export default AppPlugin;
