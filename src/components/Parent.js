import React from 'react';

class Parent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            bookStores: null,

        };
    }

    componentDidMount() {
        // Simple GET request using fetch
        fetch('http://localhost:3000/stores')
            .then(response => response.json())
            .then(data => this.setState({ bookStores: data }, ()=> {
                console.log("this is the data ", this.state.bookStores.data);
                console.log("this is the ", this.state.bookStores.data);
                let bookStoreObj = {};
                let theBookStores = [];
                this.state.bookStores.data.forEach((bookStore) => {
                    bookStoreObj.bookStore = bookStore.attributes;
                    let theBookIdsArray = bookStore.relationships.books.data;
                    let theBookIds = [];
                    for(let item of theBookIdsArray){
                        theBookIds.push(item.id);
                    }
                    let countryId = bookStore.relationships.countries.data.id;
                    let country;
                    let books = []
                    this.state.bookStores.included.forEach((item) => {
                        if(item.type === 'books' && theBookIds.includes(item.id)){
                            let bookObj = {};
                            bookObj.name = item.attributes.name;
                            bookObj.copiesSold = item.attributes.copiesSold;
                            let theAuthorId = item.relationships.author.data.id
                            console.log("this is the book obj ", bookObj);
                            console.log("this is the author id ", theAuthorId);
                             let author = this.state.bookStores.included.filter(element => element.id === theAuthorId && element.type==='authors')
                             bookObj.author = author;
                             books.push(bookObj);
                        }
                        if(item.type === 'countries' && item.id === countryId){
                            let country = item.attributes.code;
                            bookStoreObj.country = country;
                        }
                        
                        bookStoreObj.books = books;
                    });
                    console.log("this is the books store object ", JSON.stringify(bookStoreObj));
                })
            }));
    }

    render() {
        let cardObj = {};
        const { bookStores } = this.state;
        console.log(bookStores);

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