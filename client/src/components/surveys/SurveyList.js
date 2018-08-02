import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSurveys } from '../../actions';

class SurveyList extends Component {
  componentDidMount() {
    this.props.fetchSurveys();
  }

  renderSurveys() {
    return this.props.surveys.reverse().map(survey => {
      return (
        <div className="card blue-grey darken-1" key={survey._id}>
          <div className="card-content white-text">
            <span className="card-title">{survey.title}</span>
            <p>{survey.body}</p>
            <p className="sent">
              Sent On: {new Date(survey.dateSent).toLocaleDateString()}
            </p>
            <p className="last">
              Last Responded:{' '}
              {new Date(survey.lastResponded).toLocaleDateString()}
            </p>
          </div>
          <div className="card-action delete">
            <a>Yes: {survey.yes}</a>
            <a>No: {survey.no}</a>
            <button
              type="submit"
              className="btn-flat-small right red darken-3 white-text"
            >
              DELETE
              <i className="deleteIcon material-icons right">delete</i>
            </button>
          </div>
        </div>
      );
    });
  }

  render() {
    return <div>{this.renderSurveys()}</div>;
  }
}

function mapStateToProps({ surveys }) {
  return { surveys };
}

export default connect(
  mapStateToProps,
  { fetchSurveys }
)(SurveyList);
