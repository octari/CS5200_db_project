import applicationService from "./application-service";

const {Link, useHistory} = window.ReactRouterDOM;
const { useState, useEffect } = React;

const ApplicationList = () => {
    const history = useHistory()
    const [applications, setApplications] = useState([])
    useEffect(() => {
        findAllApplications()
    }, [])
    const findAllApplications = () =>
        applicationService.findAllApplications()
            .then(applications => setApplications(applications))

    return(
        <div>
            <h2>Applications List</h2>
            <button className="btn btn-primary"
                    onClick={() => history.push("/applications/new")}>
                Add Application
            </button>
            <ul className="list-group">
                {
                    applications.map(application =>
                        <li className="list-group-item" key={application.id}>
                            <Link to={`/applications/${application.id}`}>
                                {application.applicantName},
                                {application.appliedPosition},
                                {application.appliedDate}
                            </Link>
                        </li>)
                }
            </ul>
        </div>
    )
}

export default ApplicationList;
