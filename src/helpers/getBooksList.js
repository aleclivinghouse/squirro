
const getBooksList = async (bookStores) => {
    let theBookStores = [];
    try{
        
       bookStores.data.forEach((bookStore) => {
           console.log("this is the book store in for each ", bookStore);
            let bookStoreObj = {};
            bookStoreObj.bookStore = bookStore.attributes;
            let theBookIdsArray = bookStore.relationships.books.data;
            let theBookIds = [];
            for(let item of theBookIdsArray){
                theBookIds.push(item.id);
            }
            let countryId = bookStore.relationships.countries.data.id;
            let country;
            let books = []
            bookStores.included.forEach((item) => {
                if(item.type === 'books' && theBookIds.includes(item.id)){
                    let bookObj = {};
                    bookObj.name = item.attributes.name;
                    bookObj.copiesSold = item.attributes.copiesSold;
                    bookObj.website = item.attributes.website;
                    bookObj.establishmentDate = item.attributes.establishmentDate;
                    let theAuthorId = item.relationships.author.data.id
                     let author = bookStores.included.filter(element => element.id === theAuthorId && element.type==='authors')
                     bookObj.author = author;
                     books.push(bookObj);
                }
                if(item.type === 'countries' && item.id === countryId){
                    let country = item.attributes.code;
                    bookStoreObj.country = country;
                }
                
                bookStoreObj.books = books;
            });
            theBookStores.push(bookStoreObj);
            console.log("this is the book stores in helper ", theBookStores);
            return theBookStores;
        });
    }
    catch(err){
        console.log(err)
    }
    // console.log(bookStores, "<===book stores")
   

    return theBookStores
}
export default getBooksList;