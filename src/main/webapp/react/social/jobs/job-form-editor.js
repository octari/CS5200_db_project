import jobService from "./job-service"
const {useState, useEffect} = React;
const {useParams, useHistory} = window.ReactRouterDOM;

const JobFormEditor = () => {
        const {id} = useParams()
        const [job, setJob] = useState({})
        useEffect(() => {
                if(id !== "new") {
                        findJobById(id)
                }
        }, []);
        const findJobById = (id) =>
            jobService.findJobById(id)
                .then(job => setJob(job))
        const deleteJob = (id) =>
            jobService.deleteJob(id)
                .then(() => history.back())
        const createJob = (job) =>
            jobService.createJob(job)
                .then(() => history.back())
        const updateJob = (id, newJob) =>
            jobService.updateJob(id, newJob)
                .then(() => history.back())
        return (
        <div>
            <h2>Job Editor</h2>
            <label>Id</label>
                <input value={job.id}/><br/>
            <label>Company Name</label>
                <input onChange={(e) =>
                    setJob(job =>
                        ({...job, companyName: e.target.value}))}
                       value={job.companyName}/><br/>
                <label>Level</label>
                <input onChange={(e) =>
                    setJob(job =>
                        ({...job, level: e.target.value}))}
                       value={job.level}/><br/>
                <label>Tile</label>
                <input onChange={(e) =>
                    setJob(job =>
                        ({...job, title: e.target.value}))}
                       value={job.title}/><br/>

            <button className="btn btn-warning" onClick={() => history.back()}>Cancel</button>
            <button className="btn btn-danger" onClick={() => deleteJob(job.id)}>Delete</button>
            <button className="btn btn-primary" onClick={() => updateJob(job.id, job)}>Save</button>
            <button className="btn btn-success" onClick={() => createJob(job)}>Create</button>
        </div>
    )
}

export default JobFormEditor
