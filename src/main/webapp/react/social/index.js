import RecruiterList from "./recruiters/recruiter-list";
import RecruiterFormEditor from "./recruiters/recruiter-form-editor";
const {HashRouter, Route} = window.ReactRouterDOM; 
const App = () => {
    return (
        <div className="container-fluid">
            <HashRouter>
                <Route path={["/recruiters", "/"]} exact={true}>
                    <RecruiterList/>
                </Route>
                <Route path="/recruiters/:id" exact={true}>
                    <RecruiterFormEditor/>
                </Route>
            </HashRouter>
        </div>
    );
}

export default App;
