import { observable, action, toJS } from 'mobx'
import jwtDecode from 'jwt-decode'

class UserStore {
    @observable
    id = null

    @observable
    email = null

    @observable
    profilePicture = null

    @action
    setUser = () => {
        console.log('BEFORE', toJS(this))
        const token = localStorage.getItem('identity')
        if (token) {
            const decoded = jwtDecode(token)
            delete decoded.iat

            this.id = decoded._id
            this.email = decoded.email
            this.profilePicture = decoded.profilePicture
        }
        console.log('AFTER', toJS(this))
    }
}

export default new UserStore()
