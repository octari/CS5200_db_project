import ApplicationList from "./applications/application-list";
import ApplicationFormEditor from "./applications/application-form-editor";
const {HashRouter, Route} = window.ReactRouterDOM; 
const App = () => {
    return (
        <div className="container-fluid">
            <HashRouter>
                <Route path={["/applications", "/"]} exact={true}>
                    <ApplicationList/>
                </Route>
                <Route path="/applications/:id" exact={true}>
                    <ApplicationFormEditor/>
                </Route>
            </HashRouter>
        </div>
    );
}

export default App;
