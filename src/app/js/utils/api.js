import axios from 'axios'

const api = {
    get: endpoint => {
        return new Promise((resolve, reject) => {
            axios
                .get(endpoint, {
                    headers: { Authorization: `Bearer ${localStorage.getItem('identity')}` },
                })
                .then(result => resolve(result.data))
                .catch(err => {
                    if (err && err.response && err.response.data && err.response.data.error) {
                        err.description = err.response.data.error
                        reject(err)
                    } else {
                        reject(err)
                    }
                })
        })
    },

    post: (endpoint, body) => {
        return new Promise((resolve, reject) => {
            axios
                .post(endpoint, body, {
                    headers: { Authorization: `Bearer ${localStorage.getItem('identity')}` },
                })
                .then(result => resolve(result.data))
                .catch(err => {
                    if (err && err.response && err.response.data && err.response.data.error) {
                        err.description = err.response.data.error
                        reject(err)
                    } else {
                        reject(err)
                    }
                })
        })
    },

    put: (endpoint, body) => {
        return new Promise((resolve, reject) => {
            axios
                .put(endpoint, body, {
                    headers: { Authorization: `Bearer ${localStorage.getItem('identity')}` },
                })
                .then(result => resolve(result.data))
                .catch(err => {
                    if (err && err.response && err.response.data && err.response.data.error) {
                        err.description = err.response.data.error
                        reject(err)
                    } else {
                        reject(err)
                    }
                })
        })
    },

    patch: (endpoint, body) => {
        return new Promise((resolve, reject) => {
            axios
                .patch(endpoint, body, {
                    headers: { Authorization: `Bearer ${localStorage.getItem('identity')}` },
                })
                .then(result => resolve(result.data))
                .catch(err => {
                    if (err && err.response && err.response.data && err.response.data.error) {
                        err.description = err.response.data.error
                        reject(err)
                    } else {
                        reject(err)
                    }
                })
        })
    },

    del: (endpoint, body) => {
        return new Promise((resolve, reject) => {
            axios
                .delete(endpoint, body, {
                    headers: { Authorization: `Bearer ${localStorage.getItem('identity')}` },
                })
                .then(result => resolve(result.data))
                .catch(err => {
                    if (err && err.response && err.response.data && err.response.data.error) {
                        err.description = err.response.data.error
                        reject(err)
                    } else {
                        reject(err)
                    }
                })
        })
    },
}

export default api
