
import User from "../components/User";
import { useUserContext } from "../context/UserContextProvider";

const ShowUsers = () => {
  const { users } = useUserContext;
  return (
    <div>
      <h2>User List</h2>
        {users.map((user) => (
          <User key={user.id} user={user} />
        ))}
    </div>
  );
};

export default ShowUsers;
