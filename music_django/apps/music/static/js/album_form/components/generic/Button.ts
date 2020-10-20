

import Vue from "vue";
import { Component, Prop } from 'vue-property-decorator';

@Component({
    name: "Button",
    template: `
      <button 
          class="bg-blue-500 hover:bg-blue-700 text-white 
          font-bold py-2 px-4 rounded 
          focus:outline-none focus:shadow-outline" 
          :type="submit">
        {{ text }}
      </button>
    `
})
export default class Button extends Vue {

    @Prop()
    text!: string;

    @Prop()
    type!: string;

}