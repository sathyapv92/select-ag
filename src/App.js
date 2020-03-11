import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-responsive-modal';


export default class App extends React.Component {
  state = {
    open: false,
  };

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  render() {
    const { open } = this.state;
    return (
      <div>

        <a className="button glow-button" target="_blank">Glow Button</a>
        <div className="btn-group-toggle" data-toggle="buttons">

          <input type="checkbox" checked autocomplete="off" />

        </div>
        <div>
          <button href="#" className="btn btn-primary">Primary</button>


          <button href="#" className="badge badge-primary">Primary</button>

































          <div class="container text-center">

            <button type="button" className="btn btn-default">Default</button>


            <button type="button" className="btn btn-primary">Primary</button>


            <button type="button" className="btn btn-success">Success</button>


            <button type="button" className="btn btn-info">Info</button>


            <button type="button" className="btn btn-warning">Warning</button>


            <button type="button" className="btn btn-danger">Danger</button>
          </div>





        </div>
        <button onClick={this.onOpenModal}>Open modal</button>
        <Modal open={open} onClose={this.onCloseModal} >
          <h2>Simple centered modal</h2>
        </Modal >
      </div >
    );
  }
}


