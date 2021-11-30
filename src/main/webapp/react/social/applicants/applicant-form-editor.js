import applicantService from "./applicant-service"
const {useState, useEffect} = React;
const {useParams, useHistory} = window.ReactRouterDOM;

const ApplicantFormEditor = () => {
        const {id} = useParams()
        const [applicant, setApplicant] = useState({})
        useEffect(() => {
                if(id !== "new") {
                        findApplicantById(id)
                }
        }, []);
        const findApplicantById = (id) =>
            applicantService.findApplicantById(id)
                .then(applicant => setApplicant(applicant))
        const deleteApplicant = (id) =>
            applicantService.deleteApplicant(id)
                .then(() => history.back())
        const createApplicant = (applicant) =>
            applicantService.createApplicant(applicant)
                .then(() => history.back())
        const updateApplicant = (id, applicant) =>
            applicantService.updateApplicant(id, newApplicant)
                .then(() => history.back())
        return (
        <div>
            <h2>Applicant Editor</h2>
            <label>Id</label>
                <input value={applicant.id}/><br/>
            <label>First Name</label>
                <input onChange={(e) =>
                    setApplicant(applicant =>
                        ({...applicant, firstName: e.target.value}))}
                       value={applicant.firstName}/><br/>
                <label>Last Name</label>
                <input onChange={(e) =>
                    setApplicant(applicant =>
                        ({...applicant, lastName: e.target.value}))}
                       value={applicant.lastName}/><br/>
                <label>Email</label>
                <input onChange={(e) =>
                    setApplicant(applicant =>
                        ({...applicant, email: e.target.value}))}
                       value={applicant.email}/><br/>
                <label>Password</label>
                <input onChange={(e) =>
                    setApplicant(applicant =>
                        ({...applicant, recruiterId: e.target.value}))}
                    value={applicant.recruiterId}/><br/>
                <button
                    onClick={() => {
                            history.back()}}>
                        Cancel
                </button>
                <button
                    onClick={() => deleteApplicant(applicant.id)}>
                        Delete
                </button>
                <button onClick={() => updateApplicant(applicant.id, applicant)}
                        className="btn btn-primary">Save</button>
            <button onClick={() => createApplicant(applicant)}
                    className="btn btn-success">Create</button>
        </div>
    )
}

export default ApplicantFormEditor
