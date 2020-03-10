import React from 'react';

function RefreshButton({ toggleSwitch }) {
    return (
        <button
            type='submit'
            className='button smallButton refreshButton'
            onClick={() => toggleSwitch()}
        >↻</button>
    );
}

export default RefreshButton;