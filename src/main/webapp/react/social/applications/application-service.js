// TODO: declare URL where server listens for HTTP requests
const APPLICATIONS_URL = "http://localhost:8080/api/applications"
const APPLICANTS_URL = "http://localhost:8080/api/applicants"
const EXPERIENCED_APPLICANTS_URL = "http://localhost:8080/api/experiencedApplicants"
const NEWGRAD_APPLICANTS_URL = "http://localhost:8080/api/newGradApplicants"

// TODO: retrieve all users from the server
export const findAllApplications = () =>
    fetch(APPLICATIONS_URL)
        .then(response => response.json())


export const findApplicationById = (id) =>
    fetch(`${APPLICATIONS_URL}/${id}`)
        .then(response => response.json())

export const findApplicationsForApplicant = (id) =>
    fetch(`${EXPERIENCED_APPLICANTS_URL}/${id}/applications`)
        .then(response => response.json())

export const findApplicationsForExperiencedApplicant = (id) =>
    fetch(`${APPLICANTS_URL}/${id}/applications`)
        .then(response => response.json())

export const findApplicationsForNewGradApplicant = (id) =>
    fetch(`${NEWGRAD_APPLICANTS_URL}/${id}/applications`)
        .then(response => response.json())

export const deleteApplication = (id) =>
    fetch(`${APPLICATIONS_URL}/${id}`, {
        method: "DELETE"
    })

export const createApplication = (application) =>
    fetch(APPLICATIONS_URL, {
        method: 'POST',
        body: JSON.stringify(application),
        headers: {'content-type': 'application/json'}
    })
        .then(response => response.json())


// TODO: update a user by their ID
export const updateApplication = (id, application) =>
    fetch(`${APPLICATIONS_URL}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(application),
        headers: {'content-type': 'application/json'}
    })
        .then(response => response.json())

// TODO: export all functions as the API to this service
export default {
    findAllApplications, findApplicationById, deleteApplication,
    createApplication, updateApplication, findApplicationsForApplicant,
    findApplicationsForNewGradApplicant, findApplicationsForExperiencedApplicant
}
