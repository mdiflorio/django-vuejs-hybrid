

export const select = `
        <div class="form-group">
            <label style="font-weight: bold">
                {{ field.label }}
                <span v-if="field.required">*</span></label
            >
            <select
                :name="name"
                :multiple="multiSelect"
                :required="field.required"
                v-model="binding"
                :class="{'form-control': true, 'is-invalid': errors}"
            >
                <option v-for="choice in field.choices" :value="choice.value">
                    {{ choice.display_name }}
                </option>
            </select>
        </div>
`