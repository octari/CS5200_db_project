const {useState, useEffect } = React;
const {Link} = window.ReactRouterDOM;

const InlineNewGradApplicantEditor = ({newGradApplicant, deleteNewGradApplicant, updateNewGradApplicant}) => {
    const [newGradApplicantCopy, setNewGradApplicantCopy] = useState(newGradApplicant)
    const [editing, setEditing] = useState(false)
    return(
        <div>
            {
                editing &&
                <div className="row">
                    <div className="col">
                        <input
                            className="form-control"
                            value={newGradApplicantCopy.firstName}
                            onChange={(e)=>setNewGradApplicantCopy(newGradApplicantCopy => ({...newGradApplicantCopy, firstName: e.target.value}))}/>
                    </div>
                    <div className="col">
                        <input
                            className="form-control"
                            value={newGradApplicantCopy.lastName}
                            onChange={(e)=>setNewGradApplicantCopy(newGradApplicantCopy => ({...newGradApplicantCopy, lastName: e.target.value}))}/>
                    </div>
                    <div className="col">
                        <input
                            className="form-control"
                            value={newGradApplicantCopy.username}
                            onChange={(e)=>setNewGradApplicantCopy(newGradApplicantCopy => ({...newGradApplicantCopy, username: e.target.value}))}/>
                    </div>
                    <div className="col">
                        <input
                            className="form-control"
                            value={newGradApplicantCopy.password}
                            onChange={(e)=>setNewGradApplicantCopy(newGradApplicantCopy => ({...newGradApplicantCopy, password: e.target.value}))}/>
                    </div>
                    <div className="col">
                        <input
                            className="form-control"
                            value={newGradApplicantCopy.email}
                            onChange={(e)=>setNewGradApplicantCopy(newGradApplicantCopy => ({...newGradApplicantCopy, email: e.target.value}))}/>
                    </div>
                    <div className="col">
                        <input
                            className="form-control"
                            value={newGradApplicantCopy.phone}
                            onChange={(e)=>setNewGradApplicantCopy(newGradApplicantCopy => ({...newGradApplicantCopy, phone: e.target.value}))}/>
                    </div>
                    <div className="col">
                        <input
                            className="form-control"
                            value={newGradApplicantCopy.dateOfBirth}
                            onChange={(e)=>setNewGradApplicantCopy(newGradApplicantCopy => ({...newGradApplicantCopy, dateOfBirth: e.target.value}))}/>
                    </div>
                    <div className="col-1">
                        <Link to={`/newGradApplicants/${newGradApplicantCopy.id}`}>

                        </Link>
                    </div>
                    <div className="col">
                        <input
                            className="form-control"
                            value={newGradApplicantCopy.degree}
                            onChange={(e)=>setNewGradApplicantCopy(newGradApplicantCopy => ({...newGradApplicantCopy, degree: e.target.value}))}/>
                    </div>
                    <div className="col">
                        <input
                            className="form-control"
                            value={newGradApplicantCopy.internshipCoop}
                            onChange={(e)=>setNewGradApplicantCopy(newGradApplicantCopy => ({...newGradApplicantCopy, internshipCoop: e.target.value}))}/>
                    </div>
                    <div className="col-2">
                        <i className="fas fa-2x fa-check float-right margin-left-10px"
                           onClick={() => {
                               setEditing(false)
                               updateNewGradApplicant(newGradApplicantCopy.id, newGradApplicantCopy)
                           }}></i>
                        <i className="fas fa-2x fa-undo float-right margin-left-10px"
                           onClick={() => setEditing(false)}></i>
                        <i className="fas fa-2x fa-trash float-right margin-left-10px"
                           onClick={() => deleteNewGradApplicant(newGradApplicantCopy.id)}></i>
                    </div>
                </div>
            }
            {
                !editing &&
                <div className="row">
                    <div className="col">
                        <Link to={`/newGradApplicants/${newGradApplicantCopy.id}`}>
                            {newGradApplicantCopy.firstName}
                        </Link>
                    </div>
                    <div className="col">
                        <Link to={`/newGradApplicants/${newGradApplicantCopy.id}`}>
                            {newGradApplicantCopy.lastName}
                        </Link>
                    </div>
                    <div className="col">
                        <Link to={`/newGradApplicants/${newGradApplicantCopy.id}`}>
                            {newGradApplicantCopy.email}
                        </Link>
                    </div>
                    <div className="col">
                        <Link to={`/newGradApplicants/${newGradApplicantCopy.id}`}>
                            {newGradApplicantCopy.username}
                        </Link>
                    </div>
                    <div className="col">
                        <Link to={`/newGradApplicants/${newGradApplicantCopy.id}`}>
                            {newGradApplicantCopy.password}
                        </Link>
                    </div>
                    <div className="col">
                        <Link to={`/newGradApplicants/${newGradApplicantCopy.id}`}>
                            {newGradApplicantCopy.dateOfBirth}
                        </Link>
                    </div>
                    <div className="col-1">
                        <Link to={`/newGradApplicants/${newGradApplicantCopy.id}`}>

                        </Link>
                    </div>
                    <div className="col">
                        <Link to={`/newGradApplicants/${newGradApplicantCopy.id}`}>
                            {newGradApplicantCopy.degree}
                        </Link>
                    </div>
                    <div className="col">
                        <Link to={`/newGradApplicants/${newGradApplicantCopy.id}`}>
                            {newGradApplicantCopy.internshipCoop}
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

export default InlineNewGradApplicantEditor;
