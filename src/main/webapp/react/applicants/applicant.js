const { useState, useEffect } = React;

const Applicant = ({applicant, deleteApplicant, updateApplicant}) => {
    const [applicantCopy, setApplicantCopy] = useState(applicant)
    const [editing, setEditing] = useState(false)
    return(
        <div>
            {
                editing &&
                    <div>
                        <input value={applicantCopy.firstName} onChange={(e)=>setApplicantCopy(applicantCopy => ({...applicantCopy, firstName: e.target.value}))}/>
                        <input value={applicantCopy.lastName} onChange={(e)=>setApplicantCopy(applicantCopy => ({...applicantCopy, lastName: e.target.value}))}/>
                        <input value={applicantCopy.email} onChange={(e)=>setApplicantCopy(applicantCopy => ({...applicantCopy, email: e.target.value}))}/>
                        <input value={applicantCopy.recruiterId} onChange={(e)=>setApplicantCopy(applicantCopy => ({...applicantCopy, recruiterId: e.target.value}))}/>
                        <button onClick={() => deleteApplicant(applicant._id)}>Delete</button>
                        <button onClick={() => {
                            setEditing(false)
                            updateApplicant(applicantCopy._id, applicantCopy)
                        }}>Save</button>
                    </div>
            }
            {
                !editing &&
                    <div>
                        {applicantCopy.firstName}
                        {applicantCopy.lastName}
                        {applicantCopy.email}
                        {applicantCopy.recruiterId}

                        <button onClick={() => setEditing(true)}>Edit</button>
                    </div>
            }
        </div>
    )
}

export default Applicant;