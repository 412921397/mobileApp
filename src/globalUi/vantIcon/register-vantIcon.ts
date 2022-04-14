import { App } from "vue";
import { Icon } from "vant";

export function registerVantIcon(app: App): void {
  app.use(Icon);
}
