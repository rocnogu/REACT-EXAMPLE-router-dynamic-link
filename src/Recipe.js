import React from "react";
import { useLocation, Link } from "react-router-dom";

export default function Recipe({ recipesData }) {
  const { state } = useLocation();

  return (
    <div>
      <div>
        <div>
          <p>{recipesData[0].id}</p>
          <p>Id:</p> {state.users.id}
        </div>
      </div>
      <Link to="/"></Link>
    </div>
  );
}
