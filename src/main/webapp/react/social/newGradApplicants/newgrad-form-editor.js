import newGradApplicantService from "./newgrad-service"
const {useState, useEffect} = React;
const {useParams, useHistory} = window.ReactRouterDOM;

const NewGradApplicantFormEditor = () => {
    const {id} = useParams()
    const [newGradApplicant, setNewGradApplicant] = useState({})
    useEffect(() => {
        if(id !== "new") {
            findNewGradApplicantById(id)
        }
    }, []);
    const findNewGradApplicantById = (id) =>
        newGradApplicantService.findNewGradApplicantById(id)
            .then(newGradApplicant => setNewGradApplicant(newGradApplicant))
    const deleteNewGradApplicant = (id) =>
        newGradApplicantService.deleteNewGradApplicant(id)
            .then(() => history.back())
    const createNewGradApplicant = (newGradApplicant) =>
        newGradApplicantService.createNewGradApplicant(newGradApplicant)
            .then(() => history.back())
    const updateNewGradApplicant = (id, newApplicant) =>
        newGradApplicantService.updateNewGradApplicant(id, newApplicant)
            .then(() => history.back())
    return (
        <div>
            <h2>Experienced Applicant Editor</h2>
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
                setNewGradApplicant(newGradApplicant =>
                    ({...newGradApplicant, recruiterId: e.target.value}))}
                   value={newGradApplicant.recruiterId}/><br/>
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



            <button className="btn btn-warning" onClick={() => history.back()}>Cancel</button>
            <button className="btn btn-danger" onClick={() => deleteNewGradApplicant(newGradApplicant.id)}>Delete</button>
            <button className="btn btn-primary" onClick={() => updateNewGradApplicant(newGradApplicant.id, newGradApplicant)}>Save</button>
            <button className="btn btn-success" onClick={() => createNewGradApplicant(newGradApplicant)}>Create</button>
        </div>
    )
}

export default NewGradApplicantFormEditor
