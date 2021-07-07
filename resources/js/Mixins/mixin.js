export default {
    methods: {
        // FormData生成
        createFormData(data) {
            const form = new FormData();

            Object.keys(data).forEach(key => {
                const value = data[key];
                if (Array.isArray(value)) {
                    value.forEach(entry => {
                        form.append(key + '[]', entry);
                    });
                } else {
                    form.append(key, value);
                }
            });
            return form;
        }
    }
  }
