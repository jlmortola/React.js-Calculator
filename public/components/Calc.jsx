import React from 'react'
import Result from 'Result'
import Display from 'Display'
import Nums from 'Nums'
import Footer from 'Footer'

var Calc = React.createClass({

  getInitialState: function(){
      return {
        display: 0,
        result: 0,
        decimals: ".00"
      }
    },

  setResult: function(updates){
    this.setState(updates)
  },

  render: function(){
    var result = this.state.result;
    var display = this.state.display;
    var decimals = this.state.decimals;

    return(
      <div className='main'>
        <h1>Simple React Calculator</h1>

          <div className='top'>
        <Result result={result} decimals={decimals}/>
        <Display display={display} />
      </div>
        <Nums setResult={this.setResult}/>
        <Footer />
    
        </div>
    )
  }
});

export default Calc
