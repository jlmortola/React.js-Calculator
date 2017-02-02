import React from 'react'

var Display = React.createClass({
  render: function(){
    return(
    <div className="display">
       {this.props.display}
    </div>
    )
  }
});

export default Display
