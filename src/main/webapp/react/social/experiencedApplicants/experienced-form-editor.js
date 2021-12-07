import experiencedApplicantService from "./experienced-service"
const {useState, useEffect} = React;
const {useParams, useHistory} = window.ReactRouterDOM;

const ExperiencedApplicantFormEditor = () => {
    const {id} = useParams()
    const [experiencedApplicant, setExperiencedApplicant] = useState({})
    useEffect(() => {
        if(id !== "new") {
            findExperiencedApplicantById(id)
        }
    }, []);
    const findExperiencedApplicantById = (id) =>
        experiencedApplicantService.findExperiencedApplicantById(id)
            .then(experiencedApplicant => setExperiencedApplicant(experiencedApplicant))
    const deleteExperiencedApplicant = (id) =>
        experiencedApplicantService.deleteExperiencedApplicant(id)
            .then(() => history.back())
    const createExperiencedApplicant = (newGradApplicant) =>
        experiencedApplicantService.createExperiencedApplicant(newGradApplicant)
            .then(() => history.back())
    const updateExperiencedApplicant = (id, newApplicant) =>
        experiencedApplicantService.updateExperiencedApplicant(id, newApplicant)
            .then(() => history.back())
    return (
        <div>
            <h2>Experienced Applicant Editor</h2>
            <label>Id</label>
            <input value={experiencedApplicant.id}/><br/>
            <label>First Name</label>
            <input onChange={(e) =>
                setExperiencedApplicant(experiencedApplicant =>
                    ({...experiencedApplicant, firstName: e.target.value}))}
                   value={experiencedApplicant.firstName}/><br/>
            <label>Last Name</label>
            <input onChange={(e) =>
                setExperiencedApplicant(experiencedApplicant =>
                    ({...experiencedApplicant, lastName: e.target.value}))}
                   value={experiencedApplicant.lastName}/><br/>
            <label>Email</label>
            <input onChange={(e) =>
                setExperiencedApplicant(experiencedApplicant =>
                    ({...experiencedApplicant, email: e.target.value}))}
                   value={experiencedApplicant.email}/><br/>
            <label>User Name</label>
            <input onChange={(e) =>
                setExperiencedApplicant(experiencedApplicant =>
                    ({...experiencedApplicant, username: e.target.value}))}
                   value={experiencedApplicant.username}/><br/>
            <label>Password</label>
            <input onChange={(e) =>
                setExperiencedApplicant(experiencedApplicant =>
                    ({...experiencedApplicant, password: e.target.value}))}
                   value={experiencedApplicant.password}/><br/>
            <label>Data of Birth</label>
            <input onChange={(e) =>
                setExperiencedApplicant(experiencedApplicant =>
                    ({...experiencedApplicant, dateOfBirth: e.target.value}))}
                   value={experiencedApplicant.dateOfBirth}/><br/>
            <label>RecruiterId</label>
            <input onChange={(e) =>
                setExperiencedApplicant(experiencedApplicant =>
                    ({...experiencedApplicant, recruiterId: e.target.value}))}
                   value={experiencedApplicant.recruiterId}/><br/>
            <label>Work Experience</label>
            <input onChange={(e) =>
                setExperiencedApplicant(experiencedApplicant =>
                    ({...experiencedApplicant, workExperience: e.target.value}))}
                   value={experiencedApplicant.workExperience}/><br/>



            <button className="btn btn-warning" onClick={() => history.back()}>Cancel</button>
            <button className="btn btn-danger" onClick={() => deleteExperiencedApplicant(experiencedApplicant.id)}>Delete</button>
            <button className="btn btn-primary" onClick={() => updateExperiencedApplicant(experiencedApplicant.id, experiencedApplicant)}>Save</button>
            <button className="btn btn-success" onClick={() => createExperiencedApplicant(experiencedApplicant)}>Create</button>
        </div>
    )
}

export default ExperiencedApplicantFormEditor
