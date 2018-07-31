import _ from 'lodash';
import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import SurveyField from './SurveyField';

const FIELDS = [
  { label: 'Survey Title', name: 'title' },
  { label: 'Subject Line', name: 'subject' },
  { label: 'Email Body', name: 'body' },
  { label: 'Recipients List', name: 'email' },
];

class SurveyForm extends Component {
  // onSubmit(values) {
  //   this.props.createPost(values, () => {
  //     this.props.history.push('/');
  //   });
  // }

  renderFields(field) {
    return _.map(FIELDS, ({ label, name }) => {
      return (
        <Field
          type="text"
          key={name}
          label={label}
          name={name}
          component={SurveyField}
        />
      );
    });
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
