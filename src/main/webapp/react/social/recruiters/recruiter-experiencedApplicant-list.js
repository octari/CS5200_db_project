const {Link, useHistory, useParams} = window.ReactRouterDOM;

import experiencedApplicantService from "../experiencedApplicants/experienced-service"
const { useState, useEffect } = React;

const RecruiterExperiencedApplicantList = () => {
    const {recruiterId} = useParams()
    const history = useHistory()
    const [experiencedApplicants, setExperiencedApplicant] = useState([])
    useEffect(() => {
        findExperiencedApplicantsForRecruiter(recruiterId)
    }, [])
    const findExperiencedApplicantsForRecruiter = (recruiterId) =>
        experiencedApplicantService.findExperiencedApplicantsForRecruiter(recruiterId)
            .then(experiencedApplicant => setExperiencedApplicant(experiencedApplicant))

    return(
        <div>
            {console.log(experiencedApplicants)}
            <h2>Experienced Applicant List</h2>
            <button className="btn btn-primary"
                    onClick={() => history.push("/experiencedApplicants/new")}>
                Add Experienced Applicant
            </button>
            <ul className="list-group">
                {
                    experiencedApplicants.map(experiencedApplicant =>
                        <li className="list-group-item" key={experiencedApplicant.id}>
                            <Link to={`/experiencedApplicants/${experiencedApplicant.id}`}>
                                {experiencedApplicant.firstName},
                                {experiencedApplicant.lastName},
                                {experiencedApplicant.recruiterId}

                            </Link>
                        </li>)
                }
            </ul>
        </div>
    )
}

export default RecruiterExperiencedApplicantList;
