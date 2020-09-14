import React, { Component } from 'react'
export default class Login extends Component {

    constructor(props){
        super(props)
        this.setState({
            email:"",
            password: "",
            LoginErrors:""

        })
    }
    handleSubmit(e){
        const { email, password } = this.state  
    }
    render() {
        return (
            <div>
                <div className="col-md-6 m-auto">
                  <form>
                    <div className="form-group">
                      <label htmlFor="email">Email address</label>
                      <input type="email" name="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" />
                      <small id="emailHelp" className="form-text text-muted">
                        Email that you have used while registration.
                      </small>
                    </div>
                    <div className="form-group">
                      <label htmlFor="password">Password</label>
                      <input type="password" name="password" className="form-control" id="password" placeholder="Password" />
                    </div>
                    <div className="form-check">
                      <input type="checkbox" name="checkbox" className="form-check-input" id="remember" />
                      
                    </div>
                    <button type="submit" className="btn btn-primary float-right" onSubmit={this.handleSubmit}>
                      Login
                    </button>
                  </form>
                </div>
            </div>
        )
    }
}
