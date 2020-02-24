import React from 'react';
import logo from './logo.svg';
import './App.css';
import IlmMatchingHeader from './IlmMatchingHeader/IlmMatchingHeader';
import { Button } from 'reactstrap';
function App() {
  return (
    <div className="App">
      <div className="rowC">
        <IlmMatchingHeader ></IlmMatchingHeader>
        <IlmMatchingHeader ></IlmMatchingHeader>
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
