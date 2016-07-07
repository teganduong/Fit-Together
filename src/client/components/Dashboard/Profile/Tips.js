import React, { Component, PropTypes } from 'react';

class Tips extends Component {
  constructor(props) {
    super(props);
    console.log('INSIDE TIPS', props);
    this.tips = [];
  }

  componentWillReceiveProps(nextProps) {
   console.log('these are tips', nextProps);
   this.tips = nextProps.tips.data
  }

  render() {
    console.log('TIPS INSIDE RENDER', this.tips);
    // if(this.tips) {
    //   const random = Math.floor((Math.random() * 5) + 1);
    //   console.log('this is the random tip', random);
    //   const tipOftheDay = this.props.tips.data[random];
    //   console.log('tip of the day', tipOftheDay);  
    // } 

    return (
      <div> tips
      </div>
    );
  }
}

export default Tips;