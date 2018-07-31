import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import SurveyField from './SurveyField';

class SurveyForm extends Component {
  // onSubmit(values) {
  //   this.props.createPost(values, () => {
  //     this.props.history.push('/');
  //   });
  // }

  renderFields(field) {
    // const {
    //   meta: { touched, error },
    // } = field;
    // const className = `form-group ${touched && error ? 'has-danger' : ''}`;

    return (
      // <div className={className}>
      <div>
        <Field
          type="text"
          name="title"
          label="Survey Title"
          component={SurveyField}
        />
        <Field
          type="text"
          name="subject"
          label="Subject Line"
          component={SurveyField}
        />
        <Field
          type="text"
          name="body"
          label="Email Body"
          component={SurveyField}
        />
        <Field
          type="text"
          name="email"
          label="Recipients List"
          component={SurveyField}
        />
      </div>
    );
  }

  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(values => console.log(values))}>
          {this.renderFields()}
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: 'surveyForm',
})(SurveyForm);
