import React from "react"

import { Link } from "react-router-dom"
import { Button } from "react-bootstrap"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { push } from "react-router-redux"
import _ from "lodash"

import Dashboard from "./../dashboard/dashboard"

class Department extends React.Component {
  constructor(props) {
    super(props)
  }
  state = {}
  fetch = async () => {}
  componentWillMount() {
    this.fetch()
  }
  componentDidMount = async () => {}

  render() {
    return (
      <div>
        <Dashboard />
        <h3>Department</h3>
        <hr />
        <Button>Add New</Button>
        <hr />
        <table border="1" cellpadding="10" cellspacing="0">
          <tr>
            <td>Department Name</td>
            <td>Action</td>
          </tr>
          <tr>
            <td>Kitchen</td>
            <td><Button>Edit</Button> <Button>Delete</Button></td>
          </tr>
          <tr>
            <td>Dining</td>
            <td><Button>Edit</Button> <Button>Delete</Button></td>
          </tr>
          <tr>
            <td colspan="5">No item yet</td>
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

export default connect(mapStateToProps, mapDispatchToProps)(Department)