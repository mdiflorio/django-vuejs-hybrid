export const standard = `
        <div class="form-group">
            <label>
                {{ field.label }}
                <span v-if="field.required">*</span></label
            >
            <input
                :name="name"
                :class="{ 'form-control': true, 'is-invalid': errors }"
                :type="fieldType"
                v-model="binding"
                :required="field.required"
            />
            <div class="invalid-feedback" v-for="error in errors">
                {{ error }}
            </div>
        </div>
`;