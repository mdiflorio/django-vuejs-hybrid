export const standard = `
        <div class="mb-4">
            <InputLabel :label="field.label" :required="field.required" />
            <input
                :name="name"
                :type="fieldType"
                v-model="binding"
                :required="field.required"
                
                class="block appearance-none w-full bg-white 
                border border-gray-400 hover:border-gray-500 
                px-4 py-2  rounded shadow leading-tight 
                focus:outline-none focus:shadow-outline"
                
                :class="{ 'border-red-500': errors }"
            />
            <InputErrors :errors="errors" />
        </div>
`;