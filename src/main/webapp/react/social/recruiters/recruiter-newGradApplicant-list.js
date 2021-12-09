const {Link, useHistory, useParams} = window.ReactRouterDOM;
import newGradApplicationService from "../newGradApplicants/newgrad-service"
const { useState, useEffect } = React;

const RecruiterNewGradApplicantList = () => {
    const {recruiterId} = useParams()
    const history = useHistory()
    const [newGradApplicants, setNewGradApplicants] = useState([])
    useEffect(() => {
        findNewGradApplicantsForRecruiter(recruiterId)
    }, [])
    const findNewGradApplicantsForRecruiter = (recruiterId) =>
        newGradApplicationService.findNewGradApplicantsForRecruiter(recruiterId)
            .then(newGradApplicants => setNewGradApplicants(newGradApplicants))

    return(
        <div>
            {console.log(newGradApplicants)}
            <h2>NewGrad Applicant List</h2>
            <button className="btn btn-primary"
                    onClick={() => history.push("/newGradApplicants/new")}>
                Add newGrad Applicant
            </button>
            <ul className="list-group">
                {
                    newGradApplicants.map(newGradApplicant =>
                        <li className="list-group-item" key={newGradApplicant.id}>
                            <Link to={`/newGradApplicants/${newGradApplicant.id}`}>
                                {newGradApplicant.firstName},
                                {newGradApplicant.lastName},
                                {newGradApplicant.recruiterId}

                            </Link>
                        </li>)
                }
            </ul>
        </div>
    )
}

export default RecruiterNewGradApplicantList;
