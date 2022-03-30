import React, { useEffect, useState } from "react";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { auth, db } from "../firebase-config";
import { getAuth } from "firebase/auth";
import Moment from "react-moment";

function Posts({ isAuth }) {
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
      <div>
        <div className="eventsContainerAll">
          <div className="event">
            <div className="events">
              <div className="homePageAll">
                <h1>All upcoming events 🌊</h1>
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
      </div>
    </>
  );
}

export default Posts;
