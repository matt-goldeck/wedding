import React, { useState } from "react";

function RSVPForm() {
    const [userInput, setUserInput] = useState({
        partyName: '',
        attending: false,
        people: [{firstName: '', lastName: ''}],
    });

    function onAttendanceChanged(event) {
        var attendance = true
        if(event.target.value !== "yes") {
            attendance = false
        }
        setUserInput((prevState) => {
            return {...prevState, attending: attendance}
        });
    }

    function onPartyNameChanged(event) {
        setUserInput((prevState) => {
            return {...prevState, partyName: event.target.value}
        });
    }

    function onPersonFirstNameChanged(event, id) {
        let person = userInput.people.find(person => person.id === id)
        person.firstName = event.target.value
        setUserInput((prevState) => {
            return {
                ...prevState,
                people: [person, ...userInput.people.filter(p => p.id != person.id)]
            }
        });
    }

    function onPersonLastNameChanged(event, key) {
        console.log(key)
    }

    function onAddPersonClicked(event) {
        event.preventDefault(); // prevent page from reloading

        let newPerson = {
            firstName: '',
            lastName: '',
            id: Math.random().toString()
        }
        let people = [...userInput.people, newPerson]
        setUserInput((prevState) => {
            return {...prevState, people: people}
        })
    }

    function onRemovePersonClicked(event, key) {
        event.preventDefault(); // prevent page from reloading

        let people = userInput.people.filter(person => person.id != key)
        setUserInput((prevState) => {
            return {...prevState, people: people}
        })
    }

    function buildPersonForm(person) {
        return (
            <div key={person.id}>
                <label>First Name</label>
                <input
                    name='first-name'
                    value={person.firstName}
                    onChange={event => {onPersonFirstNameChanged(event, person.id)}}
                />
                <label>Last Name</label>
                <input
                    name='last-name'
                    value={person.lastName}
                    onChange={event => {onPersonLastNameChanged(event, person.id)}}
                />
                <button type="button" onClick={event => onRemovePersonClicked(event, person.id)}>Remove</button>
            </div>
        )
    }
    function buildForm() {
        return (
            <form>
                <div className='rsvp-control'>
                    <label>Party Name</label>
                    <input 
                        type='text' 
                        value={userInput.partyName}
                        name='party-name'
                        onChange={onPartyNameChanged}
                    />
                </div>
                <div className='rsvp-control'>
                    <label>Attending?</label>
                    <div name='attendance' onChange={onAttendanceChanged}>
                            <label>Yes</label>
                            <input 
                                type="radio"
                                name="attending" 
                                value="yes"
                            />
                            <label>No</label>
                            <input 
                                type="radio"
                                name="attending"
                                value="no"
                            />
                    </div>
                </div>
                {userInput.people.map((person) => {return(buildPersonForm(person))})}
                <input type="submit" value="Submit" />
            </form>
        );
    }

    const formContent = buildForm()
    return (
        <div>
            {formContent}
            <button onClick={onAddPersonClicked}>Add Person</button>
        </div>
    )
}

export default RSVPForm;