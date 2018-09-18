import { observable, action, toJS } from 'mobx'
import jwtDecode from 'jwt-decode'

class UserStore {
    @observable
    _id = null

    @observable
    email = null

    @observable
    profilePicture = null

    @action
    setUser = () => {
        const token = localStorage.getItem('identity')
        if (token) {
            const decoded = jwtDecode(token)
            delete decoded.iat

            this._id = decoded._id
            this.email = decoded.email
            this.profilePicture = decoded.profilePicture
        }
    }

    @action
    resetUser = () => {
        this._id = null
        this.email = null
        this.profilePicture = null
    }
}

export default new UserStore()
