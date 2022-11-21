import { Switch, Route, Redirect } from "react-router-dom";
import "antd/dist/antd.css";
import "./assets/styles/main.css";
import "./assets/styles/responsive.css";
import Home from "./pages/Home";
import Companies from "./pages/Companies";
import Profile from "./pages/Profile";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Main from "./components/layout/Main";
import Users from "./pages/Users";
import Campaigns from "./pages/Campaigns";
import Mails from "./pages/Mails";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Contacts from "./pages/Contacts";

const queryClient = new QueryClient();

function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <Switch>
          <Route path="/sign-up" exact component={SignUp} />
          <Route path="/sign-in" exact component={SignIn} />
          <Main>
            <Route exact path="/dashboard" component={Home} />
            <Route exact path="/companies" component={Companies} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/users" component={Users} />
            <Route exact path="/campaigns" component={Campaigns} />
            <Route exact path="/mails" component={Mails} />
            <Route exact path="/contacts" component={Contacts} />

            <Redirect from="*" to="/dashboard" />
          </Main>
        </Switch>
      </QueryClientProvider>
    </div>
  );
}

export default App;
