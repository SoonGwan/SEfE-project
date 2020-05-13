/* eslint-disable */
import React, { useEffect } from 'react';
import { inject, observer } from 'mobx-react';
import Blog from 'components/Blog/Blog';

const NaverBlogContainer = ({ store }) => {
    const { handleSearchBlog, blogList } = store.BlogSearch;

    useEffect(() => {
        handleSearchBlog();
    }, []);

    return (
        <>
            <Blog blogList ={blogList} />
        </>
    );
}

export default inject('store')(observer(NaverBlogContainer));