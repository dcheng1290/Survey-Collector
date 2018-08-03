import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSurveys, deleteSurvey } from '../../actions';

class SurveyList extends Component {
  componentDidMount() {
    this.props.fetchSurveys();
  }

  onDeleteClick(id) {
    console.log(id);
    this.props.deleteSurvey(id, this.props.fetchSurveys());
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
              {survey.lastResponded
                ? new Date(survey.lastResponded).toLocaleDateString()
                : 'N/A'}
            </p>
          </div>
          <div className="card-action delete">
            <a>Yes: {survey.yes}</a>
            <a>No: {survey.no}</a>
            <button
              type="submit"
              className="btn-flat-small right red darken-3 white-text"
              onClick={() => this.onDeleteClick(survey._id)}
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
  { fetchSurveys, deleteSurvey }
)(SurveyList);
