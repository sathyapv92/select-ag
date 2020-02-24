

import React, { Component } from 'react';

import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import 'ag-grid-enterprise';

class IlmMatchingHeader extends Component {

    componentDidMount() {
        fetch('https://api.myjson.com/bins/ly7d1')
            .then(result => result.json())
            .then(rowData => this.props.setState({ rowData }))
    }
    onButtonClick = e => {
        const selectedNodes = this.gridApi.getSelectedNodes()
        const selectedData = selectedNodes.map(node => node.data)
        console.log(selectedData);
        const selectedDataStringPresentation = selectedData.map(node => node.make + ' ' + node.model).join(', ')
        alert(`Selected nodes: ${selectedDataStringPresentation}`)
    }
    constructor(props) {
        super(props);
        this.state = {
            columnDefs: [{

                headerName: "Make",
                field: "make",
                checkboxSelection: true

            }, {
                headerName: "Price", field: "price"
            }, {
                headerName: "Model", field: "model", rowGroup: true, rowGroupIndex: 0, hide: true
            }
            ],
            autoGroupColumnDef: {
                headerName: "Model",
                field: "model",
                cellRenderer: 'agGroupCellRenderer',
                cellRendererParams: {
                    checkbox: true
                }
            }
            ,
            rowData: [{
                make: "Toyota", model: "Celica", price: 35000
            }, {
                make: "Ford", model: "Mondeo", price: 32000
            }, {
                make: "Porsche", model: "Boxter", price: 72000
            }]
        }
    }
    onRowSelected(event) {
        if (event != null && event != undefined) {
            window.alert("row " + " selected = " + event.node.selected);
        }
        //window.alert("row " + event.node.data.athlete + " selected = " + event.node.selected);
    }
    onSelectionChanged(event) {
        var rowCount = event.api.getSelectedNodes().length;
        window.alert("selection changed, " + rowCount + " rows selected");
    }
    render() {

        return (
            <div
                className="ag-theme-balham"
                style={{
                    height: '500px',
                    width: '600px'
                }}
            >
                <button onClick={this.onButtonClick}>Get selected rows</button>

                <AgGridReact
                    onGridReady={params => this.gridApi = params.api}
                    groupSelectsChildren={true}
                    autoGroupColumnDef={this.state.autoGroupColumnDef}
                    rowSelection="multiple"
                    columnDefs={this.state.columnDefs}
                    rowData={this.state.rowData}
                    onSelectionChanged={this.onSelectionChanged.bind(this)}
                    onRowSelected={this.onRowSelected.bind(this)}>

                </AgGridReact>
            </div>
        );
    }
}
export default IlmMatchingHeader;
/*import React from 'react';

import { Button } from 'reactstrap';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import 'ag-grid-enterprise';
const autoGroupColumnDef = {
    headerName: "matchId",
    field: "matchId",
    cellRenderer: 'agGroupCellRenderer',
    cellRendererParams: {
        checkbox: true
    }
}
const style = {
    width: '1000px',
    height: '1000px'
}

const coldef = [{

    headerName: "Match Id",
    field: "matchId",
    checkboxSelection: true,
    rowGroup: true, rowGroupIndex: 0,
    hide: true
}, {
    headerName: "Model", field: "model"
}, {
    headerName: "Price", field: "price"
}];
const rowData = [{
    make: "Toyota", model: "Celica", price: 35000, matchId: 1
}, {
    make: "Ford", model: "Mondeo", price: 32000, matchId: 2
}, {
    make: "Porsche", model: "Boxter", price: 72000, matchId: 1
}, {
    make: "x", model: "Celica", price: 35000, matchId: 3
}];
function IlmMatchingHeader() {

    return (
        <div className="App">




            <div
                className="ag-theme-balham"
                style={style}
            >
                <AgGridReact rowSelection="multiple"
                    columnDefs={coldef}
                    groupSelectsChildren={true}
                    autoGroupColumnDef={autoGroupColumnDef}
                    rowData={rowData}>
                </AgGridReact>
            </div>

        </div>
    );
}

export default IlmMatchingHeader;*/

