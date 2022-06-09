import React from 'react';
import getBooksList from "../helpers/getBooksList"

class Parent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            bookStoreList: []
        };
    }

   async componentDidMount() {
       try{
        // Simple GET request using fetch
        const response = await fetch('http://localhost:3000/stores')
        const json = await response.json()
        const booksList = await getBooksList(json)
       this.setState({bookStoreList: booksList})
      

       }catch(err){
           console.log(err)
       }


//console.log("this is the booksList before setting state ", booksList);
;
    
      
    }



    render() {
        let cardObj = {};
        const { bookStoreList } = this.state;
        console.log("this is the book stores ", bookStoreList);

        return (
            <div className="card text-center m-3">
                <h5 className="card-header">Simple GET Request</h5>
                <div className="card-body">
                    
                </div>
            </div>
        );
    }
}

export default Parent;