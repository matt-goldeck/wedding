const API_URL = 'https://wedding-api-production.up.railway.app/rsvp'


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
    let result = await fetch(API_URL, requestOptions)
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

export default postToAPI;