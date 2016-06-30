'use strict'

import React, { Component, PropTypes } from 'react'
import axios from 'axios';
import Paper from 'material-ui/Paper'
import RaisedButton from 'material-ui/RaisedButton'
import FlatButton from 'material-ui/FlatButton'
import FontIcon from 'material-ui/FontIcon'
import { connect } from 'react-redux'
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card'
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton'
import { getAssessmentTeam } from '../actions/assessmentTeamActions'

const styles = {
  paperStyle: {
    height: '100%',
    overflow: 'scroll'
  },
  content: {
    padding: 16
  },
  gradingPane: {
    backgroundColor: '#64B5F6'
  },
  skinny: {
    margin: 0,
    marginBottom: 15
  },
  noTopPadding: {
    paddingTop: 0
  },
  infoCard: {
    backgroundColor: '#1E88E5'
  },
  gradingPane: {
    backgroundColor: '#64B5F6'
  },
  gradingInfo: {
    color: '#FFF',
    padding: 16
  },
  gradingTitle: {
    fontSize: 24,
    fontWeight: '400'
  },
  gradingSubtitle: {
    fontSize: 16,
    color: '#F5F5F5',
    fontWeight: '300'
  }
}

const SAMPLE_SPEC = {
  "Fake Library App": [
    "static files (from the static folder in the public folder) on /files route",
    "handles internal server errors",
    "handles custom errors",
  ],
  "Fake Library App /api/books": [
    "GET all",
    "POST one"
  ]
}

class GraderStudents extends Component {

  // componentWillReceiveProps () {
  //   this.props.dispatch(getAssessmentTeam(1))
  // }

  componentWillMount () {
    this.props.dispatch(getAssessmentTeam(1))
  }

  renderStudents () {
    
    if (!this.props.teamFetching) {
      console.log("props", this.props)
      return this.props.team.students.map((student, i) => {
        return (
          <Card key={i} style={Object.assign({}, styles.infoCard, styles.skinny)}>
            <div style={styles.gradingInfo}>
              <a href="#" style={styles.gradingSubtitle}>
                <img src={student.photo} alt=""/>
                {student.name}
              </a>
            </div>
          </Card>
        )
      })
    }
  }

  render () {
    if (this.props.teamFetching) {
      console.log('loading????')
      return <h1>Loading...</h1>
    } else {
      console.log('not loading')
      return (
        <div style={Object.assign(styles.gradingPane, styles.paperStyle)}>
          <div style={styles.content}>
            {this.renderStudents()}
          </div>
        </div>
      )
    }
  }
}

const mapStateToProps = state => {
  const { assessmentTeam } = state
  const { teamFetching, team } = assessmentTeam || {
    teamFetching: true,
    team: {}
  }
  return {
    teamFetching,
    team
  }
}

export default connect(mapStateToProps)(GraderStudents)