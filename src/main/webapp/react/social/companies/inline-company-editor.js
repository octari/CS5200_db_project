const {useState, useEffect } = React;
const {Link} = window.ReactRouterDOM;

const InlineCompanyEditor = ({company, deleteCompany, updateCompany}) => {
    const [companyCopy, setCompanyCopy] = useState(company)
    const [editing, setEditing] = useState(false)
    return(
        <div>
            {
                editing &&
                <div className="row">
                    <div className="col">
                        <input
                            className="form-control"
                            value={companyCopy.name}
                            onChange={(e)=>setCompanyCopy(companyCopy => ({...companyCopy, name: e.target.value}))}/>
                    </div>
                    <div className="col">
                        <input
                            className="form-control"
                            value={companyCopy.jobTitle}
                            onChange={(e)=>setCompanyCopy(companyCopy => ({...companyCopy, jobTitle: e.target.value}))}/>
                    </div>
                    <div className="col-1">
                        <Link to={`/companies/${companyCopy.id}`}>
                            Blogs
                        </Link>
                    </div>
                    <div className="col-2">
                        <i className="fas fa-2x fa-check float-right margin-left-10px"
                           onClick={() => {
                               setEditing(false)
                               updateCompany(companyCopy.id, companyCopy)
                           }}></i>
                        <i className="fas fa-2x fa-undo float-right margin-left-10px"
                           onClick={() => setEditing(false)}></i>
                        <i className="fas fa-2x fa-trash float-right margin-left-10px"
                           onClick={() => deleteCompany(company.id)}></i>
                    </div>
                </div>
            }
            {
                !editing &&
                <div className="row">
                    <div className="col">
                        <Link to={`/companies/${companyCopy.id}`}>
                            {companyCopy.name}
                        </Link>
                    </div>
                    <div className="col">
                        <Link to={`/companies/${companyCopy.id}`}>
                            {companyCopy.jobTitle}
                        </Link>
                    </div>

                    <div className="col-1">
                        <Link to={`/companies/${companyCopy.id}`}>
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

export default InlineCompanyEditor;