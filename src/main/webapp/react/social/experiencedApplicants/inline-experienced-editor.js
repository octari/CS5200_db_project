const {useState, useEffect } = React;
const {Link} = window.ReactRouterDOM;

const InlineExperiencedApplicantEditor = ({experiencedApplicant, deleteExperiencedApplicant, updateExperiencedApplicant}) => {
    const [experiencedApplicantCopy, setExperiencedApplicantCopy] = useState(experiencedApplicant)
    const [editing, setEditing] = useState(false)
    return(
        <div>
            {
                editing &&
                <div className="row">
                    <div className="col">
                        <input
                            className="form-control"
                            value={experiencedApplicantCopy.firstName}
                            onChange={(e)=>setExperiencedApplicantCopy(experiencedApplicantCopy => ({...experiencedApplicantCopy, firstName: e.target.value}))}/>
                    </div>
                    <div className="col">
                        <input
                            className="form-control"
                            value={experiencedApplicantCopy.lastName}
                            onChange={(e)=>setExperiencedApplicantCopy(experiencedApplicantCopy => ({...experiencedApplicantCopy, lastName: e.target.value}))}/>
                    </div>
                    <div className="col">
                        <input
                            className="form-control"
                            value={experiencedApplicantCopy.username}
                            onChange={(e)=>setExperiencedApplicantCopy(experiencedApplicantCopy => ({...experiencedApplicantCopy, username: e.target.value}))}/>
                    </div>
                    <div className="col">
                        <input
                            className="form-control"
                            value={experiencedApplicantCopy.password}
                            onChange={(e)=>setExperiencedApplicantCopy(experiencedApplicantCopy => ({...experiencedApplicantCopy, password: e.target.value}))}/>
                    </div>
                    <div className="col">
                        <input
                            className="form-control"
                            value={experiencedApplicantCopy.email}
                            onChange={(e)=>setExperiencedApplicantCopy(experiencedApplicantCopy => ({...experiencedApplicantCopy, email: e.target.value}))}/>
                    </div>
                    <div className="col">
                        <input
                            className="form-control"
                            value={experiencedApplicantCopy.phone}
                            onChange={(e)=>setExperiencedApplicantCopy(experiencedApplicantCopy => ({...experiencedApplicantCopy, phone: e.target.value}))}/>
                    </div>
                    <div className="col">
                        <input
                            className="form-control"
                            value={experiencedApplicantCopy.dateOfBirth}
                            onChange={(e)=>setExperiencedApplicantCopy(experiencedApplicantCopy => ({...experiencedApplicantCopy, dateOfBirth: e.target.value}))}/>
                    </div>
                    <div className="col-1">
                        <Link to={`/Applicants/${experiencedApplicantCopy.id}`}>

                        </Link>
                    </div>
                    <div className="col">
                        <input
                            className="form-control"
                            value={experiencedApplicantCopy.workExperience}
                            onChange={(e)=>setExperiencedApplicantCopy(experiencedApplicantCopy => ({...experiencedApplicantCopy, workExperience: e.target.value}))}/>
                    </div>
                    <div className="col-2">
                        <i className="fas fa-2x fa-check float-right margin-left-10px"
                           onClick={() => {
                               setEditing(false)
                               updateApplicant(experiencedApplicantCopy.id, experiencedApplicantCopy)
                           }}></i>
                        <i className="fas fa-2x fa-undo float-right margin-left-10px"
                           onClick={() => setEditing(false)}></i>
                        <i className="fas fa-2x fa-trash float-right margin-left-10px"
                           onClick={() => deleteApplicant(experiencedApplicant.id)}></i>
                    </div>
                </div>
            }
            {
                !editing &&
                <div className="row">
                    <div className="col">
                        <Link to={`/applicants/${experiencedApplicantCopy.id}`}>
                            {experiencedApplicantCopy.firstName}
                        </Link>
                    </div>
                    <div className="col">
                        <Link to={`/applicants/${experiencedApplicantCopy.id}`}>
                            {experiencedApplicantCopy.lastName}
                        </Link>
                    </div>
                    <div className="col">
                        <Link to={`/applicants/${experiencedApplicantCopy.id}`}>
                            {experiencedApplicantCopy.email}
                        </Link>
                    </div>
                    <div className="col">
                        <Link to={`/applicants/${experiencedApplicantCopy.id}`}>
                            {experiencedApplicantCopy.username}
                        </Link>
                    </div>
                    <div className="col">
                        <Link to={`/applicants/${experiencedApplicantCopy.id}`}>
                            {experiencedApplicantCopy.password}
                        </Link>
                    </div>
                    <div className="col">
                        <Link to={`/applicants/${experiencedApplicantCopy.id}`}>
                            {experiencedApplicantCopy.dateOfBirth}
                        </Link>
                    </div>
                    <div className="col-1">
                        <Link to={`/applicants/${experiencedApplicantCopy.id}`}>

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

export default InlineExperiencedApplicantEditor;
