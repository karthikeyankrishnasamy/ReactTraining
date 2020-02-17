import React,{Component} from "react";
import ReactDOM from 'react-dom'; 

class TagList extends Component {
   constructor(props) {
    super(props);
    this.state = {tags :["Tag1", "Tag2", "Tag3","Tag4"]};
  }
  render() {
    return(
      <div>
        <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
      </div>
    );
  }
}

export default TagList