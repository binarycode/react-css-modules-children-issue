import ReactDOM from 'react-dom'
import React, { Component, PropTypes } from 'react'

import Table from './components/Table/Table'
import Row from './components/Row/Row'
import Cell from './components/Cell/Cell'
import PictureTile from './components/PictureTile/PictureTile'

class TestTable extends Component {

  render () {

    return (
      <div>

        <Table>
          <Row>
            <Cell />
            <Cell />
          </Row>
        </Table>

        <PictureTile />

      </div>
    )
  }
}


ReactDOM.render(<TestTable />, document.getElementById('root'))
