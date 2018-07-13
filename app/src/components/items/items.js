import React from "react"

import { Link } from "react-router-dom"
import { Button } from "react-bootstrap"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { push } from "react-router-redux"
import _ from "lodash"

import Dashboard from "./../dashboard/dashboard"

class Items extends React.Component {
  constructor(props) {
    super(props)
  }
  state = {}
  fetch = async () => {}
  componentWillMount() {}
  componentDidMount = async () => {}

  render() {
    return (
      <div>
        <Dashboard />
        <hr />
        <table border="1">
          <tr>
            <td>items</td>
          </tr>
        </table>
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

export default connect(mapStateToProps, mapDispatchToProps)(Items)