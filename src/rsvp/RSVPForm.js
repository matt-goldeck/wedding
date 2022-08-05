import React, { useState } from "react";
import PersonForm from "./PersonForm";
import './RSVPForm.css';
import postToAPI from "./APITools";

function getIcon() {
    const EMOJIS = [
        '🤵🏻‍♂️', '🤵🏼', '🤵🏽‍♂️',
        '🤵🏻‍♀️', '🤵🏼‍♀️', '🤵🏽‍♀️', 
        '💃🏻', '💃🏽',
        '🕺🏻', '🕺🏽',
        '🏃🏻‍♀️', '🏃🏻', '🧗🏻‍♀️', '🧗🏻', '🧗🏼‍♀️', '🧗🏼',
    ]
    return EMOJIS[Math.floor(Math.random()*EMOJIS.length)]
}

function RSVPForm(props) {
    const [userInput, setUserInput] = useState({
        partyName: '',
        attendanceClicked: false,
        attending: false,
        message: '',
        people: [
            {
             name: '',
             id: Math.random().toString(),
             icon:getIcon()
            }
        ],
    });

    const [errors, setErrors] = useState({
        partyName: '',
        attending: '',
        peopleNames: '',
        postError: '',
    });

    // == Callbacks to pass to postToApi() ==
    const parentSetSubmit = props.setSubmit
    const parentSetError = props.setError

    // == State handlers ==
    function onAttendanceChanged(event) {
        // record attendance has been toggled at least once
        setUserInput((prevState) => {
            return {...prevState, attendanceClicked: true}
        });

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

    function onAddPersonClicked(event) {
        event.preventDefault(); // prevent page from reloading

        let newPerson = {
            name: '',
            id: Math.random().toString(),
            icon: getIcon(),
        }
        let people = [...userInput.people, newPerson]
        setUserInput((prevState) => {
            return {...prevState, people: people}
        })
    }

    function onMessageChanged(event) {
        setUserInput((prevState) => {
            return {...prevState, message: event.target.value}
        });
    }

    function onSubmit(event) {
        event.preventDefault(); // prevent page from reloading
        let valid = isValid();
        if(valid) {
            postToAPI(userInput, parentSetSubmit, parentSetError)
        }
    }

    // == Validators == 
    function isValid(){
        let partyName = validatePartyName()
        let attendance = validateAttendance()
        let name = validateNames()

        if (partyName || attendance || name) {
            return false;
        }
        return true;
    }

    function validatePartyName() {
        // Validate a party name has been specified
        let err = ''
        if(userInput.partyName === ''){
            err = 'Required Field'
        }

        setErrors((prevState) => {
            return {...prevState, partyName: err}
        })

        return err
    }

    function validateAttendance() {
        // Validate attendance has been specified
        let err = ''
        if(userInput.attendanceClicked === false) {
           err = 'Required Field';
        }
        // Validate at least one occupant exists
        else if(userInput.people.length === 0){
            err = 'At Least One Guest Required';
        }

        setErrors((prevState) => {
            return {...prevState, attending: err}
        });

        return err
    }

    function validateNames() {
        // Validate if attending, that every person has a name
        let err = ''
        if (userInput.attending) {
            for (let i = 0; i < userInput.people.length; i++) {
                if(userInput.people[i].name === '') {
                    err = 'Name Required';
                }
            }
        }

        setErrors((prevState) => {
            return {...prevState, peopleNames: err}
        })

        return err
    }

    // == Callbacks to pass to PersonForm ==
    function changeName(name, key) {
        setUserInput((prevState) => {
            return {
                ...prevState,
                people: userInput.people.map(p => {
                    if (p.id === key) {
                        return {...p, name: name};
                    }
                    return p;
                })
            }
        });
    }

    function removePerson(key) {
        setUserInput((prevState) => {
            return {...prevState, people: userInput.people.filter(person => person.id !== key)}
        })
    }

    function buildForm() {
        return (
            <form onSubmit={onSubmit}>
                <div className='rsvp-controls'>
                    <div className='rsvp-control'>
                        <label>Party Name</label>
                        <input 
                            type='text' 
                            value={userInput.partyName}
                            name='party-name'
                            onChange={onPartyNameChanged}
                        />
                        {errors.partyName && <p className='errors'><b>{errors.partyName}</b></p>}
                    </div>
                    <div className='rsvp-control'>
                        <label>Message (Optional)</label>
                        <input 
                            type='text'
                            value={userInput.message}
                            name='message'
                            onChange={onMessageChanged}
                        />
                    </div>
                    <div className='rsvp-control'>
                        <label>Attending?</label>
                        <div className='attendance' onChange={onAttendanceChanged}>
                            <label>
                                Yes
                                <input 
                                    type="radio"
                                    name="attending" 
                                    value="yes"
                                />
                            </label>
                            <label>
                                No
                                <input 
                                    type="radio"
                                    name="attending"
                                    value="no"
                                />
                            </label>
                            {errors.attending && <p className='errors'><b>{errors.attending}</b></p>}
                        </div>
                    </div>
                    {userInput.attending && <div className='rsvp-control person-controls-wrapper'>
                        <p><b>- Guests -</b></p>
                        {userInput.people.map((person, pos) => {
                            return(
                                <PersonForm 
                                    name={person.name}
                                    personKey={person.id}
                                    icon={person.icon}
                                    changeName={changeName}
                                    removePerson={removePerson}
                                    key={person.id}
                                />
                            )
                        })}
                        {errors.peopleNames && <p className='errors'><b>{errors.peopleNames}</b></p>}
                        {errors.postError && <p className='errors'><b>{errors.postError}</b></p>}
                        <button 
                            className='custom-button'
                            onClick={onAddPersonClicked}
                        >Add Person</button>
                    </div>}
                    <input className='custom-button' type="submit" value="Submit" />
                </div>
            </form>
        );
    }

    return (
        <div>
            {buildForm()}
        </div>
    )
}

export default RSVPForm;