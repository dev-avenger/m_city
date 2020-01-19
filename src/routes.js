import React from 'react';
import Layout from './Hoc/Layout';
import {Switch,Route} from 'react-router-dom';
import Home from './Components/home/index';
import SignIn from './Components/signin';
import TheTeam from './Components/theTeam';
import TheMatches from './Components/theMatches';
import NotFound from './Components/ui/not_found';

import PrivateRoute from './Components/authRoutes/privateRoutes';
import PublicRoute from './Components/authRoutes/publicRoutes';

import Dashboard from './Components/admin/Dashboard';
import AdminMatches from './Components/admin/matches/index';
import AddEditMatch from './Components/admin/matches/addEditMatch';
import AdminPlayers from './Components/admin/players/index';
import AddEditPlayers from './Components/admin/players/addEditPlayers';


const Routes = (props) => {
  console.log(props);
  return (
    <div>
      <Layout>
        <Switch>
            <PrivateRoute {...props} path="/admin_players/add_players" exact component={AddEditPlayers}/>
            <PrivateRoute {...props} path="/admin_players/add_players/:id" exact component={AddEditPlayers}/>
            <PrivateRoute {...props} path="/admin_players" exact component={AdminPlayers}/>
            <PrivateRoute {...props} path="/admin_matches/edit_match" exact component={AddEditMatch}/>
            <PrivateRoute {...props} path="/admin_matches/edit_match/:id" exact component={AddEditMatch}/>
            <PrivateRoute {...props} path="/admin_matches" exact component={AdminMatches}/>
            <PrivateRoute {...props} path="/dashboard" exact component={Dashboard}/>            
            <PublicRoute {...props} path="/sign_in" exact restricted= {true} component={SignIn}/>
            <PublicRoute {...props} path="/the_matches" exact restricted= {false} component={TheMatches}/>
            <PublicRoute {...props} path="/the_team" exact restricted= {false} component={TheTeam}/>
            <PublicRoute {...props} path="/" exact restricted= {false} component={Home}/>
            <PublicRoute {...props} exact component={NotFound}/>
        </Switch>
      </Layout>
    </div>
  )
}

export default Routes;