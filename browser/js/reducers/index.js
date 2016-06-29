'use strict'

import session from './session'
import userAssessments from './userAssessments'
import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

const rootReducer = combineReducers({
  session,
  userAssessments,
  routing: routerReducer
})

export default rootReducer
