import React from 'react';

interface BlogLayoutProps {
    children: React.ReactNode;
}

const BlogLayout: React.FC<BlogLayoutProps> = ({ children }) => {
    return (
        <div style={{
            maxWidth: '800px',
            margin: '0 auto',
            padding: '2rem 1rem',
            width: '100%',
            boxSizing: 'border-box'
        }}>
            {children}
        </div>
    );
};

export default BlogLayout;
