

import ApplicantList from "./applicants/applicant-list";
import ApplicantFormEditor from "./applicants/applicant-form-editor";

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
        </div>
    );
}

export default App;
