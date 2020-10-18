import Vue from "vue";
import { Component, Prop } from 'vue-property-decorator';

@Component({
    name: "InputErrors",
    template: `
        <div v-if="errors">
            <p class="m-3 text-red-500 italic" v-for="error in errors">
                {{ error }}
            </p>
        </div>
    `
})
export default class InputErrors extends Vue {
    @Prop()
    errors!: Array<string>;
}