import axios from "axios";
import { useEffect, useState } from "react";
import { FiEdit } from "react-icons/fi";
import { MdDeleteForever } from "react-icons/md";
import Swal from "sweetalert2";

function AddMovie() {
  const [users, setUsers] = useState([]);
  const [editUserId, setEditUserId] = useState(null); // Track which user is being edited
  const [editedUser, setEditedUser] = useState({ name: "", email: "" }); // Hold the edited user data
  const [loading, setLoading] = useState(true); // Flag to show loading spinner

  // Fetch users on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://localhost:5173/");
        setLoading(false); // Set loading flag to false after data is fetched
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    fetchData();
  }, []);

  // Delete user
  const deleteUser = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await axios.delete(
            `https://localhost:5173/user/${id}`
          );
          if (response.data.acknowledged === true) {
            setUsers(users.filter((user) => user._id !== id));
            Swal.fire({
              title: "Deleted!",
              text: "Your Account has been deleted.",
              icon: "success",
            });
          }
        } catch (error) {
          console.error("Error deleting user:", error);
          Swal.fire({
            title: "Error!",
            text: "Something went wrong while deleting the user.",
            icon: "error",
          });
        }
      } else {
        // User clicked Cancel, optionally you can show a message
        console.log("User canceled the delete operation.");
      }
    });
  };

  // Enter edit mode
  const handleEditClick = (user) => {
    setEditUserId(user._id);
    setEditedUser({ name: user.name, email: user.email }); // Populate fields with current data
  };

  // Save edited user
  const saveUser = async (id) => {
    Swal.fire({
      title: "Do you want to save the changes?",
      showCancelButton: true,
      confirmButtonText: "Save",
    }).then(async (result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        try {
          const response = await axios.patch(
            `https://localhost:5173/user/${id}`,
            editedUser
          );
          if (response.data.acknowledged === true) {
            setUsers(
              users.map((user) =>
                user._id === id ? { ...user, ...editedUser } : user
              )
            );
            setEditUserId(null); // Exit edit mode
            Swal.fire("Saved!", "", "success");
          }
        } catch (error) {
          console.error("Error updating user:", error);
        }
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  };

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedUser((prev) => ({ ...prev, [name]: value }));
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center mt-10 text-xl">
        {" "}
        Loading...{" "}
        <span className="   loading loading-bars text-violet-500 loading-lg"></span>
      </div>
    ); // Show loading spinner while data is being fetched
  }

  return (
    <div className="overflow-x-auto container mx-auto">
      <table className="table table-zebra">
        {/* Table Head */}
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user._id}>
              <th>{index + 1}</th>
              <td>
                {editUserId === user._id ? (
                  <input
                    type="text"
                    name="name"
                    value={editedUser.name}
                    onChange={handleInputChange}
                    className="input input-bordered"
                  />
                ) : (
                  user.name
                )}
              </td>
              <td>
                {editUserId === user._id ? (
                  <input
                    type="email"
                    name="email"
                    value={editedUser.email}
                    onChange={handleInputChange}
                    className="input input-bordered"
                  />
                ) : (
                  user.email
                )}
              </td>
              <td>
                <div className="flex justify-start items-center gap-4">
                  {editUserId === user._id ? (
                    <>
                      <button
                        onClick={() => saveUser(user._id)}
                        className="btn btn-success btn-sm"
                      >
                        Save
                      </button>
                      <button
                        onClick={() => setEditUserId(null)}
                        className="btn btn-warning btn-sm"
                      >
                        Cancel
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        onClick={() => handleEditClick(user)}
                        className="btn btn-info btn-sm"
                      >
                        <FiEdit />
                      </button>
                      <button
                        onClick={() => deleteUser(user._id)}
                        className="btn btn-error btn-sm"
                      >
                        <MdDeleteForever />
                      </button>
                    </>
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AddMovie;
