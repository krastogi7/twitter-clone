// Tweet.js
import React, { useState } from 'react';

/* 
Create a new componnet called 'Tweet' make sure to pass down all the props you will need.
You will also need to use 'useState' for two variables. Then you want to create an event
handler for when the user clicks 'like'. You can ue whatever h1s or h2s or HTML elements that 
you want for your tweet, just make sure all the information from the screenshot I sent is there.
Also, if the post isn't liked already, then you want to display a white heart "🤍" otherwise, 
display a red heart "❤️" make sure to increase or decrease the like counter appropriately.
Theres a 'tweet' class you can use to style your tweet.
*/

function Tweet({data}) {
    const newData = data.map(x => ({...x, liked: false}))
    let [posts, setPosts] = useState(newData)

    function handleLike(id) {
        const newPosts = posts.map(post =>
             post.id === id ? (
                {...post, 
                likes: post.liked ? post.likes - 1 : post.likes + 1,
                liked: !post.liked
                })

                : post
            )
            setPosts(newPosts)
    }


    return (
        <div className='feed'>

            {posts.map(post => 
                <div className = "tweet">
                    <h3>{"@" + post.username}</h3>
                    <h1>{"" + post.content}</h1>
                    <h4>{post.timestamp} ago</h4>
                    <button onClick = {() => handleLike(post.id)}>
                        {(post.liked ? "❤️ " : "🤍 ") + post.likes + " Likes"}
                    </button>
                </div>
            )}

        </div>         
    );
}



export default Tweet;
