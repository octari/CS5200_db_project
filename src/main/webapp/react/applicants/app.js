import Applicants from "./applicants";

const {HashRouter, Route} = window.ReactRouterDOM;

const JobApp = () => {
    return (
        <div>
            <HashRouter>
                <Route path="/" exact={true}>
                    <Applicants/>
                </Route>
            </HashRouter>
        </div>
    );
}

export default JobApp;