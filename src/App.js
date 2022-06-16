import "./App.css";
import logo from "./assets/logo/spacex-logo-wine.png";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
} from "react-router-dom";

// Pages
import Main from "./Components/Main/Main.component";
import Details from "./Components/Details/Details.component";

// Appolo
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { onError } from "@apollo/client/link/error";

const errorLink = onError(({ graphqlErrors, networkError }) => {
  if (graphqlErrors) {
    graphqlErrors.map(({ message, location, path }) => {
      alert(`Graphql error ${message}`);
    });
  }
});

// Appolo Client connection
const client = new ApolloClient({
  uri: "https://api.spacex.land/graphql/",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Link to="/">
          <img src={logo} alt="SpaceX" />
        </Link>
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route exact path="/details">
            <Details />
          </Route>
        </Switch>
      </Router>
    </ApolloProvider>
  );
}

export default App;
