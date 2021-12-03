import recruiterService from "./recruiter-service"
const {useState, useEffect} = React;
const {useParams} = window.ReactRouterDOM;

const RecruiterFormEditor = () => {
        const {id} = useParams()
        const [recruiter, setRecruiter] = useState({})
        useEffect(() => {
                if(id !== "new") {
                        findRecruiterById(id)
                }
        }, []);
        const findRecruiterById = (id) =>
            recruiterService.findRecruiterById(id)
                .then(recruiter => setRecruiter(recruiter))
        const deleteRecruiter = (id) =>
            recruiterService.deleteRecruiter(id)
                .then(() => history.back())
        const createRecruiter = (recruiter) =>
            recruiterService.createRecruiter(recruiter)
                .then(() => history.back())
        const updateRecruiter = (id, newRecruiter) =>
            recruiterService.updateRecruiter(id, newRecruiter)
                .then(() => history.back())
        return (
        <div>
            <h2>Recruiter Editor</h2>
            <label>Id</label>
                <input value={recruiter.id}/><br/>
            <label>First Name</label>
                <input onChange={(e) =>
                    setRecruiter(recruiter =>
                        ({...recruiter, firstName: e.target.value}))}
                       value={recruiter.firstName}/><br/>
                <label>Last Name</label>
                <input onChange={(e) =>
                    setRecruiter(recruiter =>
                        ({...recruiter, lastName: e.target.value}))}
                       value={recruiter.lastName}/><br/>
                <label>Email</label>
                <input onChange={(e) =>
                    setRecruiter(recruiter =>
                        ({...recruiter, email: e.target.value}))}
                       value={recruiter.email}/><br/>
            <label>Phone</label>
            <input onChange={(e) =>
                setRecruiter(recruiter =>
                    ({...recruiter, phone: e.target.value}))}
                   value={recruiter.phone}/><br/>
            <label>Username</label>
            <input onChange={(e) =>
                setRecruiter(recruiter =>
                    ({...recruiter, username: e.target.value}))}
                   value={recruiter.username}/><br/>
            <label>Password</label>
            <input onChange={(e) =>
                setRecruiter(recruiter =>
                    ({...recruiter, password: e.target.value}))}
                   value={recruiter.password}/><br/>
            <label>Date of Birth</label>
            <input onChange={(e) =>
                setRecruiter(recruiter =>
                    ({...recruiter, dateOfBirth: e.target.value}))}
                   value={recruiter.dateOfBirth}/><br/>
            <label>Company</label>
            <input onChange={(e) =>
                setRecruiter(recruiter =>
                    ({...recruiter, companyId: e.target.value}))}
                   value={recruiter.companyId}/><br/>


            <button className="btn btn-warning" onClick={() => history.back()}>Cancel</button>
            <button className="btn btn-danger" onClick={() => deleteRecruiter(recruiter.id)}>Delete</button>
            <button className="btn btn-primary" onClick={() => updateRecruiter(recruiter.id, recruiter)}>Save</button>
            <button className="btn btn-success" onClick={() => createRecruiter(recruiter)}>Create</button>
        </div>
    )
}

export default RecruiterFormEditor
