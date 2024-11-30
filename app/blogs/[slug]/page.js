import './BlogPost.css'
import {posts }from "@/app/data/posts.js"


export default async function Detail({params}) {
    const { slug } = await params;
    const post = posts.find((post) => post.slug === slug);
    return (
        <div className="article-container">
            <article className="blog-post">
                <header className="post-header">
                    <time className="post-date">April 1, 2024</time>
                    <h1 className="post-title">{post.title}</h1>
                    <div className="post-meta">
                        <span className="reading-time">5 min read</span>
                        <span className="category">Design</span>
                    </div>
                </header>

                <img 
                    className="post-hero-image"
                    src="https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85"
                    alt="Minimalist Design Principles"
                />

                <div className="post-content">
                    <p className="post-intro">
                        An engaging opening paragraph that hooks the reader and introduces the topic...
                    </p>

                    <h2>First Major Section</h2>
                    <p>Your content here...</p>

                    <h2>Second Major Section</h2>
                    <p>More content here...</p>

                    <blockquote>
                        An interesting quote or key takeaway that stands out visually
                    </blockquote>

                    <h3>Sub-section</h3>
                    <p>Additional details...</p>

                    <div className="post-footer">
                        <div className="tags">
                            <span className="tag">Design</span>
                            <span className="tag">Minimalism</span>
                            <span className="tag">Web</span>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    )
}
export async function generateStaticParams() {
    return [
        { slug: 'minimalist-design-principles' },
        { slug: 'second-post' },
        { slug: 'third-post' },
    ];
}
