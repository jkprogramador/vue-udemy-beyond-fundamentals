const vm = Vue.createApp({
    data() {
        return {
            message: 'Hello World!'
        }
    },
    beforeCreate() {
        // No access to data yet
        console.log('beforeCreate() function called!', this.message)
    },
    created() {
        // Data has been initialized
        console.log('created() function called!', this.message)
    },
    beforeMount() {
        // Application does not have access to template yet
        console.log('beforeMount() function called!', this.$el)
    },
    mounted() {
        // Template has been compiled and inserted into DOM
        console.log('mounted() function called!', this.$el)
    },
    beforeUpdate() {
        // Whenever an update in data occurs, but before change is applied to template
        console.log('beforeUpdate() function called!')
    },
    updated() {
        console.log('updated() function called!')
    },
    beforeUnmount() {
        // Data is still available
        console.log('beforeUnmount() function called!')
    },
    unmounted() {
        // Any directives and events are gone
        console.log('unmounted() function called!')
    }
})

vm.mount('#app')

setTimeout(() => {
    vm.unmount()
}, 5000)