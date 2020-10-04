

export const checkbox = `
        <div class="form-group">
            <div class="form-check">
                <input
                    :name="name"
                    :class="{checkboxinput: true, 'form-check-input': true, 'is-invalid': errors}"
                    :type="fieldType"
                    v-model="binding"
                />
                <label style="font-weight: bold" class="form-check-label">
                    {{field.label}}
                </label>
                <div class="invalid-feedback" v-for="error in errors">
                    {{ error }}
                </div>
            </div>
        </div>
`