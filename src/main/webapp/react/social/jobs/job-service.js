// TODO: declare URL where server listens for HTTP requests
const JOBS_URL = "http://localhost:8080/api/jobs"

export const findAllJobs = () =>
    fetch(JOBS_URL)
        .then(response => response.json())


export const findJobById = (id) =>
    fetch(`${JOBS_URL}/${id}`)
        .then(response => response.json())



export const deleteJob = (id) =>
    fetch(`${JOBS_URL}/${id}`, {
        method: "DELETE"
    })

export const createJob = (job) =>
    fetch(JOBS_URL, {
        method: 'POST',
        body: JSON.stringify(job),
        headers: {'content-type': 'application/json'}
    })
        .then(response => response.json())


export const updateJob = (id, job) =>
    fetch(`${JOBS_URL}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(job),
        headers: {'content-type': 'application/json'}
    })
        .then(response => response.json())

// TODO: export all functions as the API to this service
export default {
    findAllJobs, findJobById, deleteJob, createJob, updateJob
}
