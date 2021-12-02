const {useState, useEffect } = React;
const {Link} = window.ReactRouterDOM;

const InlineApplicationEditor = ({application, deleteApplication, updateApplication}) => {
    const [applicationCopy, setApplicationCopy] = useState(application)
    const [editing, setEditing] = useState(false)
    return(
        <div>
            {
                editing &&
                <div className="row">
                    <div className="col">
                        <input
                            className="form-control"
                            value={applicationCopy.applicantName}
                            onChange={(e)=>setApplicationCopy(applicationCopy => ({...applicationCopy, applicantName: e.target.value}))}/>
                    </div>
                    <div className="col">
                        <input
                            className="form-control"
                            value={applicationCopy.appliedPosition}
                            onChange={(e)=>setApplicationCopy(application => ({...application, appliedPosition: e.target.value}))}/>
                    </div>
                    <div className="col">
                        <input
                            className="form-control"
                            value={applicationCopy.appliedDate}
                            onChange={(e)=>setApplicationCopy(applicationCopy => ({...applicationCopy, appliedDate: e.target.value}))}/>
                    </div>
                    <div className="col">
                        <input
                            className="form-control"
                            value={applicationCopy.applicantId}
                            onChange={(e)=>setApplicationCopy(applicationCopy => ({...applicationCopy, applicantId: e.target.value}))}/>
                    </div>
                    <div className="col">
                        <input
                            className="form-control"
                            value={applicationCopy.jobId}
                            onChange={(e)=>setApplicationCopy(applicationCopy => ({...applicationCopy, jobId: e.target.value}))}/>
                    </div>
                    <div className="col-2">
                        <i className="fas fa-2x fa-check float-right margin-left-10px"
                           onClick={() => {
                               setEditing(false)
                               updateApplication(applicationCopy.id, applicationCopy)
                           }}></i>
                        <i className="fas fa-2x fa-undo float-right margin-left-10px"
                           onClick={() => setEditing(false)}></i>
                        <i className="fas fa-2x fa-trash float-right margin-left-10px"
                           onClick={() => deleteApplication(application.id)}></i>
                    </div>
                </div>
            }
            {
                !editing &&
                <div className="row">
                    <div className="col">
                        <Link to={`/applications/${applicationCopy.id}`}>
                            {applicationCopy.applicantName}
                        </Link>
                    </div>
                    <div className="col">
                        <Link to={`/applications/${applicationCopy.id}`}>
                            {applicationCopy.appliedPosition}
                        </Link>
                    </div>
                    <div className="col">
                        <Link to={`/applications/${applicationCopy.id}`}>
                            {/*{applicationCopy.appliedDate}*/}
                            {new Date()}
                        </Link>
                    </div>
                    <div className="col">
                        <Link to={`/applications/${applicationCopy.id}`}>
                            {applicationCopy.applicantId}
                        </Link>
                    </div>
                    <div className="col">
                        <Link to={`/applications/${applicationCopy.id}`}>
                            {applicationCopy.jobId}
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

export default InlineApplicationEditor;
