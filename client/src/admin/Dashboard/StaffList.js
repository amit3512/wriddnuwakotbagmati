import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router";
import { getStaff, deleteStaff } from "../../actions/adminActions";

const StaffList = () => {
  const dispatch = useDispatch();
  const staffs = useSelector((state) => state?.staffs?.staffs);
  console.log("staffs", staffs);

  const onDelete = (id) => {
    dispatch(deleteStaff(id));
  };

  useEffect(() => {
    if (!staffs) dispatch(getStaff());
  }, [dispatch, staffs]);

  if (!staffs) {
    return (
      <h4 alt="loading..." className="text-center mt-5">
        {" "}
        Loading Staff...{" "}
      </h4>
    );
  }

  return (
    <div>
      {!localStorage.getItem("userTokenTime") ? (
        <div>
          <Redirect to="/signIn" />
        </div>
      ) : (
        <div className="container">
          <h4 className="text-center">Staffs</h4>
          <div className="row">
            <div className="col-md-10">
              <table className="table table-border">
                <thead>
                  <tr>
                    <th>क्र.स</th>
                    <th>नाम</th>
                    <th>पद</th>
                    <th>फोन न.</th>
                    <th>ई-मेल</th>
                    <th></th>
                  </tr>
                </thead>

                {staffs &&
                  staffs.map((user, index) => {
                    return (
                      <tbody>
                        <tr key={index + 1}>
                          <td>{user.orderBy}</td>
                          <td>{user.name}</td>
                          <td>{user.designation}</td>
                          <td>{user.phone}</td>
                          <td>{user.email}</td>
                          <td>
                            <img
                              src={user.image}
                              className="listing-images"
                              alt="profile img"
                            />
                          </td>
                          {/* <td >{user.image.map((x,index)=><img key={index} src={x} className="profile_image" alt="profile img"/>)}</td> */}
                          <td className="EditDeleteButton">
                            <a href={`/staff/${user._id}`}>
                              <button className="btn btn-warning m-1">
                                Edit
                              </button>
                            </a>
                            <button
                              className="btn btn-danger"
                              onClick={() => onDelete(`${user._id}`)}
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    );
                  })}
              </table>
            </div>

            <div className="col-md-2">
              <div className="add-button">
                <a href="/admin/addStaff">
                  <button className="btn btn-primary">Add Staff</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StaffList;
