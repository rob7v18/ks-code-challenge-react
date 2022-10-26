import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../context/tableContext";

function Users({ users }) {
  const { showUserPost } = useContext(Context);

  return (
    <div className="container-table">
      <table className="table">
        <thead>
          <tr>
            <th className="table-header">
              <h3>Users</h3>
            </th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => {
            const userId = user.id;
            return (
              <tr key={userId}>
                <td
                  key={userId}
                  onClick={() => {
                    showUserPost({ userId });
                  }}
                >
                  <Link to="/userposts" style={{ textDecoration: "none" }}>
                    {user.name}
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Users;
