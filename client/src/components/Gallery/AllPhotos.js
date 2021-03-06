import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPhotoByTitle } from "../../actions/adminActions";
import Fade from "react-reveal/Fade";
import { Col, Image, Row } from "antd";
import "antd/dist/antd.css";

function Event(props) {
  var galleries = useSelector((state) => state.galleries.galleries);
  const dispatch = useDispatch();

  useEffect(() => {
    const title = props.match.params.title;
    dispatch(getPhotoByTitle(title));
  }, []);

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
        {galleries.map((staff, index) => {
          {
            if (staff.title == "Nagarik-WadaPatra") {
              return (
                <div className="row">
                  <h5 className="card-title text-center">{staff.title}</h5>
                  <p className="card-text">
                    <i className="far fa-calendar" /> {staff.date}
                  </p>

                  {staff.image.map((img, index) => (
                    <div className="col-md-4">
                      <div className="card-body">
                        <img
                          key={index}
                          className="title-image"
                          src={img}
                          alt="title"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              );
            } else {
              return (
                <>
                  {/* <div className="row"> */}

                  {/* {staff.image.map((img, index) => (
                    <div className="col-md-4">
                      <div className="card-body">
                        <Fade>
                          <img
                            key={index}
                            className="title-image"
                            src={img}
                            alt="title"
                          />
                        </Fade>
                      </div>
                    </div>
                  ))} */}
                  <Row>
                    <Image.PreviewGroup>
                      {staff.image.map((img, index) => (
                        <Col span={6}>
                          {/* <Image
                            width={300}
                            className="title-image"
                            key={index}
                            src={img}
                            alt="title"
                          /> */}
                          <img
                            width={300}
                            key={index}
                            className="title-image"
                            src={img}
                            alt="title"
                          />
                        </Col>
                      ))}
                    </Image.PreviewGroup>
                  </Row>

                  {/* </div> */}
                </>
              );
            }
          }
        })}
      </div>
    </div>
  );
}

export default Event;
