import React from 'react';

interface BlogLayoutProps {
    children: React.ReactNode;
}

const BlogLayout: React.FC<BlogLayoutProps> = ({ children }) => {
    return (
        <div style={{
            maxWidth: '100%',
            margin: 'auto',
            padding: '2rem',
            width: '100%',
            boxSizing: 'border-box'
        }}>
            {children}
        </div>
    );
};

export default BlogLayout;
