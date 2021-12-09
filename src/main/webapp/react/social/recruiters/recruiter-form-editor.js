import recruiterService from "./recruiter-service"
import applicantService from "../applicants/applicant-service"
import newGradService from "../newGradApplicants/newgrad-service"
import experiencedService from "../experiencedApplicants/experienced-service"
const {useState, useEffect} = React;
const {Link, useParams} = window.ReactRouterDOM;

const RecruiterFormEditor = () => {
    const {id} = useParams()
    const [recruiter, setRecruiter] = useState({})
    const [applicants, setApplicants] = useState([])
    const [newGradApplicants, setNewGradApplicants] = useState([])
    const [experiencedApplicants, setExperiencedApplicants] = useState([])
    useEffect(() => {
        if(id !== "new") {
            findRecruiterById(id)
            // findApplicantsForRecruiter(id)
            findNewGradApplicantsForRecruiter(id)
            findExperiencedApplicantsForRecruiter(id)
        }
    }, []);
    const findRecruiterById = (id) =>
        recruiterService.findRecruiterById(id)
            .then(recruiter => setRecruiter(recruiter))
    const findApplicantsForRecruiter = (id) =>
        applicantService.findApplicantsForRecruiter(id)
            .then(applicants => setApplicants(applicants))
    const findNewGradApplicantsForRecruiter = (id) =>
        newGradService.findNewGradApplicantsForRecruiter(id)
            .then(applicants => setNewGradApplicants(applicants))
    const findExperiencedApplicantsForRecruiter = (id) =>
        experiencedService.findExperiencedApplicantsForRecruiter(id)
            .then(applicants => setExperiencedApplicants(applicants))
    const deleteRecruiter = (id) =>
        recruiterService.deleteRecruiter(id)
            .then(() => history.back())
    const createRecruiter = (recruiter) =>
        recruiterService.createRecruiter(recruiter)
            .then(() => history.back())
    const updateRecruiter = (id, newRecruiter) =>
        recruiterService.updateRecruiter(id, newRecruiter)
            .then(() => history.back())
    return (
        <div>
            {console.log("newgrad", newGradApplicants)}
            <h2>Recruiter Editor</h2>
            <label>Id</label>
            <input value={recruiter.id}/><br/>
            <label>First Name</label>
            <input onChange={(e) =>
                setRecruiter(recruiter =>
                    ({...recruiter, firstName: e.target.value}))}
                   value={recruiter.firstName}/><br/>
            <label>Last Name</label>
            <input onChange={(e) =>
                setRecruiter(recruiter =>
                    ({...recruiter, lastName: e.target.value}))}
                   value={recruiter.lastName}/><br/>
            <label>Email</label>
            <input onChange={(e) =>
                setRecruiter(recruiter =>
                    ({...recruiter, email: e.target.value}))}
                   value={recruiter.email}/><br/>

            <label>Phone</label>
            <input onChange={(e) =>
                setRecruiter(recruiter =>
                    ({...recruiter, phone: e.target.value}))}
                   value={recruiter.phone}/><br/>
            <label>Company</label>
            <input onChange={(e) =>
                setRecruiter(recruiter =>
                    ({...recruiter, companyId: e.target.value}))}
                   value={recruiter.companyId}/><br/>
            {/*<h2>Applicants List</h2>*/}
            {/*<ul className="list-group">*/}
            {/*    {*/}
            {/*        applicants.map(applicant =>*/}
            {/*            <li className="list-group-item" key={applicant.id}>*/}
            {/*                <Link to={`/applicants/${applicant.id}`}>*/}
            {/*                    {applicant.firstName},*/}
            {/*                    {applicant.lastName},*/}
            {/*                    {applicant.recruiterId}*/}

            {/*                </Link>*/}
            {/*            </li>)*/}
            {/*    }*/}
            {/*</ul>*/}
            <h2>New Grad Applicants</h2>
            <ul className="list-group">
                {
                    newGradApplicants.map(applicant =>
                        <li className="list-group-item" key={applicant.id}>
                            <Link to={`/newGradApplicants/${applicant.id}`}>
                                {applicant.firstName},
                                {applicant.lastName}

                            </Link>
                        </li>)
                }
            </ul>
            <h2>Experienced Applicants</h2>
            <ul className="list-group">
                {
                    experiencedApplicants.map(applicant =>
                        <li className="list-group-item" key={applicant.id}>
                            <Link to={`/experiencedApplicants/${applicant.id}`}>
                                {applicant.firstName},
                                {applicant.lastName}

                            </Link>
                        </li>)
                }
            </ul>

            <button className="btn btn-warning" onClick={() => history.back()}>Cancel</button>
            <button className="btn btn-danger" onClick={() => deleteRecruiter(recruiter.id)}>Delete</button>
            <button className="btn btn-primary" onClick={() => updateRecruiter(recruiter.id, recruiter)}>Save</button>
            <button className="btn btn-success" onClick={() => createRecruiter(recruiter)}>Create</button>
        </div>
    )
}

