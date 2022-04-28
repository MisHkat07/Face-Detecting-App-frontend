import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({onInputChange, onButtonSubmit, onEnter}) => {
  return (
    <div >
      <p
        className='f5 white'>
              {'Input the link of the picture that you want to detect.'}
          </p>
      <div
        className='center'>
        <div
          className='form center pa2 br3'>
          <input
            type='text'
            className='f5 pa2 w-70 center'
             placeholder="Insert URL here"
            onChange={onInputChange}
            onKeyPress={onEnter}
            />
          <button
            className='f5 grow w-30 link ph3 pv2 white bg-purple'
            onClick={onButtonSubmit}>
                  Detect
                  </button>
              </div>
          </div>
    </div>
  );
};
export default ImageLinkForm;