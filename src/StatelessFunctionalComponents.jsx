import React from "react";
import ReactDOM from 'react-dom'; 

const PersonName = () => {
 return(
      <div>
        <h1>
          {this.props.firstName} {this.props.lastName}
        </h1>
      </div>
    );
}
