import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import BlogCard from '../components/BlogCard';
import { blogPosts, categories } from '../data/blogData';
import TaxGuideGenerator from '../components/TaxGuideGenerator';
import './Blog.css';

const Blog = () => {
    const [selectedCategory, setSelectedCategory] = useState('Tous');
    const [searchTerm, setSearchTerm] = useState('');

    const filteredPosts = blogPosts.filter(post => {
        const matchesCategory = selectedCategory === 'Tous' || post.category === selectedCategory;
        const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="blog-page">
            <section className="page-header">
                <div className="container">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        Blog & Actualités
                    </motion.h1>
                    <p>Conseils, analyses et actualités pour optimiser la gestion de votre entreprise</p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    {/* Filters */}
                    <div className="blog-filters">
                        <div className="search-box">
                            <Search size={20} />
                            <input
                                type="text"
                                placeholder="Rechercher un article..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>

                        <div className="category-filters">
                            {categories.map(category => (
                                <button
                                    key={category}
                                    className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
                                    onClick={() => setSelectedCategory(category)}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Blog Grid */}
                    {filteredPosts.length > 0 ? (
                        <div className="blog-grid">
                            {filteredPosts.map((post, index) => (
                                <BlogCard key={post.id} post={post} index={index} />
                            ))}
                        </div>
                    ) : (
                        <div className="no-results">
                            <p>Aucun article trouvé pour cette recherche.</p>
                        </div>
                    )}
                </div>
            </section>

            <TaxGuideGenerator />
        </div>
    );
};

export default Blog;
