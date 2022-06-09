import React from 'react';
import "../styles/Grid.css"
import "../styles/Card.css";
class Card extends React.Component {
    render() {
        console.log("these are the props in card ", this.props);
      return (
        <div id="parent">
            <div class="container">
                <div class="row">
                    <div class="col-3" id="picture-column">
                    </div>
                    <div class="col-9" id ="right-wrapper">
                        <div class="row"> 
                            <div class="col-6" id="title">
                            </div>
                            <div class="col-6" id="star-rating">
                            </div>
                        </div>
                        <div class="row"> 
                            <div class="col-12" id="table">
                            </div>
                        </div>
                    </div>
                    <div class="row"> 
                            <div class="col-6" id="bottom-left">
                            </div>
                            <div class="col-6" id="bottom-right">
                            </div>
                        </div>
                </div>
            </div>
        </div>
      );
  }
}

export default Card;