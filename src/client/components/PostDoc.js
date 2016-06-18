import React from 'react';

export default class PostDoc extends React.Component {
  constructor(props) {
    super(props);
    console.log('i am inside postdoc', props);
  }

  handleSubmit(event) {
    event.preventDefault();
    const formData = {
      name: this.refs.name.value,
      dob: this.refs.dob.value,
      office: this.refs.office.value,
      phone: this.refs.phone.value,
      sex: this.refs.sex.value
    };
    this.props.postDoc(formData.name, formData.dob, formData.office, formData.phone, formData.sex);
  }


  render() {
    return ( 
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <p className="inputForm">
            <input ref="name" />
          </p>
          <p className="inputForm">
            <input ref="dob" />
          </p>
          <p className="inputForm">
            <input ref="office" />
          </p>
          <p className="inputForm">
            <input ref="phone" />
          </p>
          <p className="inputForm">
            <input ref="sex" />
          </p>
          <div className="submit">
            <input type="submit" value="ADD NEW DOC" id="button-blue" />
            <div className="ease"></div>
          </div>
        </form>
      </div>
    );
  }
}
