const {Link, useHistory} = window.ReactRouterDOM;
import companyService from "./company-service"
const { useState, useEffect } = React;

const CompanyList = () => {
    const history = useHistory()
    const [companies, setCompanies] = useState([])
    useEffect(() => {
        findAllCompanies()
    }, [])
    const findAllCompanies = () =>
        companyService.findAllCompanies()
            .then(companies => setCompanies(companies))

    return(
        <div>
            <h2>Company List</h2>
            <button className="btn btn-primary"
                    onClick={() => history.push("/companies/new")}>
                Add Company
            </button>
            <ul className="list-group">
                {
                    companies.map(company =>
                        <li className="list-group-item" key={company.id}>
                            <Link to={`/companies/${company.id}`}>
                            {company.name},
                            {company.jobTitle}
                            </Link>
                        </li>)
                }
            </ul>
        </div>
    )
}

export default CompanyList;
