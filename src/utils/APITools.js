const API_URL_RSVP = 'https://wedding-api-production.up.railway.app/rsvp'
const API_URL_RSVPS = 'https://wedding-api-production.up.railway.app/rsvps'
const API_URL_CSV = 'https://wedding-api-production.up.railway.app/rsvps_csv'

// TODO: better debug solution?
// const API_URL_RSVPS = 'http://127.0.0.1:8000/rsvp'
// const API_URL_RSVPS = 'http://127.0.0.1:8000/rsvps'
// const API_URL_CSV = 'http://127.0.0.1:8000/rsvps_csv'

function getCurrentTimeAsString() {
    let today = new Date();
    let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    return (date + 'T' + time);
}


async function postToAPI(formData, setSubmitted, setError) {
    // Attempt to POST form data to the API
    // If succesful, call setSubmitted()
    // else, call setError()

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            party_name: formData.partyName,
            attending: formData.attending,
            message: formData.message,
            people: formData.people.map((person) => {return person.name}),
            rsvp_time: getCurrentTimeAsString(),
        })
    };

    // POST to API
    let result = await fetch(API_URL_RSVP, requestOptions)
        .then((response) => {
            if (!response.ok) {
                throw Error(response.statusText);
            }
            return response;
        }).then(() => {
            setSubmitted(formData.attending);
        }).catch((error) => {
            console.error(error)
            setError();
        });
    return result;
}

async function getToApiJSON(token, setData) {
    // Attempt to GET data from the API
    // If successful, call setData()
    const requestOptions = {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    };

    // GET to the API
    await fetch(API_URL_RSVPS, requestOptions)
        .then((response) => {
            if (!response.ok) {
                throw Error(response.statusText)
            }
            return response.json();
        })
        // Store the retrieved data in state
        .then((jsonData) => {
            setData(jsonData);
        })
        // Error handling
        .catch((err) => {
            console.log(err.message);
        });
}

export {postToAPI, getToApiJSON, API_URL_CSV};