const vm = Vue.createApp({
    data() {
        return {
            message: 'Hello World!'
        }
    },
    template: `{{ message }}`
})

vm.mount('#app')