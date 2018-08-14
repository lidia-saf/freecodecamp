import React from 'react';
import { connect } from 'react-redux';
import { addEditor } from '../actions';
import AppLayout from '../';

const AddEditInput = ({dispatch}) => {
  let input

  return (
     <div>
        <textarea id="editor" onChange={e => {
             e.preventDefault()
             if (!input.value.trim()) {
                 return
             }
             dispatch(addEditor(input.value))
         }}
        >
        </textarea>
     </div>
  )
}

const mapStateToProps = state => {
  return {
    text: state.text
  }
}


export default connect(mapStateToProps)(AddEditInput)