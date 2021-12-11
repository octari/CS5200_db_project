import applicationService from "./application-service"
import jobService from "./job-service"
import {findJobsForApplication} from "../jobs/job-service";
const {useState, useEffect} = React;
const {useParams, useHistory} = window.ReactRouterDOM;

const ApplicationFormEditor = () => {
    const {id} = useParams()
    const [application, setApplication] = useState({})
    const [job, setJob] = useState([])
    useEffect(() => {
        if(id !== "new") {
            findApplicationById(id)
            findJobsForApplication(id)
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
    const findJobsForApplication = (id) =>
        jobService.findJobsForApplication(id)
            .then(jobs => setJob(jobs))

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
            <label>Applied Position</label>
            <input onChange={(e) =>
                setApplication(application =>
                    ({...application, appliedPosition: e.target.value}))}
                   value={application.appliedPosition}/><br/>
            <label>Applied Date</label>
            <input type="datetime-local" onChange={(e) =>
                setApplication(application =>
                    ({...application, appliedDate: e.target.value}))}
                   value={application.appliedDate}/><br/>

            <label>Applicant Id</label>
            <input onChange={(e) =>
                setApplication(application =>
                    ({...application, applicantId: e.target.value}))}
                   value={application.applicantId}/><br/>
            <label>Job Id</label>
            <input onChange={(e) =>
                setApplication(application =>
                    ({...application, jobId: e.target.value}))}
                   value={application.jobId}/><br/>

            <button className="btn btn-warning"
                onClick={() => {
                    history.back()}}>
                Cancel
            </button>
            <button className="btn btn-danger"
                onClick={() => deleteApplication(application.id)}>
                Delete
            </button>
            <button onClick={() => updateApplication(application.id, application)}
                    className="btn btn-primary">Save</button>
            <button onClick={() => createApplication(application)}
                    className="btn btn-success">Create</button>


            <h2>Jobs</h2>
            {/*<button className="btn btn-primary"*/}
            {/*        onClick={() => history1.push("/applications/new")}>*/}
            {/*    Add Job*/}
            {/*</button>*/}
            <ul className="list-group">
                {
                    job.map(job =>
                        <li className="list-group-item" key={job.id}>
                            {/*<Link to={`/applications/${job.id}`}>*/}
                                {job.companyName},
                                {job.jobTitle},
                                {job.level}
                            {/*</Link>*/}
                        </li>)
                }
            </ul>

        </div>
    )
}

export default ApplicationFormEditor
