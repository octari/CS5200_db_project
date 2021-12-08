const {Link, useHistory} = window.ReactRouterDOM;
import applicantService from "./applicant-service"
const { useState, useEffect } = React;

const ApplicantList = () => {
    const history = useHistory()
    const [applicants, setApplicants] = useState([])
    useEffect(() => {
        findAllApplicants()
    }, [])
    const findAllApplicants = () =>
        applicantService.findAllApplicants()
            .then(applicants => setApplicants(applicants))

    return(
        <div>
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
                            {applicant.lastName}
                            {/*{applicant.email},*/}
                            {/*{applicant.username},*/}
                            {/*{applicant.password},*/}
                            {/*{applicant.dateOfBirth}*/}
                            {/*{applicant.recruiterId}*/}

                            </Link>
                        </li>)
                }
            </ul>
        </div>
    )
}

export default ApplicantList;
