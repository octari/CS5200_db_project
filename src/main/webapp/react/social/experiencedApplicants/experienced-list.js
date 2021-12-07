const {Link, useHistory} = window.ReactRouterDOM;
import applicantService from "./experienced-service"
const { useState, useEffect } = React;

const ExperiencedApplicantList = () => {
    const history = useHistory()
    const [experiencedApplicants, setExperiencedApplicants] = useState([])
    useEffect(() => {
        findAllExperiencedApplicants()
    }, [])
    const findAllExperiencedApplicants = () =>
        applicantService.findAllExperiencedApplicants()
            .then(experiencedApplicants => setExperiencedApplicants(experiencedApplicants))

    return(
        <div>
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
                                {experiencedApplicant.id},
                                {experiencedApplicant.firstName},
                                {experiencedApplicant.lastName},
                                {experiencedApplicant.email},
                                {experiencedApplicant.username},
                                {experiencedApplicant.password},
                                {experiencedApplicant.dateOfBirth},
                                {experiencedApplicant.recruiterId},
                                {experiencedApplicant.workExperience}

                            </Link>
                        </li>)
                }
            </ul>
        </div>
    )
}

export default ExperiencedApplicantList;
