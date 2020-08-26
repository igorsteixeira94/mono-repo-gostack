import React from "react";


import "./styles.css";

function PostItem({ data }) {
  const { comments } = data;
  return (
    <>
      <article>
        <section id="post">
          <div id="profile-post">
            <img src={data.author.avatar} alt="Foto de perfil" />
            <div id="profile-post-name">
              <span>{data.author.name}</span>
              <time>{data.date}</time>
            </div>
          </div>
          <p>{data.content}</p>
          <hr />
        </section>
        {comments.map((comment) => (
          <section key={comment.id} id="comment">
            <img src={comment.author.avatar} alt="Foto de perfil" />
            <div>
              <p>
                <strong>{comment.author.name}</strong>{" "}
                {comment.content}
              </p>
            </div>
          </section>
        ))}
      </article>
    </>
  );
}

export default PostItem;
