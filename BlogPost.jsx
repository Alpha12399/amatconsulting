import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowLeft } from 'lucide-react';
import { blogPosts } from '../data/blogData';
import './BlogPost.css';

const BlogPost = () => {
    const { slug } = useParams();
    const post = blogPosts.find(p => p.slug === slug);

    if (!post) {
        return <Navigate to="/blog" replace />;
    }

    // Enhanced formatter for markdown-style content
    const formatContent = (content) => {
        return content.split('\n').filter(line => line.trim() !== '').map((line, index) => {
            // Check for headings
            if (line.startsWith('## ')) {
                return <h2 key={index} className="post-heading-2">{line.replace('## ', '')}</h2>;
            }

            // Check for bullet points
            if (line.startsWith('- ')) {
                return <li key={index} className="post-list-item">{line.replace('- ', '')}</li>;
            }

            // Check for numbered lists
            if (/^\d+\.\s/.test(line)) {
                return <li key={index} className="post-list-item-numbered">{line.replace(/^\d+\.\s/, '')}</li>;
            }

            // Bold text within paragraphs
            const formattedLine = line.split(/(\*\*.*?\*\*)/g).map((part, i) => {
                if (part.startsWith('**') && part.endsWith('**')) {
                    return <strong key={i}>{part.replace(/\*\*/g, '')}</strong>;
                }
                return part;
            });

            return <p key={index} className="post-paragraph">{formattedLine}</p>;
        });
    };

    const relatedPosts = blogPosts
        .filter(p => p.category === post.category && p.id !== post.id)
        .slice(0, 3);

    return (
        <div className="blog-post-page">
            <section className="post-header">
                <div className="container">
                    <Link to="/blog" className="back-link">
                        <ArrowLeft size={20} />
                        Retour au blog
                    </Link>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="post-header-content"
                    >
                        <span className="post-category">{post.category}</span>
                        <h1>{post.title}</h1>

                        <div className="post-meta">
                            <span className="meta-item">
                                <Calendar size={18} />
                                {new Date(post.date).toLocaleDateString('fr-FR', {
                                    day: 'numeric',
                                    month: 'long',
                                    year: 'numeric'
                                })}
                            </span>
                            <span className="meta-item">
                                <Clock size={18} />
                                {post.readTime}
                            </span>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="post-layout">
                        <motion.article
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="post-content"
                        >
                            {formatContent(post.content)}
                        </motion.article>

                        <aside className="post-sidebar">
                            <div className="sidebar-card">
                                <h3>Besoin d'aide ?</h3>
                                <p>Nos experts sont à votre disposition pour vous accompagner.</p>
                                <Link to="/contact" className="btn btn-primary">
                                    Contactez-nous
                                </Link>
                            </div>
                        </aside>
                    </div>

                    {relatedPosts.length > 0 && (
                        <div className="related-posts">
                            <h2>Articles Similaires</h2>
                            <div className="related-grid">
                                {relatedPosts.map(relatedPost => (
                                    <Link
                                        key={relatedPost.id}
                                        to={`/blog/${relatedPost.slug}`}
                                        className="related-card"
                                    >
                                        <span className="related-category">{relatedPost.category}</span>
                                        <h4>{relatedPost.title}</h4>
                                        <p>{relatedPost.excerpt}</p>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
};

export default BlogPost;
