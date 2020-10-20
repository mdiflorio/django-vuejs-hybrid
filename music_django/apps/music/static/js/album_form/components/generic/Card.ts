

import Vue from "vue";
import { Component, Prop } from 'vue-property-decorator';

@Component({
    name: "Card",
    template: `
        <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <slot></slot> 
        </div>  
    `
})
export default class Card extends Vue {}