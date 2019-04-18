import React, { Component } from 'react'

import { Table } from 'semantic-ui-react'



class Tabler extends Component {


    makeRow = (task, i) => {
        return (
            <Table.Row key={`${i}`}>
                <Table.Cell>{task}</Table.Cell>
                <Table.Cell>INCOMPLETE</Table.Cell>
            </Table.Row>
        )
    }

    makeRows = (items) => items.map((item, i) => {
        return this.makeRow(item, i)
    })



    render() {
        return (
            <Table basic>
                <Table.Body>
                    {this.makeRows(this.props.items || [])}
                </Table.Body>
            </Table>
        )
    }
}

export default Tabler
