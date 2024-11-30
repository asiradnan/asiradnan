import "./Blogs.css"
import BlogPost from '../components/BlogPost';
import { posts } from '../data/posts';

export const metadata = {
    title: "Blogs - Asir Adnan",
};

export default function Blogs() {
    return (
        <div className="blog-container">
            <main>
                <div className="posts-grid">
                    {posts.map(post => (
                        <BlogPost key={post.id} post={post} />
                    ))}
                </div>
            </main>
        </div>
    )
}
