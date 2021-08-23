import { BrowserRouter, Route, Switch } from "react-router-dom";
import Recipe from "./Recipe";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import jsonData from "./data.json";

export default function App() {
  const users = [
    { id: 1, name: "john" },
    { id: 2, name: "john" },
    { id: 3, name: "john" },
    { id: 4, name: "john" },
    { id: 5, name: "charles" }
  ];

  const [recipesData, setRecipesData] = useState();
  useEffect(() => {
    setRecipesData(jsonData);
  }, []);
  //
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/recipe/:id">
          <Recipe recipesData={recipesData} />
        </Route>
      </Switch>
      <div>
        {users.map((user) => {
          return (
            <div>
              {user.id}
              <Link
                to={{
                  pathname: `/recipe/${user.id}`,
                  state: { users: user }
                }}
              >
                <button>View</button>
              </Link>
            </div>
          );
        })}
      </div>
    </BrowserRouter>
  );
}
