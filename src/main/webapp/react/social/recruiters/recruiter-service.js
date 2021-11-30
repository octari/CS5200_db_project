// TODO: declare URL where server listens for HTTP requests
const RECRUITERS_URL = "http://localhost:8080/api/recruiters"

// TODO: retrieve all users from the server
export const findAllRecruiters = () =>
    fetch(RECRUITERS_URL)
        .then(response => response.json())


export const findRecruiterById = (id) =>
    fetch(`${RECRUITERS_URL}/${id}`)
        .then(response => response.json())



export const deleteRecruiter = (id) =>
    fetch(`${RECRUITERS_URL}/${id}`, {
        method: "DELETE"
    })

export const createRecruiter = (recruiter) =>
    fetch(RECRUITERS_URL, {
        method: 'POST',
        body: JSON.stringify(recruiter),
        headers: {'content-type': 'application/json'}
    })
        .then(response => response.json())


// TODO: update a user by their ID
export const updateRecruiter = (id, recruiter) =>
    fetch(`${RECRUITERS_URL}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(recruiter),
        headers: {'content-type': 'application/json'}
    })
        .then(response => response.json())

// TODO: export all functions as the API to this service
export default {
    findAllRecruiters, findRecruiterById, deleteRecruiter, createRecruiter, updateRecruiter
}
