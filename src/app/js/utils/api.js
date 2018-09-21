import axios from 'axios'

// EXAMPLE:
// // 1. normal get request
// api.get('/api').then(data => {
//     console.log(data)
// })

// // 2. post request with body
// api.post('/api/beer/new', { name: 'Augustiner' }).then(data => {
//     console.log(data)
// })

// // 3. post request with body with an error
// api.post('/api/beer/new', { name: 'Augustiner' })
//     .then(data => {
//         console.log(data)
//     })
//     .catch(err => {
//         console.log(err.description) // display that on your page
//     })

// // 4. post request with files
// api.post('/api/artwork/new', { name: 'Whatever' }, { artworkPicture: this.state.artworkPicture }).then(
//     // use req.files.artworkPicture in the BACKEND
//     data => {
//         console.log(data)
//     }
// )

const bodyRequest = (type, endpoint, body, files, uploadProgress) => {
    return new Promise((resolve, reject) => {
        let data

        if (files) {
            data = new FormData()

            Object.keys(body).forEach(key => {
                data.append(key, body[key])
            })

            Object.keys(files).forEach(key => {
                data.append(key, files[key])
            })
        } else {
            data = body
        }

        axios[type](endpoint, data, {
            headers: { Authorization: `Bearer ${localStorage.getItem('identity')}` },
            onUploadProgress:
                uploadProgress && typeof uploadProgress === 'function' ? uploadProgress : undefined,
        })
            .then(result => {
                if (result.token) localStorage.setItem('identity', result.token)
                resolve(result.data)
            })
            .catch(err => {
                if (err && err.response && err.response.data && err.response.data.error) {
                    err.description = err.response.data.error
                    reject(err)
                } else {
                    reject(err)
                }
            })
    })
}

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

    post: (endpoint, body, files, uploadProgress) =>
        bodyRequest('post', endpoint, body, files, uploadProgress),
    put: (endpoint, body, files, uploadProgress) =>
        bodyRequest('put', endpoint, body, files, uploadProgress),
    patch: (endpoint, body, files, uploadProgress) =>
        bodyRequest('patch', endpoint, body, files, uploadProgress),
    delete: (endpoint, body, files, uploadProgress) =>
        bodyRequest('delete', endpoint, body, files, uploadProgress),
}

export default api
