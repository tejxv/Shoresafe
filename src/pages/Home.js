import React, { useEffect, useState } from "react";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { auth, db } from "../firebase-config";
import { getAuth } from "firebase/auth";
import Moment from "react-moment";

function Home({ isAuth }) {
  const [postLists, setPostList] = useState([]);
  const postsCollectionRef = collection(db, "posts");

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postsCollectionRef);
      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getPosts();
  }, []);

  const deletePost = async (id) => {
    const postDoc = doc(db, "posts", id);
    await deleteDoc(postDoc);
  };
  return (
    <>
      <div className="aboveHome">
        <div className="home">
          <div className="text">
            {" "}
            <h1>WHAT WE DO </h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </p>
            <a href="/createpost" className="btn">
              Host your event ->
            </a>
            <a href="#homePage" className="mutedbtn">
              Looking for an event? Click here.
            </a>
          </div>
          <div className="img"> </div>
        </div>
        <div className="eventsContainer">
          <div className="event">
            <div className="events">
              <div className="homePage" id="homePage">
                <h1>Upcoming events 🌊</h1>
                {postLists.map((post) => {
                  return (
                    <div className="post">
                      <div className="postHeader">
                        <div className="title">
                          <h2> {post.title}</h2>
                        </div>
                        <div className="deletePost">
                          {console.log("hi")}
                          {console.log("hi22")}
                          {isAuth && post.author.id === auth.currentUser.uid && (
                            <button
                              onClick={() => {
                                deletePost(post.id);
                              }}
                            >
                              {" "}
                              &#128465;
                            </button>
                          )}
                        </div>
                      </div>
                      <div className="postTextContainer"> {post.postText} </div>
                      <h4>
                        📅 <Moment format="DD MMMM YY">{post.startDate}</Moment>
                      </h4>
                      <h3> 📍 {post.location}</h3>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="seeMore">
          <a href="/posts" className="seeMoreBtn">
            View all events ->
          </a>
        </div>
        <div className="about" id="about">
          <h1>About us </h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </p>
        </div>
      </div>
    </>
  );
}

export default Home;
