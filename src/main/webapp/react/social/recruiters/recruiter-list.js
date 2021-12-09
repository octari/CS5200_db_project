const {Link, useHistory} = window.ReactRouterDOM;
import recruiterService from "./recruiter-service"
const { useState, useEffect } = React;

const RecruiterList = () => {
    const history = useHistory()
    const [recruiters, setRecruiters] = useState([])
    useEffect(() => {
        findAllRecruiters()
    }, [])
    const findAllRecruiters = () =>
        recruiterService.findAllRecruiters()
            .then(recruiters => setRecruiters(recruiters))

    return(
        <div>
            <h2>Recruiter List</h2>
            <button className="btn btn-primary"
                    onClick={() => history.push("/recruiters/new")}>
                Add Recruiter
            </button>
            <ul className="list-group">
                {
                    recruiters.map(recruiter =>
                        <li className="list-group-item" key={recruiter.id}>
                            <Link to={`/recruiters/${recruiter.id}`}>
                            {/*<Link to={`/recruiters/${recruiter.id}/applicants`}>*/}
                            {recruiter.firstName},
                            {recruiter.lastName},
                                {recruiter.email},
                                {recruiter.phone},
                                {recruiter.companyId}
                                {/*</Link>*/}
                            {/*<Link to={`/recruiters/${recruiter.id}`}>*/}
                            {/*    <button className="btn btn-primary">Edit</button>*/}
                            {/*</Link>*/}
                            </Link>
                        </li>)
                }
            </ul>
        </div>
    )
}

export default RecruiterList;
