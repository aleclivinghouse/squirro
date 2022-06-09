import React from 'react';
import getBooksList from "../helpers/getBooksList"
import Card from "../components/Card";

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
                {bookStoreList.map((item) => (
                    <Card bookStore={item}/>
                ))}
            </div>
        );
    }
}

export default Parent;