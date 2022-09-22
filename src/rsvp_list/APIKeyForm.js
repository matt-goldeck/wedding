import React, { useState } from "react";

function APIKeyForm(props){
    const [apiKey, setApiKey] = useState('');

    function onSubmit(event) {
        event.preventDefault(); // prevent page from reloading
        props.handleGetData(apiKey);
    }

    function onApiKeyChanged(event) {
        setApiKey(event.target.value);
    }

    return(
        <form onSubmit={onSubmit}>
            <input 
                type='text'
                value={apiKey}
                name='message'
                onChange={onApiKeyChanged}
            />
            <input className='custom-button' type="submit" value="Submit" />
        </form>
    );
}

export default APIKeyForm;