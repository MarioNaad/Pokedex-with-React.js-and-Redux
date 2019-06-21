import React, { Component } from "react";
import "./styles/Modal.css";
import { toCapitalLetter } from "./PokemonListItem";
import swal from 'sweetalert';


class Modal extends Component {
  
  render() {
    const { details } = this.props;
    return (
      <div
        className="modal fade"
        id="detailsModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="detailsModalTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title text-left col-6" id="detailsModalTitle">
                {toCapitalLetter(details.name)}
              </h5>
              <h5 className='modal-title text-right col-4'><strong>ID No. {details.id}</strong></h5>
              <button
                type="button"
                className="close col-2"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body ">
              <div className="modal-item row">
                <div className="col-12 modal-sprite">
                  <img
                    src={details.sprites.front_default}
                    alt={`${details.name} sprite`}
                    className="modal-sprite"
                  />
                </div>
                <div className="col-12 container mt-2">
                  <h3 className="modal-description">
                    To get all details of this Pokemon click on details if you
                    want to catch it try on save button
                  </h3>
                  <div className="col-3 modal-stats text-center mt-4">
                     <h3><strong>{details.stats[4].base_stat}</strong></h3>
                     <h6>Attack</h6> 
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary" onClick={this.props.handleThrowPokeball}>
                Throw Pokeball
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Modal;
