import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const SurveyReview = ({ onCancel }) => {
  return (
    <div>
      <h5>Please confirm your entries</h5>
      <Link
        to="/surveys/new"
        onClick={onCancel}
        className="btn-flat left yellow darken-3 white-text"
      >
        Back
      </Link>
    </div>
  );
};

export default SurveyReview;
