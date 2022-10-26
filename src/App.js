import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import { Context } from "./context/tableContext";
import UserPosts from "./pages/UserPosts";
import Users from "./pages/Users";
import "./App.css";

function App() {
  const [postDetails, setPostDetails] = useState([]);
  const [usersInfo, setUsersInfo] = useState([]);
  const [userId, setUserId] = useState([]);

  useEffect(() => {
    (async function () {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();

      setUsersInfo(data);
    })();
  }, []);

  useEffect(() => {
    (async function () {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();

      setPostDetails(data);
    })();
  }, []);

  return (
    <Context.Provider
      value={{
        showUserPost: function (userId) {
          setUserId(userId);
        },
      }}
    >
      <div>
        <Header />
        <div id="caption">Click on Free Speech User to see their posts.</div>
        <Routes>
          <Route path="/" element={<Users users={usersInfo} />} />
          <Route
            path="/userposts"
            element={<UserPosts userId={userId} post={postDetails} />}
          />
        </Routes>
      </div>
    </Context.Provider>
  );
}

export default App;
