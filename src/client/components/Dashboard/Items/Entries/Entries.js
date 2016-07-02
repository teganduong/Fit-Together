import React, { Component, PropTypes } from 'react';
import SideNavBar from '../../SideNavBar';
import OptionCard from './OptionCard';

class Entries extends Component {
  constructor(props) {
    super(props);

    this.props.getEntries();
  }

  // componentDidMount() {
  //   this.props.getEntries();
  // }

  // componentWillReceiveProps(nextProps) {
  //   console.log('nextProps in Entries: ', nextProps);
  // }

  render() {
    const { entries } = this.props;
    console.log('entries in Entries Component: ', entries);
    return (
      <div className="main-container">
        <div>{entries[0].question}</div>
        <OptionCard option={entries[0].option1} />
        <OptionCard option={entries[0].option2} />
      </div>
    );
  }
}

Entries.propTypes = {
  entries: PropTypes.array,
  getEntries: PropTypes.func
};

export default Entries;
