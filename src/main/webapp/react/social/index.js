import CompanyList from "./companies/company-list";
import CompanyFormEditor from "./companies/company-form-editor";


const {HashRouter, Route} = window.ReactRouterDOM; 
const App = () => {
    return (
        <div className="container-fluid">
            <HashRouter>
                <Route path={["/companies", "/"]} exact={true}>
                    <CompanyList/>
                </Route>
                <Route path="/companies/:id" exact={true}>
                    <CompanyFormEditor/>
                </Route>
            </HashRouter>
        </div>
    );
}

export default App;
