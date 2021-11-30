import applicationService from "./application-service"
const {useState, useEffect} = React;
const {useParams, useHistory} = window.ReactRouterDOM;

const ApplicationFormEditor = () => {
    const {id} = useParams()
    const [application, setApplication] = useState({})
    useEffect(() => {
        if(id !== "new") {
            findApplicationById(id)
        }
    }, []);
    const findApplicationById = (id) =>
        applicationService.findApplicationById(id)
            .then(application => setApplication(application))
    const deleteApplication = (id) =>
        applicationService.deleteApplication(id)
            .then(() => history.back())
    const createApplication = (application) =>
        applicationService.createApplication(application)
            .then(() => history.back())
    const updateApplication = (id, newApplication) =>
        applicationService.updateApplication(id, newApplication)
            .then(() => history.back())
    return (
        <div>
            <h2>Application Editor</h2>
            <label>Id</label>
            <input value={application.id}/><br/>
            <label>Applicant Name</label>
            <input onChange={(e) =>
                setApplication(applicant =>
                    ({...application, applicantName: e.target.value}))}
                   value={application.applicantName}/><br/>
            <label>Last Name</label>
            <input onChange={(e) =>
                setApplication(user =>
                    ({...user, lastName: e.target.value}))}
                   value={user.lastName}/><br/>
            <label>Username</label>
            <input onChange={(e) =>
                setUser(user =>
                    ({...user, username: e.target.value}))}
                   value={user.username}/><br/>
            <label>Password</label>
            <input onChange={(e) =>
                setUser(user =>
                    ({...user, password: e.target.value}))}
                   value={user.password}/><br/>
            <button
                onClick={() => {
                    history.back()}}>
                Cancel
            </button>
            <button
                onClick={() => deleteUser(user.id)}>
                Delete
            </button>
            <button onClick={() => updateUser(user.id, user)}
                    className="btn btn-primary">Save</button>
            <button onClick={() => createUser(user)}
                    className="btn btn-success">Create</button>
        </div>
    )
}

export default ApplicationFormEditor
