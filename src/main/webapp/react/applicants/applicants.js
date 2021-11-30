import Applicant from "./applicant";

const { useState, useEffect } = React;

const Applicants = () => {
    const [applicants, setApplicants] = useState([])
    const [newApplicant, setNewApplicant] = useState({})
    const createApplicant = (applicant) =>
        fetch(`https://wbdv-generic-server.herokuapp.com/api/jannunzi/applicants`, {
            method: 'POST',
            body: JSON.stringify(applicant),
            headers: {'content-type': 'application/json'}
        })
            .then(response => response.json())
            .then(applicant => setApplicants(applicants => ([...applicants, applicant])))
    const updateApplicant = (id, newApplicant) =>
        fetch(`http://localhost:8080/orm/update/applicant/${id}/${newApplicant.email}`)
            .then(response => response.json())
            .then(applicant => setApplicants(applicants => (applicants.map(applicant => applicant._id === id ? newApplicant : applicant))))
    const findAllApplicants = () =>
        fetch(`http://localhost:8080/orm/find/applicants`)
            .then(response => response.json())
            .then(applicants => setApplicants(applicants))
    const deleteApplicant = (id) =>
        fetch(`https://wbdv-generic-server.herokuapp.com/api/jannunzi/applicants/${id}`, {
            method: "DELETE"
        })
            .then(response => response.json())
            .then(applicants => setApplicants(applicants => applicants.filter(applicant => applicant._id !== id)))
    useEffect(() => {
        findAllApplicants()
    }, [])
    return(
        <div>
            <h2>Applicants {applicants.length}</h2>
            <input value={newApplicant.firstName}
                   onChange={(e) => setNewApplicant(newApplicant => ({...newApplicant, firstName: e.target.value}))}/>
            <input value={newApplicant.lastName}
                   onChange={(e) => setNewApplicant(newApplicant => ({...newApplicant, lastName: e.target.value}))}/>
            <button onClick={() => createApplicant(newApplicant)}>Create</button>
            {
                applicants.map(applicant =>
                              <Applicant key={applicant._id}
                                    updateApplicant={updateApplicant}
                                    deleteApplicant={deleteApplicant}
                                    applicant={applicant}/>)
            }
        </div>
    )
}

export default Applicants;


