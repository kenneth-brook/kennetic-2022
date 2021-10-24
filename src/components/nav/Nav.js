import React from "react";
import { Route, NavLink, Switch } from "react-router-dom";

import Home from "../home/Home";
import Board from "../board/Board";
import Laws from "../laws/Laws";
import Projects from "../projects/Projects";
import About from "../about/About";

function Nav() {
    return (
        <div className="navWrap">
            <div className="navLinks">
            <nav>
                <ul>
                    <li>
                        <NavLink className="link" exact to="/" activeClassName="active">
                        Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className="link" to="/Board" activeClassName="active">
                        The Board
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className="link" to="/Laws" activeClassName="active">
                        By-Laws
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className="link" to="/Projects" activeClassName="active">
                        Projects
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className="link" to="/About" activeClassName="active">
                        About
                        </NavLink>
                    </li>
                </ul>
            </nav>
            </div>
      <div className="bodyWrap">
          <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Board" component={Board} />
        <Route path="/Laws" component={Laws} />
        <Route path="/Projects" component={Projects} />
        <Route path="/About" component={About} />
        </Switch>
      </div> 
    </div>
    );
}

export default Nav;