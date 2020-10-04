

export const checkbox = `
        <div class="form-group">
            <div class="form-check">
                <input
                    :name="name"
                    :class="{checkboxinput: true, 'form-check-input': true, 'is-invalid': errors}"
                    :type="fieldType"
                    v-model="binding"
                />
                <InputLabel :label="field.label" :required="field.required" />
                <InputErrors :errors="errors" />
            </div>
        </div>
`;