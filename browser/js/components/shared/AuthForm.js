'use strict'

import React, { Component, PropTypes } from 'react'
import Formsy from 'formsy-react'
import Paper from 'material-ui/Paper'
import RaisedButton from 'material-ui/RaisedButton'
import FontIcon from 'material-ui/FontIcon'
import { FormsyText } from 'formsy-material-ui/lib'

const styles = {
  form: {
    marginTop: 50
  },
  paperStyle: {
    width: 300,
    margin: 'auto',
    padding: 20
  },
  button: {
    marginTop: 15
  },
  fullWidth: {
    width: '100%'
  },
  center: {
    textAlign: 'center'
  }
}

export default class AuthForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      canSubmit: true,
    }
  }

  enableButton () {
    this.setState({
      canSubmit: true
    })
  }

  disableButton () {
    this.setState({
      canSubmit: false
    })
  }

  submitForm (data) {
    alert(JSON.stringify(data, null, 4))
  }

  renderGitHubButton () {
    return (
      <div style={styles.fullWidth}>
        <RaisedButton
          label="Sign Up with Github"
          linkButton={true}
          href='/auth/github'
          primary={true}
          style={styles.fullWidth}
          icon={<FontIcon className="fa fa-github" />}
        />
      </div>
    )
  }

  renderLoginForm () {
    return (
      <Paper style={styles.paperStyle}>
        {this.renderGitHubButton()}
        <Formsy.Form
          onValid={this.enableButton.bind(this)}
          onInValid={this.disableButton.bind(this)}
          onValidSubmit={this.submitForm.bind(this)}>
          <FormsyText
            name="email"
            type="email"
            required
            floatingLabelText="Email"
            validations='isEmail'
          />
          <FormsyText
            name="password"
            type="password"
            required
            floatingLabelText="Password"
          />
          <div style={Object.assign(styles.button, styles.fullWidth)}>
            <RaisedButton
              type="submit"
              label='Login'
              secondary={true}
              style={styles.fullWidth}
              disabled={!this.state.canSubmit}
            />
          </div>
        </Formsy.Form>
      </Paper>
    )
  }

  renderSignupForm () {
    return (
      <Paper style={styles.paperStyle}>
        {this.renderGitHubButton()}
        <Formsy.Form
          onValid={this.enableButton.bind(this)}
          onInValid={this.disableButton.bind(this)}
          onValidSubmit={this.submitForm.bind(this)}>
          <FormsyText
            name="name"
            type="name"
            required
            floatingLabelText="Name"
            validations='isWords'
          />
          <FormsyText
            name="email"
            type="email"
            required
            floatingLabelText="Email"
            validations='isEmail'
          />
          <FormsyText
            name="password"
            type="password"
            required
            floatingLabelText="Password"
            validates='minlength:6'
          />
          <div style={Object.assign(styles.button, styles.fullWidth)}>
            <RaisedButton
              type="submit"
              label='Sign Up'
              secondary={true}
              style={styles.fullWidth}
              disabled={!this.state.canSubmit}
            />
          </div>
        </Formsy.Form>
      </Paper>
    )
  }

  render () {
    let form
    if (this.props.location.pathname === 'login') {
      form = this.renderLoginForm()
    } else if (this.props.location.pathname === 'signup') {
      form = this.renderSignupForm()
    }

    return (
      <div style={styles.form}>
        {form}
      </div>
    )
  }
}

// <form id="login-form" name="loginForm" ng-submit="loginForm.$valid && sendLogin(login)">

//     <alert type="danger" ng-show="error">
//         {{ error }}
//     </alert>

//     <div class="form-group">
//         <label for="email">Email address</label>
//         <input type="text" ng-model="login.email" class="form-control" id="email" placeholder="Enter email">
//     </div>
//     <div class="form-group">
//         <label for="login-password">Password</label>
//         <input type="password" ng-model="login.password" class="form-control" id="login-password" placeholder="Password">
//     </div>
//     <button type="submit" class="btn btn-default">Submit</button>
// </form>
