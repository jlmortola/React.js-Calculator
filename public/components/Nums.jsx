import React from 'react'

var op = []; //array for storing numbers
var decimal = true; // to access decimal dot

var Nums = React.createClass({

  pusher: function (event) { //will add the button value to op
   event.preventDefault();
     var num = event.target.value;

     if (op.length <=23) {
     op += num;
      this.props.setResult({display: op})
     } else {
       this.props.setResult({display: '# of max chars reached'})
     }

  },

  pusher2: function (event) { // to only have 1 operation chained
    event.preventDefault();
    var num = event.target.value;
    var last = op.charAt(op.length-1);

    if(op.length <= 23){

       if ((last === "+") || (last === '*') || (last === '-') || (last ==='/') || (last ==='.')) {
       } else {
         op += num;
         decimal = true;
         this.props.setResult({display: op})
       }
    } else {
      this.props.setResult({display: '# of max chars reached'})
    }
  },

  pusher3: function (event){
    event.preventDefault();
    var num = event.target.value;
      if (op.length <=23) {
     op += num;
     op = op.replace(/\-+/g, '-')
        decimal=true;
      this.props.setResult({display: op})
     } else {
       this.props.setResult({display: '# of max chars reached'})
     }

  },

  dot: function(event){ // function for the '.'
    event.preventDefault()
    var num = event.target.value
    if (op.length <= 23) {

    if (decimal) {
    op += num;
    this.props.setResult({display: op})
    decimal = false; // when '.', sets decimal to false
    }
    }
     else {
     this.props.setResult({display: '# of max chars reached'})
     }

  },


  result: function(event){ // will execute the operation inside op
    event.preventDefault();

    if (op.length===0){
    this.props.setResult({result: 0, display: 0, decimals:'.00'})
    } else {

    var result = eval(op).toFixed(2);
    var ind = result.indexOf('.');

    if (String(result).length <= 11) {
    this.props.setResult({result: result.slice(0,ind),
                         decimals: result.slice(ind)})

    }
    else {
      this.props.setResult({result: 'error', decimals:""})
    }
    }
  },

  reset: function(event){
    event.preventDefault();
    op=[];
    decimal = true;
    this.props.setResult({result: 0, display:0, decimals:'.00'});
  },

  delete: function(event){
    event.preventDefault();
    if(op.length===0){
      this.props.setResult({display: 0})
    }else{
    var test = false; // to test if im next to delete a '.'
    op = op.slice(0,-1);
    this.props.setResult({display: op})
    if(op.charAt(op.length-1) === '.'){ //i know the next char is a '.'
      test= true;
      }
    if(test && (op.charAt(op.length-2) !== '.')){ // activates decimal when i delete a '.'
      decimal = true;
      test = false;

    }
    if(op.length===0){
      this.props.setResult({display: 0})
    }
   }

    /*
    if(op.length===0){
      this.props.setResult({display: 0})
    }
    if(op===0){
      this.props.setResult({display: 0})
    }*/


  },

  render: function(){
    return(
      <div className="pad">
        <div className="afterpad">
          <div className='filter'>
    <form className="calc">
    <div>
      <button onClick={this.reset} value={0}> C </button>
      <button onClick={this.delete}> DEL </button>
      </div>

    <div>
    <button onClick={this.pusher} value={1}>1</button>
    <button onClick={this.pusher} value={2}>2</button>
    <button onClick={this.pusher} value={3}>3</button>
    <button onClick={this.pusher2} value='+'>+</button>
    </div>

    <div>
    <button onClick={this.pusher} value={4}>4</button>
    <button onClick={this.pusher} value={5}>5</button>
    <button onClick={this.pusher} value={6}>6</button>
    <button onClick={this.pusher3} value='-'>-</button>
    </div>

    <div>
    <button onClick={this.pusher} value={7}>7</button>
    <button onClick={this.pusher} value={8}>8</button>
    <button onClick={this.pusher} value={9}>9</button>
    <button onClick={this.pusher2} value='*'>*</button>
    </div>

    <div className='lastrow'>
    <button onClick={this.pusher} value={0}>0</button>
    <button onClick={this.dot} value='.'>.</button>
    <button onClick={this.pusher2} value='/'>/</button>
    </div>
    </form>
          </div>
        </div>
    <button className="return" onClick={this.result}>=</button>
        </div>
    )
  }
});

export default Nums
