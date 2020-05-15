/* eslint-disable */
import React from 'react';
import './Blog.scss';
import { FaAngleRight } from 'react-icons/fa';

const Blog = ({ blogList }) => {
    const blogLists = blogList.map((blog, index) => {
        const { link, description, title } = blog;
        return (
            <div className ="Blog-ArticleZone-Article-Item" key ={index}>
                <div className ="Blog-ArticleZone-Article-Item-Box"></div>
                <div className ="Blog-ArticleZone-Article-Item-Title">{title
                .replace(
                  /<(\/)?([a-zA-Z]*)(\s[a-zA-Z]*=[^>]*)?(\s)*(\/)?>/gi,
                  ''
                )
                .replace(/&quot;/gi, '')}</div>
                <div className ="Blog-ArticleZone-Article-Item-description">{description
                .replace(
                  /<(\/)?([a-zA-Z]*)(\s[a-zA-Z]*=[^>]*)?(\s)*(\/)?>/gi,
                  ''
                )
                .replace(/&quot;/gi, '')}</div>
                <div className ="Blog-ArticleZone-Article-Item-Link">
                <a href={link} target="_blank" rel ="noopener noreferrer">
                    More
                <FaAngleRight
                  style={{ verticalAlign: 'bottom', fontSize: '20px' }}
                />
              </a>
                </div>
            </div>
        );
    })
    return (
        <div className ="Blog">
            <div className ="Blog-Banner">
                <div className ="Blog-Banner-Top">
                    <p>This is for Earth</p>
                    <p>We need your help Lorem Ipsum</p>
                    <p className ="Blog-Banner-Top-Contents">Lorem IpsumStudy Suggests Rainfall Triggered 2018 Kīlauea Eruption</p>
                    <button className ="Blog-Banner-Top-Button">More News</button>
                </div>
            </div>

            <div className ="Blog-ArticleZone">
                <div className ="Blog-ArticleZone-Title">Earth Blog</div>
                <div className ="Blog-ArticleZone-Article">{blogLists}</div>
            </div>
        </div>
    );
}

export default Blog;