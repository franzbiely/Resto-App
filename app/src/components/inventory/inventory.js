import React from "react"

import { Link } from "react-router-dom"
import { Button } from "react-bootstrap"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { push } from "react-router-redux"
import _ from "lodash"

import Dashboard from "./../dashboard/dashboard"

class Inventory extends React.Component {
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
        <h3>Inventory</h3>
        <hr />
        <Button>Add New</Button>
        <hr />
        <table border="1" cellpadding="10" cellspacing="0">
          <tr>
            <td>Item Name</td>
            <td>Source</td>
            <td>Qty</td>
            <td>Price per Piece</td>
            <td>Total Price</td>
            <td>Department</td>
            <td>Date</td>
            <td>Action</td>
          </tr>
          <tr>
            <td>Burger Buns</td>
            <td>SM</td>
            <td>80</td>
            <td>P10</td>
            <td>P800</td>
            <td>Kitchen</td>
            <td>Today</td>
            <td><Button>Edit</Button> <Button>Delete</Button></td>
          </tr>
          <tr>
            <td colspan="8">No item yet</td>
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

export default connect(mapStateToProps, mapDispatchToProps)(Inventory)