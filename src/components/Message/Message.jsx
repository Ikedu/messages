import React from 'react';
import PropTypes from 'prop-types';

const Message = ({isPublic, id, date, text, deleteCard }) => {
  const handleDelete = () => {
    deleteCard(id);
  };

  return (
    <div className="col s12">
      <div className="card">
        <div className="card-content">
          <span className="card-title" data-test="bmi">
            {text}
          </span>
          <div className="card-data">
            <span data-test="height">{isPublic ? 'Public' : 'Private'}</span>
            <span data-test="date">Send the {date}</span>
          </div>

          <button className="delete-btn" onClick={handleDelete}>
            X
          </button>
        </div>
      </div>
    </div>
  );
};

Message.propTypes = {
  isPublic: PropTypes.bool,
  id: PropTypes.number,
  date: PropTypes.string,
  text: PropTypes.string,
  deleteCard: PropTypes.func
};

export default Message;
