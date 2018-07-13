import React from "react"

import { Link } from "react-router-dom"
import { Button } from "react-bootstrap"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { push } from "react-router-redux"
// import { setProfileDetails } from "./../../actions/myProfile-actions"
import _ from "lodash"

class Login extends React.Component {
  constructor(props) {
    super(props)
  }
  state = {}
  fetch = async () => {}
  componentWillMount() {
  }
  componentDidMount = async () => {}

  render() {
    return (
      <div>
        login
      </div>
    )
  }
  
}
const mapStateToProps = state => { return state }
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {},
    dispatch
  )
export default connect(mapStateToProps, mapDispatchToProps)(Login)
