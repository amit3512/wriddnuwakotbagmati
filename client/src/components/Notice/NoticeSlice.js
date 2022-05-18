import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getNotice } from "../../actions/adminActions";
function NoticeSlice() {
  const notices = useSelector((state) => state.notices.notices);
  // console.log(notices.slice(0,2));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNotice());
  }, []);

  if (notices === undefined) {
    return (
      <h4 alt="loading..." className="text-center mt-5">
        {" "}
        Loading Notices...{" "}
      </h4>
    );
  }
  return (
    <div className="container Notice">
      <div className="notice-items">
        <div className="notice-icon bg-light">
          <h5 className="text-center">
            सुचना <i className="fas fa-volume-up" />
          </h5>
        </div>
        <div>
          <marquee>
            अरु सूचनाहरुको लागि थप जानकारीमा जानुहोला | धन्यवाद !
          </marquee>
        </div>
        <div className="notice-text bg-white">
          <table className="table">
            <thead>
              <tr>
                <th>मिति</th>
                <th>शिर्षक</th>
                <th></th>
              </tr>
            </thead>

            <tbody>
              {notices.slice(0, 2).map((notice, index) => {
                return (
                  <tr key={index + 1}>
                    <td>{notice.date}</td>
                    <td>
                      <Link to={`/notice/${notice._id}`}>{notice.name}</Link>
                    </td>
                    {/* <td dangerouslySetInnerHTML={{__html:notice.description}}></td> */}
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div className="button text-center">
            <Link to="/notice">
              <button className="btn btn-primary">थप जानकारी</button>{" "}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NoticeSlice;
