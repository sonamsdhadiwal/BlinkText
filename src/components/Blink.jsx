import React, { useState } from 'react';

class Blink extends React.Component {
    constructor(props) {
      super(props);
      this.state = {showlabel: true,
                   label: 'Make this Blink!!'
                   };
      this.myFunction = this.myFunction.bind(this);
    }
    myFunction(){
      var showLbl = ! (this.state.showlabel);
      this.setState({showlabel: showLbl});
    }
    render(){
      return (
        <div className="blink">
          {(this.state.showlabel)?this.state.label:''}
        </div>
       );
    }
    componentDidUpdate() {
       setTimeout(this.myFunction, 500)
    }
    componentDidMount(){
      setTimeout(this.myFunction, 500)
    }
  }
  

  export default Blink;

  
//   ReactDOM.render(
//      <Blink label='MY MESSAGE'/>,
//         document.getElementById('labelId')
//   );

//   <div id="labelId"></div>
