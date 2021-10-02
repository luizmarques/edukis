import Home from './views/Home';
import Videos from './views/Videos';
import Users from './views/Users';
import Layout from './components/portal/layout';
import { Router } from '@reach/router';


const Routers = () => {

  return (

    <Layout>

      <Router>

        <Home path="/" />
        <Videos path="/videos" />
        <Users path="/users" />

      </Router>

    </Layout>
  );
};

export default Routers;