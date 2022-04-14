import { App } from "vue";
import { registerVant } from "./register-vant";
import { registerVantIcon } from "./vantIcon/register-vantIcon";

export function globalRegister(app: App): void {
  app.use(registerVant);
  app.use(registerVantIcon);
}
