import { App } from "vue";
import {
  Button,
  List,
  Cell,
  CellGroup,
  NavBar,
  Popup,
  Slider,
  Field,
  Switch,
  Uploader,
  PullRefresh,
  Progress,
  Step,
  Steps,
  Swipe,
  SwipeItem,
  Empty,
  Badge,
  Circle,
  Toast,
  Checkbox,
  CheckboxGroup,
  PasswordInput,
  NumberKeyboard,
  RadioGroup,
  Radio,
  Search,
  Rate,
  Stepper,
  Calendar,
  ActionSheet,
  Dialog,
  DropdownMenu,
  DropdownItem,
  Loading,
  Notify,
  Overlay,
  ShareSheet,
  SwipeCell,
  Collapse,
  CollapseItem,
  ImagePreview,
  Lazyload,
  NoticeBar,
  Popover,
  Tag,
  ActionBar,
  ActionBarIcon,
  ActionBarButton,
  Grid,
  GridItem,
  IndexBar,
  IndexAnchor,
  Tab,
  Tabs,
  ConfigProvider,
  Form
} from "vant";
import "vant/lib/index.css";

export function registerVant(app: App): void {
  app.use(Button);
  app.use(List);
  app.use(Cell);
  app.use(CellGroup);
  app.use(NavBar);
  app.use(Popup);
  app.use(Slider);
  app.use(Field);
  app.use(Switch);
  app.use(Uploader);
  app.use(PullRefresh);
  app.use(Progress);
  app.use(Step);
  app.use(Steps);
  app.use(Swipe);
  app.use(SwipeItem);
  app.use(Empty);
  app.use(Badge);
  app.use(Circle);
  app.use(Toast);
  app.use(Checkbox);
  app.use(CheckboxGroup);
  app.use(PasswordInput);
  app.use(NumberKeyboard);
  app.use(Radio);
  app.use(RadioGroup);
  app.use(Search);
  app.use(Rate);
  app.use(Stepper);
  app.use(Calendar);
  app.use(ActionSheet);
  app.use(Dialog);
  app.use(DropdownMenu);
  app.use(DropdownItem);
  app.use(Loading);
  app.use(Notify);
  app.use(Overlay);
  app.use(ShareSheet);
  app.use(SwipeCell);
  app.use(Collapse);
  app.use(CollapseItem);
  app.use(ImagePreview);
  app.use(Lazyload, { lazyComponent: true });
  app.use(NoticeBar);
  app.use(Popover);
  app.use(Tag);
  app.use(ActionBar);
  app.use(ActionBarIcon);
  app.use(ActionBarButton);
  app.use(Grid);
  app.use(GridItem);
  app.use(IndexBar);
  app.use(IndexAnchor);
  app.use(Tab);
  app.use(Tabs);
  app.use(ConfigProvider);
  app.use(Form);
}
