const {Link, useHistory} = window.ReactRouterDOM;
import jobService from "./job-service"
const { useState, useEffect } = React;

const JobList = () => {
    const history = useHistory()
    const [jobs, setJobs] = useState([])
    useEffect(() => {
        findAllJobs()
    }, [])
    const findAllJobs = () =>
        jobService.findAllJobs()
            .then(jobs => setJobs(jobs))

    return(
        <div>
            <h2>Job List</h2>
            <button className="btn btn-primary"
                    onClick={() => history.push("/jobs/new")}>
                Add Job
            </button>
            <ul className="list-group">
                {
                    jobs.map(job =>
                        <li className="list-group-item" key={job.id}>
                            <Link to={`/jobs/${job.id}`}>
                            {job.companyName},
                            {job.level},
                            {job.title}
                            </Link>
                        </li>)
                }
            </ul>
        </div>
    )
}

export default JobList;
