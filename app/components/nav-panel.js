import Component from "@glimmer/component";
import { inject as service } from "@ember/service";

export default class NavPanelComponent extends Component {
  @service router ;
  defaultClass = "px-3 py-2 rounded-md text-sm font-medium focus:outline-none";
  activeClass = `${this.defaultClass} text-white bg-gray-900 focus:text-white focus:bg-gray-700`;
  notActiveClass = `${this.defaultClass} text-gray-300 hover:text-white hover:bg-gray-700  focus:text-white focus:bg-gray-700`;
}
