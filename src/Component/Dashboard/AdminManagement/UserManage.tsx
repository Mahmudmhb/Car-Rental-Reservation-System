import { toast } from "sonner";
import {
  useGetAllUserQuery,
  useUpdateUserMutation,
} from "../../../redux/features/user/userApi";
import { TUser } from "../../Types/Types";
import { Button } from "antd";

const UserManagement = () => {
  const { data, isLoading } = useGetAllUserQuery(undefined);
  const [updateUserRole] = useUpdateUserMutation();

  if (isLoading) {
    return <div className="text-center my-10">Loading...</div>;
  }

  const handleBlockUser = (userId: string) => {
    // dispatch(blockUser(userId));
    console.log("user", userId);
  };

  const handleActivateUser = (userId: string) => {
    // dispatch(activateUser(userId));
    console.log("user", userId);
  };

  const handleChangeRole = async (userId: string, role: "admin" | "user") => {
    // dispatch(changeUserRole({ userId, newRole }));
    const data = {
      role: role,
    };
    if (role) {
      const res = await updateUserRole({ userId, data }).unwrap();
      toast.success(res.message);
    } else {
      console.log("error to load data");
    }
    console.log(data);
  };

  return (
    <div className="overflow-x-auto">
      <table className="table w-full">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data?.data?.map((user: TUser) => (
            <tr key={user._id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <div
                  className={`badge ${
                    user.role === "admin" ? "badge-primary" : "badge-secondary"
                  }`}
                >
                  {user.role}
                </div>
              </td>
              <td>
                <span
                  className={`badge ${
                    user.isBlocked ? "badge-error" : "badge-success"
                  }`}
                >
                  {user.isBlocked ? "Blocked" : "Active"}
                </span>
              </td>
              <td>
                <div className="flex gap-2">
                  {user.isBlocked ? (
                    <button
                      className="btn btn-success btn-sm"
                      onClick={() => handleActivateUser(user._id)}
                    >
                      Activate
                    </button>
                  ) : (
                    <button
                      className="btn btn-error btn-sm"
                      onClick={() => handleBlockUser(user._id)}
                    >
                      Block
                    </button>
                  )}
                  <div
                    className=""
                    onClick={() =>
                      handleChangeRole(
                        user._id,
                        user.role === "admin" ? "user" : "admin"
                      )
                    }
                  >
                    {user.role === "admin" ? (
                      <Button className="badge-secondary">
                        Demote to User
                      </Button>
                    ) : (
                      <Button className="badge-primary">
                        Promote to Admin
                      </Button>
                    )}
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserManagement;
