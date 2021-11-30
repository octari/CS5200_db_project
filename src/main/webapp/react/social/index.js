import UserList from "./applicants/applicant-list";
import UserFormEditor from "./applicants/applicant-form-editor";
const {HashRouter, Route} = window.ReactRouterDOM; 
const App = () => {
    return (
        <div className="container-fluid">
            <HashRouter>
                <Route path={["/applicants", "/"]} exact={true}>
                    <UserList/>
                </Route>
                <Route path="/applicants/:id" exact={true}>
                    <UserFormEditor/>
                </Route>
            </HashRouter>
        </div>
    );
}

export default App;
