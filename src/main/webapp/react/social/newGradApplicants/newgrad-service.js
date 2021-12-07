
const NEW_GRAD_APPLICANTS_URL = "http://localhost:8080/api/newGradApplicants"

export const findAllNewGradApplicants = () =>
    fetch(NEW_GRAD_APPLICANTS_URL)
        .then(response => response.json())


export const findNewGradApplicantById = (id) =>
    fetch(`${NEW_GRAD_APPLICANTS_URL}/${id}`)
        .then(response => response.json())



export const deleteNewGradApplicant = (id) =>
    fetch(`${NEW_GRAD_APPLICANTS_URL}/${id}`, {
        method: "DELETE"
    })

export const createNewGradApplicant = (applicant) =>
    fetch(NEW_GRAD_APPLICANTS_URL, {
        method: 'POST',
        body: JSON.stringify(applicant),
        headers: {'content-type': 'application/json'}
    })
        .then(response => response.json())


export const updateNewGradApplicant = (id, applicant) =>
    fetch(`${NEW_GRAD_APPLICANTS_URL}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(applicant),
        headers: {'content-type': 'application/json'}
    })
        .then(response => response.json())

// TODO: export all functions as the API to this service
export default {
    findAllNewGradApplicants, findNewGradApplicantById, deleteNewGradApplicant, createNewGradApplicant, updateNewGradApplicant
}
