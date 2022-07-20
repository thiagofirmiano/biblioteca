import React, {Component} from 'react';
import './List.css';

class List extends Component {
  
  constructor(props){
    super(props);
    this.state = {};
  }

  render() { 
    
    const {data} = this.props;

    return (
        <div className="List">
          {data.map((item, index) => (
          <div className="Item" key={index}>
            <h3>{item.autor}</h3>
            <p>{item.title}</p>
            <p>{item.url}</p>
          </div>
          ))}
        </div>
      );
      
  }

}

export default List;