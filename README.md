# CS5200_final_project



# 1. Name of the project 

	Jobs

# 2. Name of the team(s). At most two teams per project. One from each section, if applicable

Yuchen Ji, Lisa Lam, Lora Ong

# 3. Brief description of the project

Our project involves showing the relationships between different databases in relation to the theme of job hunting. The two user models are applicants and recruiters and the object data models are applications, jobs, and companies. The project intends to show the relationships between the two user models and the object data models during the process of job hunting.
	
# 4. Link to the latest data model as a single UML class diagram. The UML class diagram should be a single PDF document called db_design_final_project_UML.pdf and linked from the README

UML Diagram PDF Link:
[db_design_final_project_UML.pdf](https://github.com/loraong/CS5200_final_project/files/7575485/db_design_final_project_UML.pdf)

# 5. Description of user data model

The user data model includes Applicants and Recruiters. Applicants intend to apply to many jobs from many companies, each being handled by a recruiter.

Applicants' databases include the first name(string), last name(string), email(string), and experience(string).There are two different types of applicants, New Grads and Experienced.

Recruiters' databases include first name(string), last name(string), email(string), and phone(int).

# 6. Description of the two domain object data models

The three domain object data models are Applications, Jobs, and Companies. 
Applications database includes an application name(string), applyToPosition(string), and applyDate(date).

Jobs database includes  a title(string), companyNm(string,  and level (Level Enum).

Companies database includes an id(int), name(string), jobTitle(string), and recruiter(fk) that connects to a certain recruiter.

# 7. Description of the user to domain object relationship

An applicant has many applications. A recruiter has one company.


# 8. Description of the domain object to domain object relationship

Jobs can have many applications from many applicants and each company can have many jobs.

# 9. Description of the portable enumeration(s)

The enumeration of this database design is the levels of qualifications of the jobs being offered based on experience. There are many levels an applicant can apply for. They can apply for Junior, Intermediate, Senior, or Manager jobs.

# 10. Description of the user interface requirements

The user interface for Applicants would include:
Application List: displays a list of all the applications the applicants created for different jobs
Application Editor: displays an application for editing (update and delete) or creating a new application. This also has a navigation to the job description and company description.
The user interface for Recruiter would include:
JobList: displays a list of all the jobs in the company the recruiter is handling
JobList Editor: displays each job for editing (update and delete) or create new job listing.