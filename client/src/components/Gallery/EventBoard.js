import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPhoto } from "../../actions/adminActions";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";

function Event(props) {
  var galleries = useSelector((state) => state.galleries.galleries);
  const dispatch = useDispatch();

  useEffect(() => {
    const category = props.match.params.category;
    dispatch(getPhoto(category));
  }, []);

  const handleOpen = (staff) => {
    window.location.href = `/individual/${staff.title}`;
  };

  if (galleries === undefined) {
    return (
      <h4 alt="loading..." className="text-center mt-5">
        {" "}
        Loading Galleries...{" "}
      </h4>
    );
  }
  return (
    <div className="Staff container">
      <div>
        <h4 className="text-center bg-light">फोटोहरु</h4>
      </div>
      <div>
        <Fade>
          <div className="row">
            {galleries.map((staff, index) => {
              return (
                <div className="col-md-4" key={index}>
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">{staff.title}</h5>
                      <Link
                        to={`/individual/${staff.title}`}
                        onClick={() => handleOpen(staff)}
                      >
                        <div className="staff-image">
                          {staff.image.slice(0, 1).map((img, index) => (
                            <img
                              key={index}
                              className="card-img-top img-thumbnail"
                              src={img}
                              alt="staff"
                            />
                          ))}
                        </div>
                      </Link>
                      <p className="card-text">
                        <i className="far fa-calendar" /> {staff.date}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Fade>
      </div>
    </div>
  );
}

export default Event;
