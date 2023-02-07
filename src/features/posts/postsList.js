
import { useSelector } from "react-redux";
import { selectALLPosts } from "./postSlice";

const PostsList = () => {

    const posts =  useSelector(selectALLPosts);
    //const posts =  useSelector(state => state.posts)

    const renderPosts = posts.map(post=>(

        <article key={post.id}>

<h3>{post.title}</h3>
<p>{post.content.substring(0,100)  }</p>

<h1>{post.id}</h1>
        </article>

      


    ))

    console.log("posts" + posts);

    // substring is func will show only 100 char from long post

    return(
        <section>
            <h2>psots</h2>
            {renderPosts}
        </section>
    )



}

export default PostsList


