export default RecruiterFormEditor

// import recruiterService from "./recruiter-service"
//
// const {useState, useEffect} = React;
// const {useParams} = window.ReactRouterDOM;
//
// const RecruiterFormEditor = () => {
//         const {id} = useParams()
//         const [recruiter, setRecruiter] = useState({})
//         const [applicants, setApplicants] = useState([])
//         useEffect(() => {
//                 if(id !== "new") {
//                         findRecruiterById(id)
//                         // findApplicantForRecruiters(id)
//                 }
//         }, []);
//         const findRecruiterById = (id) =>
//             recruiterService.findRecruiterById(id)
//                 .then(recruiter => setRecruiter(recruiter))
//         // const findApplicantForRecruiters = (id) =>
//         //     applicantService.findApplicantsForRecruiter(id)
//         //         .then(applicants => setApplicants(applicants))
//         const deleteRecruiter = (id) =>
//             recruiterService.deleteRecruiter(id)
//                 .then(() => history.back())
//         const createRecruiter = (recruiter) =>
//             recruiterService.createRecruiter(recruiter)
//                 .then(() => history.back())
//         const updateRecruiter = (id, newRecruiter) =>
//             recruiterService.updateRecruiter(id, newRecruiter)
//                 .then(() => history.back())
//         return (
//         <div>
//
//             <h2>Recruiter Editor</h2>
//             <label>Id</label>
//                 <input value={recruiter.id}/><br/>
//             <label>First Name</label>
//                 <input onChange={(e) =>
//                     setRecruiter(recruiter =>
//                         ({...recruiter, firstName: e.target.value}))}
//                        value={recruiter.firstName}/><br/>
//                 <label>Last Name</label>
//                 <input onChange={(e) =>
//                     setRecruiter(recruiter =>
//                         ({...recruiter, lastName: e.target.value}))}
//                        value={recruiter.lastName}/><br/>
//                 <label>Email</label>
//                 <input onChange={(e) =>
//                     setRecruiter(recruiter =>
//                         ({...recruiter, email: e.target.value}))}
//                        value={recruiter.email}/><br/>
//
//             <label>Phone</label>
//             <input onChange={(e) =>
//                 setRecruiter(recruiter =>
//                     ({...recruiter, phone: e.target.value}))}
//                    value={recruiter.phone}/><br/>
//             <label>Company</label>
//             <input onChange={(e) =>
//                 setRecruiter(recruiter =>
//                     ({...recruiter, companyId: e.target.value}))}
//                    value={recruiter.companyId}/><br/>
//
//
//             <button className="btn btn-warning" onClick={() => history.back()}>Cancel</button>
//             <button className="btn btn-danger" onClick={() => deleteRecruiter(recruiter.id)}>Delete</button>
//             <button className="btn btn-primary" onClick={() => updateRecruiter(recruiter.id, recruiter)}>Save</button>
//             <button className="btn btn-success" onClick={() => createRecruiter(recruiter)}>Create</button>
//         </div>
//     )
// }
//
// export default RecruiterFormEditor
