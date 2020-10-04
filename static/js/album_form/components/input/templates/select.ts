

export const select = `
        <div class="mb-4">
            <InputLabel :label="field.label" :required="field.required" />
            <select
                :name="name"
                :multiple="multiSelect"
                :required="field.required"
                v-model="binding"
                class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"                
                :class="{ 'border-red-500': errors }"
            >
                <option v-for="choice in field.choices" :value="choice.value">
                    {{ choice.display_name }}
                </option>
            </select>
            <InputErrors :errors="errors" />
        </div>
`;