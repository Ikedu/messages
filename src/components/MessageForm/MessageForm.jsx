import React, {useState} from 'react';
import PropTypes from 'prop-types';
import '../App/App.css';

const initialValues = {
  text: '',
  isPublic: false,
  date: ''
}

const MessageForm = ({change}) => {
  const [state, setState] = useState(initialValues);

  const handleChange = e => {
    const target = e.target;
    const {value, name} = target;
    const date = new Date().toLocaleString('en');

    setState({
      ...state,
      [name]: target.type === 'checkbox' ? target.checked : value,
      date
    });
  };

  const handleSubmit = () => {
    change(state);
    setState(initialValues);
  };

  return (
    <>
      <div className="row">
        <div className="col s12">
          <input
            id="text"
            name="text"
            type="text"
            placeholder="Enter your message..."
            value={state.text}
            onChange={handleChange}
          />
        </div>
        <div className="col s12">
          <label className='container-checkbox' htmlFor="is-public">
            <input
              id="is-public"
              name="isPublic"
              type="checkbox"
              checked={state.isPublic}
              onChange={handleChange}/>
            <div className={"description"}>Share publicly</div>
          </label>
        </div>
      </div>
      <div className="center">
        <button
          id="message-btn"
          className="message-btn"
          type="button"
          disabled={state.text === ''}
          onClick={handleSubmit}
        >
          Send
        </button>
      </div>
    </>
  );
};

MessageForm.propTypes = {
  change: PropTypes.func.isRequired
};

export default MessageForm;
