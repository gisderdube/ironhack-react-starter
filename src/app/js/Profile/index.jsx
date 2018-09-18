import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

import api from '../utils/api'

class Profile extends Component {
    constructor(props) {
        super(props)

        this.state = {
            age: '',
            profession: '',
            favoriteFood: '',
            allergies: {
                gluten: false,
                lactose: false,
                peanuts: false,
            },
            language: '', // english, german, japanese, italian, russian, polish, persian, french, norwegian
            eyeColor: '', // green, blue, brown, red
        }

        this._inputChangeHandler = this._inputChangeHandler.bind(this)
        this._allergyChangeHandler = this._allergyChangeHandler.bind(this)
        this._submitData = this._submitData.bind(this)
    }

    render() {
        if (!this.props.user) return <Redirect to="/auth/sign-in" /> // this is actually the protection

        return (
            <div className="container">
                <img src={this.props.user.profilePicture} height="200px" />
                <br />
                {this.props.user._id}
                <br />
                {this.props.user.email}
                <br />
                <h1>GIVE ME MORE INFORMATION, SO I CAN SELL IT:</h1>
                <input
                    type="number"
                    value={this.state.age}
                    placeholder="age"
                    onChange={evt => this._inputChangeHandler('age', evt.target.value)}
                />
                <br />
                <input
                    type="text"
                    value={this.state.profession}
                    placeholder="profession"
                    onChange={evt => this._inputChangeHandler('profession', evt.target.value)}
                />
                <br />
                <input
                    type="text"
                    value={this.state.favoriteFood}
                    placeholder="favorite food"
                    onChange={evt => this._inputChangeHandler('favoriteFood', evt.target.value)}
                />
                <br />
                <label htmlFor="">
                    <input
                        type="checkbox"
                        value={this.state.allergies.gluten}
                        onChange={evt => this._allergyChangeHandler(`gluten`)}
                    />
                    Gluten
                </label>
                <br />
                <label htmlFor="">
                    <input
                        type="checkbox"
                        value={this.state.allergies.lactose}
                        onChange={evt => this._allergyChangeHandler(`lactose`)}
                    />
                    Lactose
                </label>
                <br />
                <label htmlFor="">
                    <input
                        type="checkbox"
                        value={this.state.allergies.peanuts}
                        onChange={evt => this._allergyChangeHandler(`peanuts`)}
                    />
                    Peanuts
                </label>
                <br />
                <select
                    value={this.state.language}
                    onChange={evt => this._inputChangeHandler('language', evt.target.value)}
                >
                    <option disabled key="n" value="">
                        Please select your language
                    </option>
                    <option value="english">English</option>
                    <option value="german">German</option>
                    <option value="japanese">Japanese</option>
                    <option value="italian">Italian</option>
                    <option value="russian">Russian</option>
                    <option value="polish">Polish</option>
                    <option value="french">French</option>
                    <option value="persian">Persian</option>
                    <option value="romanian">Romanian</option>
                    <option value="norwegian">Norwegian</option>
                </select>
                <br />
                <label>
                    <input
                        type="radio"
                        value="green"
                        checked={this.state.eyeColor === 'green'}
                        onChange={evt => this._inputChangeHandler('eyeColor', evt.target.value)}
                    />
                    Green
                </label>
                <br />
                <label>
                    <input
                        type="radio"
                        value="blue"
                        checked={this.state.eyeColor === 'blue'}
                        onChange={evt => this._inputChangeHandler('eyeColor', evt.target.value)}
                    />
                    Blue
                </label>
                <br />
                <label>
                    <input
                        type="radio"
                        value="brown"
                        checked={this.state.eyeColor === 'brown'}
                        onChange={evt => this._inputChangeHandler('eyeColor', evt.target.value)}
                    />
                    brown
                </label>
                <br />
                <label>
                    <input
                        type="radio"
                        value="red"
                        checked={this.state.eyeColor === 'red'}
                        onChange={evt => this._inputChangeHandler('eyeColor', evt.target.value)}
                    />
                    red
                </label>
                <button onClick={this._submitData}>SUBMIT</button>
            </div>
        )
    }

    _submitData() {
        console.log('submitting Data', this.state)
        // api.post('/api/your-endpoint', {
        //     profession: this.state.profession,
        //     age: this.state.age,
        //     favoriteFood: this.state.favoriteFood,
        //     ...
        // })
        // .then(result => {
        //     console.log(result)
        // })
    }

    _inputChangeHandler(key, newValue) {
        this.setState({
            [key]: newValue,
        })
    }

    _allergyChangeHandler(key) {
        const newAllergies = { ...this.state.allergies }
        newAllergies[key] = !newAllergies[key]
        this.setState({ allergies: newAllergies })
    }
}

export default Profile
