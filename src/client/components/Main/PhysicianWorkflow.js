import React, { Component } from 'react';
// import {SortableContainer, SortableElement, SortableHandle, arrayMove} from 'react-sortable-hoc';

export default class PhysicianWorkflow extends Component {
  constructor(props) {
    super(props);
    console.log('i am inside PhysicianWorkflow', props);
    this.state = {
        today: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6']
    }
  }

  render() {
      return (
        <div>
          <ul>
            <li>

            </li>
          </ul>
        </div>
      )
  }
}
export default PhysicianWorkflow;


