import React from 'react';
import logo from './logo.svg';
import './App.css';
import IlmMatchingHeader from './IlmMatchingHeader/IlmMatchingHeader';
import { Button } from 'reactstrap';
function App() {
  const expected = {

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
    }],
    onRowSelected(event) {
      if (event != null && event != undefined) {
        window.alert("row " + " selected = " + event.node.selected);
      }
      //window.alert("row " + event.node.data.athlete + " selected = " + event.node.selected);
    },
    /*onButtonClick = e => {
      const selectedNodes = expected.api.getSelectedNodes()
      const selectedData = selectedNodes.map(node => node.data)
      console.log(selectedData);
      const selectedDataStringPresentation = selectedData.map(node => node.make + ' ' + node.model).join(', ')
      alert(`Selected nodes: ${selectedDataStringPresentation}`)
    },*/
    onSelectionChanged(event) {
      console.log(event.api.getSelectedNodes());
      const selectedNodes = event.api.getSelectedNodes();
      const selectedData = selectedNodes.map(node => node.data)
      console.log(selectedData);
      // window.alert("selection changed, " + rowCount + " rows selected");
    }
  }
  return (
    <div className="App">
      <div className="rowC">
        <IlmMatchingHeader data={expected} ></IlmMatchingHeader>
        <IlmMatchingHeader data={expected}></IlmMatchingHeader>
      </div>


    </div>
  );
}

export default App;
/*import { Mosaic } from 'react-mosaic-component';
import '@blueprintjs/core/lib/css/blueprint.css';
import '@blueprintjs/icons/lib/css/blueprint-icons.css';
import './app.css';

const ELEMENT_MAP: { [viewId: string]: JSX.Element } = {
  a: <div>Left Window</div>,
  b: <div>Top Right Window</div>,
  c: <div>Bottom Right Window</div>,
};

export const app = (
  <div id="app">
    <Mosaic<string>
      renderTile={(id) => ELEMENT_MAP[id]}
      initialValue={{
        direction: 'row',
        first: 'a',
        second: {
          direction: 'column',
          first: 'b',
          second: 'c',
        },
        splitPercentage: 40,
      }}
    />
  </div>
);*/
