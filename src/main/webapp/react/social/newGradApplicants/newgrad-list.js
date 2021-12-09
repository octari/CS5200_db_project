const {Link, useHistory} = window.ReactRouterDOM;
import newGradApplicantService from "./newgrad-service"
const { useState, useEffect } = React;

const NewGradApplicantList = () => {
    const history = useHistory()
    const [newGradApplicants, setNewGradApplicants] = useState([])
    useEffect(() => {
        findAllNewGradApplicants()
    }, [])
    const findAllNewGradApplicants = () =>
        newGradApplicantService.findAllNewGradApplicants()
            .then(newGradApplicants => setNewGradApplicants(newGradApplicants))

    return(
        <div>
            <h2>New Graduate Applicant List</h2>
            <button className="btn btn-primary"
                    onClick={() => history.push("/newGradApplicants/new")}>
                Add New Graduate Applicant
            </button>
            <ul className="list-group">
                {
                    newGradApplicants.map(newGradApplicant =>
                        <li className="list-group-item" key={newGradApplicant.id}>
                            <Link to={`/newGradApplicants/${newGradApplicant.id}`}>
                                {newGradApplicant.id},
                                {newGradApplicant.firstName},
                                {newGradApplicant.lastName},
                                {newGradApplicant.email},
                                {newGradApplicant.username},
                                {newGradApplicant.password},
                                {newGradApplicant.dateOfBirth},
                                {newGradApplicant.recruiterId},
                                {newGradApplicant.degree}
                                {newGradApplicant.internshipCoop}

                            </Link>
                        </li>)
                }
            </ul>
        </div>
    )
}

export default NewGradApplicantList;
