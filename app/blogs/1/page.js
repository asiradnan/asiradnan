import './BlogPost.css'
import { posts } from "@/app/data/posts.js"
import Image from 'next/image';
import image from "@/public/blogImages/localhost.jpg"

export default async function Detail() {
    const post = posts[1];
    return (
        <div className="article-container">
            <article className="blog-post">
                <header className="post-header">
                    <time className="post-date">{post.date}</time>
                    <h1 className="post-title">{post.title}</h1>
                    <div className="post-meta">
                        <span className="reading-time">5 min read</span>
                        <span className="category">Web Development</span>
                    </div>
                </header>

                <Image
                    className="post-hero-image"
                    src={image}
                    alt="localhost vs 127.0.0.1"
                />

                <div className="post-content">
                    <p className="post-intro">
                        In local development, we often use localhost to access our local development environment. However, did you know that localhost and 127.0.0.1 are not the same? In this article, we'll explore the differences between these two.
                    </p>

                    <h2>127.0.0.1 vs localhost</h2>
                    <p>We have human friendly domain names accross the web to point different IP addresses, for example "google.com" points to many IP addresses and one of them is 142.250.193.174. You can write this directly in your browser to access google (try this now). <br></br>
                    127.0.0.1 is the IP address to identify our local machine. 'localhost' is used same way as domain to give 127.0.0.1 a human readable name. And just as usual domains are changeable, you can change this one too! As it's your local machine, only "you" can change it and only "you" will see the reflection.</p>

                    <h2>Change your local hostname for experiment</h2>
                    <p>
                        To change the hostname from localhost to anything else, you need to customize the host file on your PC.
                        You can find the host file at the following file path:</p>
                        <ul className="host-file-locations">
                            <li>
                                <dfn>Windows:</dfn> <code>C:\Windows\System32\drivers\etc\hosts</code>
                            </li>
                            <li>
                                <dfn>Mac:</dfn> <code>/etc/hosts</code>
                            </li>
                            <li>
                                <dfn>Linux:</dfn> <code>/etc/hosts</code>
                            </li>
                        </ul>
                        <p>
                        Then, change localhost to your desired hostname. For example, if you want to change it to myname,
                        you would add the following line to your host file: </p>
                        <pre><code>127.0.0.1    myname</code></pre>
                        <p>
                        After saving the changes, you can access your local development environment using the new hostname instead of localhost.
                        To test this, run any application on your local machine and access it using the new hostname from your browser.
                        For example, if you have a web application running on port 3000, you can access it by navigating to <code>http://myname:3000</code> in your browser.
                    </p>

                    <blockquote>
                        So, localhost is just a human friendly domain name for 127.0.0.1 which is changeable.
                    </blockquote>

                    <div className="post-footer">
                        <div className="tags">
                            <span className="tag">localhost</span>
                            <span className="tag">127.0.0.1</span>
                            <span className="tag">Web Development</span>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    )
}
