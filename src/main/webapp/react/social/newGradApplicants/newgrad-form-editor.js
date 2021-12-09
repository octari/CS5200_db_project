import newGradApplicantService from "./newgrad-service"
import newGradApplicationService from "../applications/application-service"
const {useState, useEffect} = React;
const {useParams, useHistory} = window.ReactRouterDOM;

const NewGradApplicantFormEditor = () => {
    const {id} = useParams()
    const [newGradApplicant, setNewGradApplicant] = useState({})
    const [applications, setApplications] = useState([])
    const [recruiterId, setRecruiterId] = useState()
    useEffect(() => {
        if(id !== "new") {
            findNewGradApplicantById(id)
            findApplicationsForNewGradApplicant(id)
        }
    }, []);
    const findNewGradApplicantById = (id) =>
        newGradApplicantService.findNewGradApplicantById(id)
            .then(newGradApplicant => setNewGradApplicant(newGradApplicant))
    const deleteNewGradApplicant = (id) =>
        newGradApplicantService.deleteNewGradApplicant(id)
            .then(() => history.back())
    // const createNewGradApplicant = (newGradApplicant) =>
    //     newGradApplicantService.createNewGradApplicant(newGradApplicant)
    const createNewGradApplicantForRecruiter = (recruiterId, newGradApplicant) =>
        newGradApplicantService.createNewGradApplicantForRecruiter(recruiterId, newGradApplicant)
            .then(() => history.back())
    const updateNewGradApplicant = (id, newApplicant) =>
        newGradApplicantService.updateNewGradApplicant(id, newApplicant)
            .then(() => history.back())
    const findApplicationsForNewGradApplicant = (id) =>
        newGradApplicationService.findApplicationsForNewGradApplicant(id)
            .then(applications => setApplications(applications))
    return (
        <div>
            <h2>NewGrad Applicant Editor</h2>
            <label>Id</label>
            <input value={newGradApplicant.id}/><br/>
            <label>First Name</label>
            <input onChange={(e) =>
                setNewGradApplicant(experiencedApplicant =>
                    ({...experiencedApplicant, firstName: e.target.value}))}
                   value={newGradApplicant.firstName}/><br/>
            <label>Last Name</label>
            <input onChange={(e) =>
                setNewGradApplicant(newGradApplicant =>
                    ({...newGradApplicant, lastName: e.target.value}))}
                   value={newGradApplicant.lastName}/><br/>
            <label>Email</label>
            <input onChange={(e) =>
                setNewGradApplicant(newGradApplicant =>
                    ({...newGradApplicant, email: e.target.value}))}
                   value={newGradApplicant.email}/><br/>
            <label>User Name</label>
            <input onChange={(e) =>
                setNewGradApplicant(newGradApplicant =>
                    ({...newGradApplicant, username: e.target.value}))}
                   value={newGradApplicant.username}/><br/>
            <label>Password</label>
            <input onChange={(e) =>
                setNewGradApplicant(newGradApplicant =>
                    ({...newGradApplicant, password: e.target.value}))}
                   value={newGradApplicant.password}/><br/>
            <label>Data of Birth</label>
            <input type="date" onChange={(e) =>
                setNewGradApplicant(newGradApplicant =>
                    ({...newGradApplicant, dateOfBirth: e.target.value}))}
                   value={newGradApplicant.dateOfBirth}/><br/>
            <label>RecruiterId</label>
            <input onChange={(e) =>
                setRecruiterId( e.target.value)}
                   value={recruiterId}/><br/>
            <label>Degree</label>
            <input onChange={(e) =>
                setNewGradApplicant(newGradApplicant =>
                    ({...newGradApplicant, degree: e.target.value}))}
                   value={newGradApplicant.degree}/><br/>
            <label>Internship/Coop</label>
            <input onChange={(e) =>
                setNewGradApplicant(newGradApplicant =>
                    ({...newGradApplicant, internshipCoop: e.target.value}))}
                   value={newGradApplicant.internshipCoop}/><br/>

            <h2>Applications</h2>
            <ul className="list-group">
                {
                    applications.map(application =>
                        <li className="list-group-item" key={application.id}>
                            {/*<Link to={`/applicants/${applicant.id}`}>*/}
                            {application.applicantName},
                            {application.appliedPosition},

                            {/*</Link>*/}
                        </li>)
                }
            </ul>



            <button className="btn btn-warning" onClick={() => history.back()}>Cancel</button>
            <button className="btn btn-danger" onClick={() => deleteNewGradApplicant(newGradApplicant.id)}>Delete</button>
            <button className="btn btn-primary" onClick={() => updateNewGradApplicant(newGradApplicant.id, newGradApplicant)}>Save</button>
            <button className="btn btn-success" onClick={() => createNewGradApplicantForRecruiter(recruiterId,newGradApplicant)}>Create</button>
        </div>
    )
}

export default NewGradApplicantFormEditor
