const RECRUITER_URL = "http://localhost:8080/api/recruiters"
const EXPERIENCED_APPLICANTS_URL = "http://localhost:8080/api/experiencedApplicants"

export const findAllExperiencedApplicants = () =>
    fetch(EXPERIENCED_APPLICANTS_URL)
        .then(response => response.json())


export const findExperiencedApplicantById = (id) =>
    fetch(`${EXPERIENCED_APPLICANTS_URL}/${id}`)
        .then(response => response.json())

export const findExperiencedApplicantsForRecruiter = (recruiterId) =>
    fetch(`${RECRUITER_URL}/${recruiterId}/experiencedApplicants`)
        .then(response => response.json())

export const deleteExperiencedApplicant = (id) =>
    fetch(`${EXPERIENCED_APPLICANTS_URL}/${id}`, {
        method: "DELETE"
    })

export const createExperiencedApplicant = (applicant) =>
    fetch(EXPERIENCED_APPLICANTS_URL, {
        method: 'POST',
        body: JSON.stringify(applicant),
        headers: {'content-type': 'application/json'}
    })
        .then(response => response.json())


export const updateExperiencedApplicant = (id, applicant) =>
    fetch(`${EXPERIENCED_APPLICANTS_URL}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(applicant),
        headers: {'content-type': 'application/json'}
    })
        .then(response => response.json())

// TODO: export all functions as the API to this service
export default {
    findAllExperiencedApplicants, findExperiencedApplicantById,
    deleteExperiencedApplicant, createExperiencedApplicant,
    updateExperiencedApplicant, findExperiencedApplicantsForRecruiter
}
