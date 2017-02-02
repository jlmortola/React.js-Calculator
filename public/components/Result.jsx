import React from 'react'

var Result = React.createClass({
  render: function (){
    return (
    <div className='result'>
    <div> {this.props.result} </div>
      <div className="dec">{this.props.decimals}</div>
       </div>
    )
  }
});

export default Result
