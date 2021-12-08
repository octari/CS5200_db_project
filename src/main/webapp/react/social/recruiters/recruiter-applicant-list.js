const {Link, useHistory, useParams} = window.ReactRouterDOM;
import applicantService from "../applicants/applicant-service"
const { useState, useEffect } = React;

const RecruiterApplicantList = () => {
    const {recruiterId} = useParams()
    const history = useHistory()
    const [applicants, setApplicants] = useState([])
    useEffect(() => {
        findApplicantsForRecruiter(recruiterId)
    }, [])
    const findApplicantsForRecruiter = (recruiterId) =>
        applicantService.findApplicantsForRecruiter(recruiterId)
            .then(applicants => setApplicants(applicants))

    return(
        <div>
            {console.log(applicants)}
            <h2>Applicant List</h2>
            <button className="btn btn-primary"
                    onClick={() => history.push("/applicants/new")}>
                Add Applicant
            </button>
            <ul className="list-group">
                {
                    applicants.map(applicant =>
                        <li className="list-group-item" key={applicant.id}>
                            <Link to={`/applicants/${applicant.id}`}>
                                {applicant.firstName},
                                {applicant.lastName},

                            </Link>
                        </li>)
                }
            </ul>
        </div>
    )
}

export default RecruiterApplicantList;
