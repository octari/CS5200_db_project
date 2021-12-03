const {useState, useEffect } = React;
const {Link} = window.ReactRouterDOM;

const InlineRecruiterEditor = ({recruiter, deleteRecruiter, updateRecruiter}) => {
    const [recruiterCopy, setRecruiterCopy] = useState(recruiter)
    const [editing, setEditing] = useState(false)
    return(
        <div>
            {
                editing &&
                <div className="row">
                    <div className="col">
                        <input
                            className="form-control"
                            value={recruiterCopy.firstName}
                            onChange={(e)=>setRecruiterCopy(recruiterCopy => ({...recruiterCopy, firstName: e.target.value}))}/>
                    </div>
                    <div className="col">
                        <input
                            className="form-control"
                            value={recruiterCopy.lastName}
                            onChange={(e)=>setRecruiterCopy(recruiterCopy => ({...recruiterCopy, lastName: e.target.value}))}/>
                    </div>
                    <div className="col">
                        <input
                            className="form-control"
                            value={recruiterCopy.email}
                            onChange={(e)=>setRecruiterCopy(recruiterCopy => ({...recruiterCopy, email: e.target.value}))}/>
                    </div>
                    <div className="col">
                        <input
                            className="form-control"
                            value={recruiterCopy.phone}
                            onChange={(e)=>setRecruiterCopy(recruiterCopy => ({...recruiterCopy, phone: e.target.value}))}/>
                    </div>
                    <div className="col">
                        <input
                            className="form-control"
                            value={recruiterCopy.username}
                            onChange={(e)=>setRecruiterCopy(recruiterCopy => ({...recruiterCopy, username: e.target.value}))}/>
                    </div>
                    <div className="col">
                        <input
                            className="form-control"
                            value={recruiterCopy.password}
                            onChange={(e)=>setRecruiterCopy(recruiterCopy => ({...recruiterCopy, password: e.target.value}))}/>
                    </div>
                    <div className="col">
                        <input
                            className="form-control"
                            value={recruiterCopy.dateOfBirth}
                            onChange={(e)=>setRecruiterCopy(recruiterCopy => ({...recruiterCopy, dateOfBirth: e.target.value}))}/>
                    </div>
                    <div className="col">
                        <input
                            className="form-control"
                            value={recruiterCopy.companyId}
                            onChange={(e)=>setRecruiterCopy(recruiterCopy => ({...recruiterCopy, companyId: e.target.value}))}/>
                    </div>
                    <div className="col-1">
                        <Link to={`/recruiters/${recruiterCopy.id}`}>
                            Blogs
                        </Link>
                    </div>
                    <div className="col-2">
                        <i className="fas fa-2x fa-check float-right margin-left-10px"
                           onClick={() => {
                               setEditing(false)
                               updateRecruiter(recruiterCopy.id, recruiterCopy)
                           }}></i>
                        <i className="fas fa-2x fa-undo float-right margin-left-10px"
                           onClick={() => setEditing(false)}></i>
                        <i className="fas fa-2x fa-trash float-right margin-left-10px"
                           onClick={() => deleteRecruiter(recruiter.id)}></i>
                    </div>
                </div>
            }
            {
                !editing &&
                <div className="row">
                    <div className="col">
                        <Link to={`/recruiters/${recruiterCopy.id}`}>
                            {recruiterCopy.firstName}
                        </Link>
                    </div>
                    <div className="col">
                        <Link to={`/recruiters/${recruiterCopy.id}`}>
                            {recruiterCopy.lastName}
                        </Link>
                    </div>
                    <div className="col">
                        <Link to={`/recruiters/${recruiterCopy.id}`}>
                            {recruiterCopy.email}
                        </Link>
                    </div>
                    <div className="col">
                        <Link to={`/recruiters/${recruiterCopy.id}`}>
                            {recruiterCopy.phone}
                        </Link>
                    </div>
                    <div className="col">
                        <Link to={`/recruiters/${recruiterCopy.id}`}>
                            {recruiterCopy.username}
                        </Link>
                    </div>
                    <div className="col">
                        <Link to={`/recruiters/${recruiterCopy.id}`}>
                            {recruiterCopy.password}
                        </Link>
                    </div>
                    <div className="col">
                        <Link to={`/recruiters/${recruiterCopy.id}`}>
                            {recruiterCopy.dateOfBirth}
                        </Link>
                    </div>
                    <div className="col">
                        <Link to={`/recruiters/${recruiterCopy.id}`}>
                            {recruiterCopy.companyId}
                        </Link>
                    </div>
                    <div className="col-1">
                        <Link to={`/recruiters/${recruiterCopy.id}`}>
                            Blogs
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

export default InlineRecruiterEditor;