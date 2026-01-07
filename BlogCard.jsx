import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, Clock, User } from 'lucide-react';
import './BlogCard.css';

const BlogCard = ({ post, index }) => {
    return (
        <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="blog-card"
        >
            <div className="blog-card-header">
                <span className="blog-category">{post.category}</span>
            </div>

            <div className="blog-card-content">
                <h3 className="blog-card-title">
                    <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                </h3>
                <p className="blog-card-excerpt">{post.excerpt}</p>

                <div className="blog-card-meta">
                    <span className="meta-item">
                        <Calendar size={16} />
                        {new Date(post.date).toLocaleDateString('fr-FR', {
                            day: 'numeric',
                            month: 'long',
                            year: 'numeric'
                        })}
                    </span>
                    <span className="meta-item">
                        <Clock size={16} />
                        {post.readTime}
                    </span>
                </div>
            </div>

            <Link to={`/blog/${post.slug}`} className="blog-card-link">
                Lire l'article
            </Link>
        </motion.article>
    );
};

export default BlogCard;
