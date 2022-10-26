import { useNavigate } from "react-router-dom";

function UserPosts({ userId, post }) {
  const navigate = useNavigate();
  const userPosts = post.filter((post) => {
    if (post.userId === userId.userId) {
      return post;
    }
  });

  return (
    <div className="container-table">
      <table className="table">
        <thead>
          <tr>
            <th className="table-header">
              <h3>Posts by Selected User</h3>
            </th>
          </tr>
        </thead>
        <tbody>
          {userPosts.map((post) => {
            return (
              <tr key={post.id}>
                <td>{post.title}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <button className="button" onClick={() => navigate(-1)}>
        Go Back
      </button>
    </div>
  );
}

export default UserPosts;
