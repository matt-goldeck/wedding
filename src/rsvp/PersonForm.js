function PersonForm(props) {
    
    const name = props.name
    const key = props.personKey;
    const icon = props.icon;
    
    function onNameChanged(event) {
        props.changeName(event.target.value, key);
    }

    function onRemovePersonClicked(event) {
        event.preventDefault(); // prevent page from reloading
        props.removePerson(key);
    }

    return (
        <div className='person-form' key={key}>
            <p className='person-control person-icon'><b>{icon}</b></p>
            <input
                className='person-control'
                name='name'
                value={name}
                onChange={event => {onNameChanged(event)}}
            />
            <button 
                type="button"
                onClick={event => onRemovePersonClicked(event)}
                className='person-control custom-button'
            >Remove</button>
        </div>
    );
}
 
export default PersonForm;