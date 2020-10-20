export const checkbox = `
        <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2">
                    <input
                        :name="name"
                        class="mr-2 leading-tight"
                        :type="fieldType"
                        v-model="binding"
                    />
                  <span class="text-sm">
                    {{ field.label }}
                  </span>
                </label> 
                <InputErrors :errors="errors" />
        </div>
`;