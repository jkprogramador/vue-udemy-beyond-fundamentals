const vm = Vue.createApp({
    data() {
        return {
            message: 'Hello World!'
        }
    }
})

setTimeout(() => {
    vm.mount('#app')
}, 3000)