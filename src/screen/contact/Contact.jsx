import React, { Component } from 'react'

export class Contact extends Component {
  render() {
    return (
      <div>
        <div className='row'>
            <div className='col-md-6'>
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="card-link">Card link</a>
                    <a href="#" class="card-link">Another link</a>
                </div>
            </div> 
            </div>
        </div>
      </div>
    )
  }
}

export default Contact