import React from 'react';
import "../styles/Grid.css";
import "../styles/Card.css";
class Table extends React.Component {
    render() {
        console.log("these are the props in table ", this.props.books);
        const booksSorted = this.props.books.sort((a, b) => (a.copiesSold < b.copiesSold) ? 1 : -1);
        const twoBestSelling = booksSorted.slice(0, 2);
        console.log("this is books sorted ", twoBestSelling);
      return (
        <div>
            
            <table>
                <tr>
                    <th>Best Selling Books</th>
                </tr>
                {twoBestSelling.map((item) => (
                <>
                <tr>
                    <td>{item.name}</td>
                    <td>{item.author[0].attributes.fullName}</td>
                </tr>
                </>
             ))};
          
            </table>
        </div>
      );
  }
}

export default Table;