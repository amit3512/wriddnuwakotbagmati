import CreateGallery from "./CreateGallery";
import { useDispatch } from "react-redux";
import React, { useState } from "react";
import { addPhoto } from "../../actions/adminActions";
import { Redirect } from "react-router-dom";

function Gallery(props) {
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [redirect, setRedirect] = useState(false);

  const dispatch = useDispatch();

  const handleDate = (e) => {
    setDate(e.target.value);
  };

  const handleCategory = (e) => {
    setCategory(e.target.value);
  };

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleImage = (e) => {
    setImage(e.target.files);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("date", date);
    formData.append("category", category);
    formData.append("title", title);
    for (let i = 0; i < image.length; i++) {
      formData.append("image", image[i]);
    }
    // formData.append("image",image);
    dispatch(addPhoto(formData));
    setRedirect(true);
  };

  return (
    <div>
      {redirect ? (
        <div>
          <Redirect to="/admin/gallery-list" />
        </div>
      ) : (
        <div className="container">
          {!props.match.params.id ? (
            <CreateGallery
              handleDate={handleDate}
              handleCategory={handleCategory}
              handleTitle={handleTitle}
              handleImage={handleImage}
              date={date}
              category={category}
              title={title}
              image={image}
              handleSubmit={handleSubmit}
            />
          ) : (
            ""
            //   <UpdateStaff
            //   handleName={handleName}
            //   handleDesignation={handleDesignation}
            //   handlePhone={handlePhone}
            //   handleEmail={handleEmail}
            //   handleOrderBy={handleOrderBy}
            //   handleImage={handleImage}

            //   name={name}
            //   designation={designation}
            //   phone={phone}
            //   email={email}
            //   orderBy={orderBy}
            //   // image={image}
            //   handleSubmit={handleUpdate}
            //   />
          )}
        </div>
      )}
    </div>
  );
}

export default Gallery;
