import React, { useState, useEffect } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../firebase-config";
import { useNavigate } from "react-router-dom";

function CreatePost({ isAuth }) {
  const [title, setTitle] = useState("");
  const [postText, setPostText] = useState("");
  const [location, setLocation] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const postsCollectionRef = collection(db, "posts");
  let navigate = useNavigate();

  const createPost = async () => {
    await addDoc(postsCollectionRef, {
      title,
      postText,
      location,
      startDate,
      endDate,
      author: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
    });
    navigate("/");
  };

  // useEffect(() => {
  //   if (!isAuth) {
  //     navigate("/login");
  //   }
  // }, []);

  return (
    <div className="createPostPage">
      <div className="cpContainer">
        <h1>Create an Event</h1>
        <div className="inputGp">
          <label> Name your event:</label>
          <input
            placeholder="Name your event"
            onChange={(event) => {
              setTitle(event.target.value);
            }}
          />
        </div>
        <div className="inputGp">
          <label> Event Description</label>
          <textarea
            placeholder="Describe your event"
            onChange={(event) => {
              setPostText(event.target.value);
            }}
          />
        </div>
        <div className="inputGp">
          <label> Start Date</label>
          <input
            type="date"
            name="Start date"
            onChange={(event) => {
              setStartDate(event.target.value);
            }}
          />
        </div>
        <div className="inputGp">
          <label> End Date</label>
          <input
            type="date"
            name="End date"
            onChange={(event) => {
              setEndDate(event.target.value);
            }}
          />
        </div>
        <div className="inputGp">
          <label> Location:</label>
          <input
            id="pac-input"
            class="controls"
            type="text"
            placeholder="Search Box"
          />
          {/* <input
            placeholder="Enter the location of event"
            onChange={(event) => {
              setLocation(event.target.value);
            }}
          /> */}
        </div>
        <button onClick={createPost}> Create Event</button>
      </div>
    </div>
  );
}

export default CreatePost;
