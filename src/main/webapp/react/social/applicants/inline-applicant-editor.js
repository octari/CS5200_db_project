const {useState, useEffect } = React;
const {Link} = window.ReactRouterDOM;

const InlineApplicantEditor = ({applicant, deleteApplicant, updateApplicant}) => {
    const [applicantCopy, setApplicantCopy] = useState(applicant)
    const [editing, setEditing] = useState(false)
    return(
        <div>
            {
                editing &&
                <div className="row">
                    <div className="col">
                        <input
                            className="form-control"
                            value={applicantCopy.firstName}
                            onChange={(e)=>setApplicantCopy(applicantCopy => ({...applicantCopy, firstName: e.target.value}))}/>
                    </div>
                    <div className="col">
                        <input
                            className="form-control"
                            value={applicantCopy.lastName}
                            onChange={(e)=>setApplicantCopy(applicantCopy => ({...applicantCopy, lastName: e.target.value}))}/>
                    </div>
                    <div className="col">
                        <input
                            className="form-control"
                            value={applicantCopy.email}
                            onChange={(e)=>setApplicantCopy(applicantCopy => ({...applicantCopy, email: e.target.value}))}/>
                    </div>
                    <div className="col-1">
                        <Link to={`/Applicants/${applicantCopy.id}`}>

                        </Link>
                    </div>
                    <div className="col-2">
                        <i className="fas fa-2x fa-check float-right margin-left-10px"
                           onClick={() => {
                               setEditing(false)
                               updateApplicant(applicantCopy.id, applicantCopy)
                           }}></i>
                        <i className="fas fa-2x fa-undo float-right margin-left-10px"
                           onClick={() => setEditing(false)}></i>
                        <i className="fas fa-2x fa-trash float-right margin-left-10px"
                           onClick={() => deleteApplicant(applicant.id)}></i>
                    </div>
                </div>
            }
            {
                !editing &&
                <div className="row">
                    <div className="col">
                        <Link to={`/applicants/${applicantCopy.id}`}>
                            {applicantCopy.firstName}
                        </Link>
                    </div>
                    <div className="col">
                        <Link to={`/applicants/${applicantCopy.id}`}>
                            {applicantCopy.lastName}
                        </Link>
                    </div>
                    <div className="col">
                        <Link to={`/applicants/${applicantCopy.id}`}>
                            {applicantCopy.email}
                        </Link>
                    </div>
                    <div className="col-1">
                        <Link to={`/applicants/${applicantCopy.id}`}>

                        </Link>
                    </div>
                    <div className="col-2">
                        <i className="fas fa-cog fa-2x float-right"
                           onClick={() => setEditing(true)}></i>
                    </div>
                </div>
            }
        </div>
    )
}

export default InlineApplicantEditor;