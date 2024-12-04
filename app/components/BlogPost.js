import Image from "next/image";
export default function BlogPost({ post }) {
  return (
    <article className="post-card">
      <Image 
        src={post.image} 
        alt={post.title}
        className="post-image"
      />
      <div className="post-content">
        <time className="post-date">{post.date}</time>
        <h2 className="post-title">{post.title}</h2>
        <p className="post-excerpt">{post.excerpt}</p>
        <a href={`/blogs/${post.id}`} className="read-more">
          Read More
        </a>
      </div>
    </article>
  );
}