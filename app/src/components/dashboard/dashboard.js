import React from "react"

import { Link } from "react-router-dom"
import { Button } from "react-bootstrap"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { push } from "react-router-redux"
import _ from "lodash"

class Dashboard extends React.Component {
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
        <ul>
          <li><Link to='./inventory'>Inventory</Link></li>
          <li><Link to='./items'>Items</Link></li>
          <li><Link to='./categories'>Categories</Link></li>
          <li><Link to='./department'>Department</Link></li>
          <li><Link to='./reports'>Reports</Link></li>
        </ul>
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
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
