import companyService from "./company-service"
const {useState, useEffect} = React;
const {useParams, useHistory} = window.ReactRouterDOM;

const CompanyFormEditor = () => {
        const {id} = useParams()
        const [company, setCompany] = useState({})
        useEffect(() => {
                if(id !== "new") {
                        findCompanyById(id)
                }
        }, []);
        const findCompanyById = (id) =>
            companyService.findCompanyById(id)
                .then(company => setCompany(company))
        const deleteCompany = (id) =>
            companyService.deleteCompany(id)
                .then(() => history.back())
        const createCompany = (company) =>
            companyService.createCompany(company)
                .then(() => history.back())
        const updateCompany = (id, newCompany) =>
            companyService.updateCompany(id, newCompany)
                .then(() => history.back())
        return (
        <div>
            <h2>Company Editor</h2>
            <label>Id</label>
                <input value={company.id}/><br/>
            <label>Company Name</label>
                <input onChange={(e) =>
                    setCompany(company =>
                        ({...company, name: e.target.value}))}
                       value={company.name}/><br/>
                <label>Job Title</label>
                <input onChange={(e) =>
                    setCompany(company =>
                        ({...company, jobTitle: e.target.value}))}
                       value={company.jobTitle}/><br/>
            <button className="btn btn-warning" onClick={() => history.back()}>Cancel</button>
            <button className="btn btn-danger" onClick={() => deleteCompany(company.id)}>Delete</button>
            <button className="btn btn-primary" onClick={() => updateCompany(company.id, company)}>Save</button>
            <button className="btn btn-success" onClick={() => createCompany(company)}>Create</button>
        </div>
    )
}

export default CompanyFormEditor
