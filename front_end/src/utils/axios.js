const VueAxios = {
    vm: {},
    install(app, instance) {
        if (this.installed) {
            return
        }
        this.installed = true
        if (!instance) {
            console.error('You have to install axios')
            return
        }

        app.axiso = instance
        Object.defineProperties(app.prototype, {
            axios: {
                get: function get() {
                    return instance
                }
            },
            $http: {
                get: function get() {
                    return instance
                }
            }
        })
    }
}

export {
    VueAxios
}