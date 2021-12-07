import ApplicantList from "./applicants/applicant-list";
import ApplicantFormEditor from "./applicants/applicant-form-editor";
import JobList from "./jobs/job-list";
import JobFormEditor from "./jobs/job-form-editor";
import CompanyList from "./companies/company-list";
import CompanyFormEditor from "./companies/company-form-editor";
import ApplicationList from "./applications/application-list";
import ApplicationFormEditor from "./applications/application-form-editor";
import RecruiterList from "./recruiters/recruiter-list";
import RecruiterFormEditor from "./recruiters/recruiter-form-editor";
import ExperiencedApplicantList from "./experiencedApplicants/experienced-list";
import ExperiencedApplicantFormEditor from "./experiencedApplicants/experienced-form-editor";
import NewGradApplicantList from "./newGradApplicants/newgrad-list";
import NewGradApplicantFormEditor from "./newGradApplicants/newgrad-form-editor";

const {HashRouter, Route} = window.ReactRouterDOM; 
const App = () => {
    return (
        <div className="container-fluid">
            <HashRouter>
                <Route path={["/applicants", "/"]} exact={true}>
                    <ApplicantList/>
                </Route>
                <Route path="/applicants/:id" exact={true}>
                    <ApplicantFormEditor/>
                </Route>
            </HashRouter>
            <HashRouter>
                <Route path={["/recruiters", "/"]} exact={true}>
                    <RecruiterList/>
                </Route>
                <Route path="/recruiters/:id" exact={true}>
                    <RecruiterFormEditor/>
                </Route>
            </HashRouter>
            <HashRouter>
                <Route path={["/jobs", "/"]} exact={true}>
                    <JobList/>
                </Route>
                <Route path="/jobs/:id" exact={true}>
                    <JobFormEditor/>
                </Route>
            </HashRouter>
            <HashRouter>
                <Route path={["/companies", "/"]} exact={true}>
                    <CompanyList/>
                </Route>
                <Route path="/companies/:id" exact={true}>
                    <CompanyFormEditor/>
                </Route>
            </HashRouter>
            <HashRouter>
                <Route path={["/applications", "/"]} exact={true}>
                    <ApplicationList/>
                </Route>
                <Route path="/applications/:id" exact={true}>
                    <ApplicationFormEditor/>
                </Route>
            </HashRouter>
            <HashRouter>
                <Route path={["/experiencedApplicants", "/"]} exact={true}>
                    <ExperiencedApplicantList/>
                </Route>
                <Route path="/experiencedApplicants/:id" exact={true}>
                    <ExperiencedApplicantFormEditor/>
                </Route>
            </HashRouter>
            <HashRouter>
                <Route path={["/newGradApplicants", "/"]} exact={true}>
                    <NewGradApplicantList/>
                </Route>
                <Route path="/newGradApplicants/:id" exact={true}>
                    <NewGradApplicantFormEditor/>
                </Route>
            </HashRouter>
        </div>
    );
}

export default App;
