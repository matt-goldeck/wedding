import React, { useState } from "react";
import { getToApiJSON, API_URL_CSV } from "../utils/APITools";
import APIKeyForm from "./APIKeyForm";
import CompletedRSVP from "./CompletedRSVP";
import './RSVPList.css';

function RSVPList(){
    const [rsvps, setRsvps] = useState([]);
    const [isAuthed, setIsAuthed] = useState(false);
    const [apiToken, setApiToken] = useState('');

    // Use token to retrieve and set data
    function handleGetData(userToken) {
        getToApiJSON(userToken, setRsvps);
        setApiToken(userToken);
        setIsAuthed(true);
    }

    // Content to display when authed
    function getAuthedContent() {
        return (
            <div>
                <table className='infoTableDiv'>
                    <tr>
                        <th>Received Responses</th>
                        <th>{rsvps.length}</th>
                    </tr>
                    <tr>
                        <th>Yes Responses</th>
                        <th>{rsvps.filter(r => r.attending === true).length}</th>
                    </tr>
                    <tr>
                        <th>No Responses</th>
                        <th>{rsvps.filter(r => r.attending === false).length}</th>
                    </tr>
                    <tr>
                        <th>Attending Guests</th>
                        <th>{rsvps
                                .filter(r => r.attending === true)
                                .map(r => r.people.length)
                                .reduce((partialSum, a) => partialSum + a, 0)
                        }</th>
                    </tr>
                </table>
                <a href={`${API_URL_CSV}?api_key=${apiToken}`}>Download Spreadsheet</a>
                <p>---</p>
                {rsvps.map(r => 
                    <CompletedRSVP
                        party_name={r.party_name}
                        attending={r.attending}
                        message={r.message}
                        people={r.people}/>
                )}
            </div>
    );}

    // Content to display when not authed
    const unAuthedContent = (
        <APIKeyForm handleGetData={handleGetData}/>
    )

    return (
        isAuthed ? getAuthedContent() : unAuthedContent
    );
}

export default RSVPList;