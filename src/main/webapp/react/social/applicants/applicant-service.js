// TODO: declare URL where server listens for HTTP requests
const APPLICANTS_URL = "http://localhost:8080/api/applicants"

export const findAllApplicants = () =>
    fetch(APPLICANTS_URL)
        .then(response => response.json())


export const findApplicantById = (id) =>
    fetch(`${APPLICANTS_URL}/${id}`)
        .then(response => response.json())



export const deleteApplicant = (id) =>
    fetch(`${APPLICANTS_URL}/${id}`, {
        method: "DELETE"
    })

export const createApplicant = (applicant) =>
    fetch(APPLICANTS_URL, {
        method: 'POST',
        body: JSON.stringify(applicant),
        headers: {'content-type': 'application/json'}
    })
        .then(response => response.json())


export const updateApplicant = (id, applicant) =>
    fetch(`${APPLICANTS_URL}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(applicant),
        headers: {'content-type': 'application/json'}
    })
        .then(response => response.json())

// TODO: export all functions as the API to this service
export default {
    findAllApplicants, findApplicantById, deleteApplicant, createApplicant, updateApplicant
}
