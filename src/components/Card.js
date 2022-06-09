import React from 'react';
import "../styles/Grid.css"
import "../styles/Card.css";
import Table from "./Table";
class Card extends React.Component {
    render() {
        console.log("these are the props in card ", this.props);
      return (
        <div id="parent">
            <div class="container">
                <div class="row">
                    <div class="col-3" id="picture-column">
                        <div id="image-wrapper">
                        <img src={this.props.bookStore.bookStore.storeImage} alt="store image" height="100px" width="100px"/>
                        </div>
                    </div>
                    <div class="col-9" id ="right-wrapper">
                        <div class="row"> 
                            <div class="col-6" id="title">
                            <h3>{this.props.bookStore.bookStore.name}</h3>
                            </div>
                            <div class="col-6" id="star-rating">
                            <h3>{this.props.bookStore.bookStore.rating}</h3>
                            </div>
                        </div>
                        <div class="row"> 
                            <div class="col-12" id="table">
                                <Table books={this.props.bookStore.books}/>
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