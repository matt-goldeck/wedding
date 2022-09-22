import './CompletedRSVP.css';

function getIcon() {
    const EMOJIS = [
        '🤵🏻‍♂️', '🤵🏼', '🤵🏽‍♂️',
        '🤵🏻‍♀️', '🤵🏼‍♀️', '🤵🏽‍♀️', 
        '💃🏻', '💃🏼',
        '🕺🏻', '🕺🏼',
        '🏃🏻‍♀️', '🏃🏻', '🧗🏻‍♀️', '🧗🏻', '🧗🏼‍♀️', '🧗🏼',
    ]
    return EMOJIS[Math.floor(Math.random()*EMOJIS.length)]
}

function CompletedRSVP(props){
    const peopleEl = <div className="peopleDiv">
        {props.people.map(p => <div className="personDiv">{getIcon()} {p}</div>)}
    </div>
    return(
        <div className="completedRSVP">
            <p><b>Party:</b> {props.party_name}</p>
            <p><b>Attending:</b> {props.attending ? 'Yes' : 'No'}</p>
            <p><b>Message:</b> {props.message}</p>
            {props.attending ? <p><b>People:</b> {peopleEl}</p> : ''}
        </div>
    );
}

export default CompletedRSVP;