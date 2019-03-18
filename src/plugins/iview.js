/**
 * 添加按需加载的插件之后就不可以用下面的方式引入iview了
 */
import Vue from 'vue'
import 'iview/dist/styles/iview.css'
import {
  Badge,
  Button,
  Card,
  Cascader,
  Checkbox,
  Col,
  Row,
  Dropdown,
  DatePicker,
  Form,
  FormItem,
  Icon,
  Input,
  Menu,
  MenuGroup,
  MenuItem,
  Message,
  Modal,
  Tree,
  Table,
  Switch
} from 'iview'

const components = {
  Badge,
  Button,
  Card,
  Cascader,
  Checkbox,
  Col,
  Row,
  Dropdown,
  DatePicker,
  Form,
  FormItem,
  Icon,
  Input,
  Menu,
  MenuGroup,
  MenuItem,
  Message,
  Modal,
  Tree,
  Table
}

const iviewModule = {
  ...components,
  iSwitch: Switch
}

// 循环注册全局组件
Object.keys(iviewModule).forEach(key => {
  Vue.component(key, iviewModule[key])
})

Vue.prototype.$Message = Message
