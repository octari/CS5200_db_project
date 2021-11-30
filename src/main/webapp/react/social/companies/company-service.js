const COMPANIES_URL = "http://localhost:8080/api/companies"

export const findAllCompanies = () =>
    fetch(COMPANIES_URL)
        .then(response => response.json())


export const findCompanyById = (id) =>
    fetch(`${COMPANIES_URL}/${id}`)
        .then(response => response.json())


export const deleteCompany = (id) =>
    fetch(`${COMPANIES_URL}/${id}`, {
        method: "DELETE"
    })

export const createCompany = (company) =>
    fetch(COMPANIES_URL, {
        method: 'POST',
        body: JSON.stringify(company),
        headers: {'content-type': 'application/json'}
    })
        .then(response => response.json())


export const updateCompany = (id, company) =>
    fetch(`${COMPANIES_URL}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(company),
        headers: {'content-type': 'application/json'}
    })
        .then(response => response.json())

export default {
    findAllCompanies, findCompanyById, deleteCompany, createCompany, updateCompany
}
