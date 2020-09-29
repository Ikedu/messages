import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import './App.css';
import MessageForm from '../MessageForm/MessageForm';
import Message from '../Message/Message';
import {useDispatch, useSelector} from 'react-redux'
import {
  ADD_MESSAGE,
  DELETE_MESSAGE,
} from '../../constants/ActionTypes'

const App = () => {
  const dispatch = useDispatch()
  const state = useSelector(state => state.messages)

  const handleChange = val => {
    dispatch({type: ADD_MESSAGE, ...val})
  };

  const handleDelete = id => {
    dispatch({type: DELETE_MESSAGE, id})
  };

  return (
    <div className='container'>
      <div className='row center'>
        <h1 className='white-text bold'>Messages</h1>
      </div>
      <div className='row center'>
        <div className='col s12'>
          <MessageForm change={handleChange}/>
          <div className='data-container'>
            <div className='row center'>
              <h4 className='white-text'>List</h4>
            </div>
            <div className='row'>
              {state.length > 0 ? (
                <>
                  {state.map(info => (
                    <Message
                      key={info.id}
                      id={info.id}
                      isPublic={info.isPublic}
                      date={info.date}
                      text={info.text}
                      deleteCard={handleDelete}
                    />
                  ))}
                </>
              ) : (
                <div className='center white-text'>No messages found</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
