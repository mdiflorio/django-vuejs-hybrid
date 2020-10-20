

import Vue from "vue";
import { Component, Prop } from 'vue-property-decorator';

@Component({
    name: "Heading",
    template: `
        <h1 class="text-2xl text-gray-700 mb-3">{{ text }}</h1>
    `
})
export default class Heading extends Vue {

    @Prop()
    text!: string;

}