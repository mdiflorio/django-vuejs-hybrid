import Vue from "vue";
import { Component, Prop } from 'vue-property-decorator';

@Component({
    name: "InputLabel",
    template: `
        <label class="block text-gray-700 text-sm font-bold mb-2">
            {{ label }} <span v-if="required">*</span>
        </label>
    `
})
export default class InputLabel extends Vue {
    @Prop()
    label!: string;

    @Prop({default: false})
    required!: boolean;
}