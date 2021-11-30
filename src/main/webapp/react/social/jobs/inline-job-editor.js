const {useState, useEffect } = React;
const {Link} = window.ReactRouterDOM;

const InlineJobEditor = ({job, deleteJob, updateJob}) => {
    const [jobCopy, setJobCopy] = useState(job)
    const [editing, setEditing] = useState(false)
    return(
        <div>
            {
                editing &&
                <div className="row">
                    <div className="col">
                        <input
                            className="form-control"
                            value={jobCopy.companyName}
                            onChange={(e)=>setJobCopy(jobCopy => ({...jobCopy, companyName: e.target.value}))}/>
                    </div>
                    <div className="col">
                        <input
                            className="form-control"
                            value={jobCopy.level}
                            onChange={(e)=>setJobCopy(jobCopy => ({...jobCopy, level: e.target.value}))}/>
                    </div>
                    <div className="col">
                        <input
                            className="form-control"
                            value={jobCopy.title}
                            onChange={(e)=>setJobCopy(jobCopy => ({...jobCopy, title: e.target.value}))}/>
                    </div>
                    <div className="col-1">
                        <Link to={`/jobs/${jobCopy.id}`}>

                        </Link>
                    </div>
                    <div className="col-2">
                        <i className="fas fa-2x fa-check float-right margin-left-10px"
                           onClick={() => {
                               setEditing(false)
                               updateJob(jobCopy.id, jobCopy)
                           }}></i>
                        <i className="fas fa-2x fa-undo float-right margin-left-10px"
                           onClick={() => setEditing(false)}></i>
                        <i className="fas fa-2x fa-trash float-right margin-left-10px"
                           onClick={() => deleteJob(job.id)}></i>
                    </div>
                </div>
            }
            {
                !editing &&
                <div className="row">
                    <div className="col">
                        <Link to={`/jobs/${jobCopy.id}`}>
                            {jobCopy.companyName}
                        </Link>
                    </div>
                    <div className="col">
                        <Link to={`/jobs/${jobCopy.id}`}>
                            {jobCopy.level}
                        </Link>
                    </div>
                    <div className="col">
                        <Link to={`/jobs/${jobCopy.id}`}>
                            {jobCopy.title}
                        </Link>
                    </div>
                    <div className="col-1">
                        <Link to={`/jobs/${jobCopy.id}`}>

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

export default InlineJobEditor;