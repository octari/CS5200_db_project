// import ApplicantList from "./applicants/applicant-list";
// import ApplicantFormEditor from "./applicants/applicant-form-editor";
import JobList from "./jobs/job-list";
import JobFormEditor from "./jobs/job-form-editor";
const {HashRouter, Route} = window.ReactRouterDOM; 
const App = () => {
    return (
        <div className="container-fluid">
            {/*<HashRouter>*/}
            {/*    <Route path={["/applicants", "/"]} exact={true}>*/}
            {/*        <ApplicantList/>*/}
            {/*    </Route>*/}
            {/*    <Route path="/applicants/:id" exact={true}>*/}
            {/*        <ApplicantFormEditor/>*/}
            {/*    </Route>*/}
            {/*</HashRouter>*/}
            <HashRouter>
                <Route path={["/jobs", "/"]} exact={true}>
                    <JobList/>
                </Route>
                <Route path="/jobs/:id" exact={true}>
                    <JobFormEditor/>
                </Route>
            </HashRouter>
        </div>

    );
}

export default App;
