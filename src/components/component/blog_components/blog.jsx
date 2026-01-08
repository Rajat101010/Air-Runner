import "../../../components/css/home_components/our_experties.css";
import "../../../components/css/our_experties_components/our_experties.css";
import "../../../components/css/about_us_components/about_us.css";
import "../../../components/css/blog_components/blog.css";
// import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

import { Blogs_Description } from '../description/description'

import { FaMicroblog } from "react-icons/fa";

import { FaCircleUser } from "react-icons/fa6";



import { Blogs_Title_1 } from '../description/description'
import { Blogs_Description_1 } from '../description/description'

import { Blogs_Title_2 } from '../description/description'
import { Blogs_Description_2 } from '../description/description'

import { Blogs_Title_3 } from '../description/description'
import { Blogs_Description_3 } from '../description/description'

import { Blogs_Title_4 } from '../description/description'
import { Blogs_Description_4 } from '../description/description'

import { Blogs_Title_5 } from '../description/description'
import { Blogs_Description_5 } from '../description/description'

import { Blogs_Title_6 } from '../description/description'
import { Blogs_Description_6 } from '../description/description'

import { Blogs_Title_7 } from '../description/description'
import { Blogs_Description_7 } from '../description/description'

import { Blogs_Title_8 } from '../description/description'
import { Blogs_Description_8 } from '../description/description'


import blog_image_1 from '../../../assets/blogs_pictures/1.webp'
import blog_image_2 from '../../../assets/blogs_pictures/2.webp'
import blog_image_3 from '../../../assets/blogs_pictures/3.webp'
import blog_image_4 from '../../../assets/blogs_pictures/4.webp'
import blog_image_5 from '../../../assets/blogs_pictures/5.webp'
import blog_image_6 from '../../../assets/blogs_pictures/6.webp'
import blog_image_7 from '../../../assets/blogs_pictures/7.webp'
import blog_image_8 from '../../../assets/blogs_pictures/8.webp'


function Blogs() {



    const [activeBlog, setActiveBlog] = useState(null); // null | blog id
    const screenRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(e) {
            if (screenRef.current && !screenRef.current.contains(e.target)) {
                setActiveBlog(null);
            }
        }

        if (activeBlog !== null) {
            document.body.style.overflow = "hidden";
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.body.style.overflow = "auto";
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [activeBlog]);









    return (
        <main>
            <div className='our_expertise__page_parent'>
                <div className="our_expertise_title">
                    <font className='home_title_font'>
                        <div className="our_expertise_title_title">
                            <div>
                                <FaMicroblog />
                            </div>
                            <div>
                                &nbsp;Blogs
                            </div>
                        </div>
                    </font>
                    <font className='home_description_font'>
                        <p className="truncate-2 our_expertise_description_paragraph">
                            {Blogs_Description}
                        </p>
                    </font>
                </div>
                <div className="blog_page_content">
                    <div className="blog_content_individual no-highlight" onClick={() => setActiveBlog(1)}>
                        <div>
                            <img
                                src={blog_image_1}
                                alt="blog"
                                className='blog_image'
                                loading="lazy"
                            />
                        </div>
                        <div className="blog_information_content">
                            <font className='blog_information_content_tags_font'>
                                <div className="blog_information_content_tags">
                                    <div className="blog_information_content_tags_individual">
                                        Destinations
                                    </div>
                                    <div className="blog_information_content_tags_individual">
                                        Travel
                                    </div>
                                </div>
                            </font>
                            <div className="blog_information_content_title">
                                <font className='blog_information_content_tags_title_font'>
                                    {Blogs_Title_1}
                                </font>
                            </div>
                            <div>
                                <font className='blog_information_content_tags_description_font'>
                                    <p className="truncate-2 blog_description_paragraph">
                                        {Blogs_Description_1}
                                    </p>
                                </font>
                            </div>
                            <div className="blog_information_content_user_info">
                                <div className="user_icon_blog_page">
                                    <FaCircleUser size={35} />
                                </div>
                                <div>
                                    <div>
                                        <font className='blog_information_content_name_font'>
                                            Manish Kumar
                                        </font>
                                    </div>
                                    <div className="blog_information_content_date_information">
                                        <font className='blog_information_content_date_font'>
                                            Uploaded on: 22 Dec 2024
                                        </font>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="blog_content_individual no-highlight" onClick={() => setActiveBlog(2)}>
                        <div>
                            <img
                                src={blog_image_2}
                                alt="blog"
                                className='blog_image'
                                loading="lazy"
                            />
                        </div>
                        <div className="blog_information_content">
                            <font className='blog_information_content_tags_font'>
                                <div className="blog_information_content_tags">
                                    <div className="blog_information_content_tags_individual">
                                        Safety
                                    </div>
                                    <div className="blog_information_content_tags_individual">
                                        Comfort
                                    </div>
                                </div>
                            </font>
                            <div className="blog_information_content_title">
                                <font className='blog_information_content_tags_title_font'>
                                    {Blogs_Title_2}
                                </font>
                            </div>
                            <div>
                                <font className='blog_information_content_tags_description_font'>
                                    <p className="truncate-2 blog_description_paragraph">
                                        {Blogs_Description_2}
                                    </p>
                                </font>
                            </div>
                            <div className="blog_information_content_user_info">
                                <div className="user_icon_blog_page">
                                    <FaCircleUser size={35} />
                                </div>
                                <div>
                                    <div>
                                        <font className='blog_information_content_name_font'>
                                            Aarav Sharma
                                        </font>
                                    </div>
                                    <div className="blog_information_content_date_information">
                                        <font className='blog_information_content_date_font'>
                                            Uploaded on: 15 Feb 2022
                                        </font>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="blog_content_individual no-highlight" onClick={() => setActiveBlog(3)}>
                        <div>
                            <img
                                src={blog_image_3}
                                alt="blog"
                                className='blog_image'
                                loading="lazy"
                            />
                        </div>
                        <div className="blog_information_content">
                            <font className='blog_information_content_tags_font'>
                                <div className="blog_information_content_tags">
                                    <div className="blog_information_content_tags_individual">
                                        Travel
                                    </div>
                                    <div className="blog_information_content_tags_individual">
                                        Tips
                                    </div>
                                </div>
                            </font>
                            <div className="blog_information_content_title">
                                <font className='blog_information_content_tags_title_font'>
                                    {Blogs_Title_3}
                                </font>
                            </div>
                            <div>
                                <font className='blog_information_content_tags_description_font'>
                                    <p className="truncate-2 blog_description_paragraph">
                                        {Blogs_Description_3}
                                    </p>
                                </font>
                            </div>
                            <div className="blog_information_content_user_info">
                                <div className="user_icon_blog_page">
                                    <FaCircleUser size={35} />
                                </div>
                                <div>
                                    <div>
                                        <font className='blog_information_content_name_font'>
                                            Riya Verma
                                        </font>
                                    </div>
                                    <div className="blog_information_content_date_information">
                                        <font className='blog_information_content_date_font'>
                                            Uploaded on: 18 Sept 2023
                                        </font>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="blog_content_individual no-highlight" onClick={() => setActiveBlog(4)}>
                        <div>
                            <img
                                src={blog_image_4}
                                alt="blog"
                                className='blog_image'
                                loading="lazy"
                            />
                        </div>
                        <div className="blog_information_content">
                            <font className='blog_information_content_tags_font'>
                                <div className="blog_information_content_tags">
                                    <div className="blog_information_content_tags_individual">
                                        Crew
                                    </div>
                                    <div className="blog_information_content_tags_individual">
                                        Stories
                                    </div>
                                </div>
                            </font>
                            <div className="blog_information_content_title">
                                <font className='blog_information_content_tags_title_font'>
                                    {Blogs_Title_4}
                                </font>
                            </div>
                            <div>
                                <font className='blog_information_content_tags_description_font'>
                                    <p className="truncate-2 blog_description_paragraph">
                                        {Blogs_Description_4}
                                    </p>
                                </font>
                            </div>
                            <div className="blog_information_content_user_info">
                                <div className="user_icon_blog_page">
                                    <FaCircleUser size={35} />
                                </div>
                                <div>
                                    <div>
                                        <font className='blog_information_content_name_font'>
                                            Kunal Mehta
                                        </font>
                                    </div>
                                    <div className="blog_information_content_date_information">
                                        <font className='blog_information_content_date_font'>
                                            Uploaded on: 14 May 2024
                                        </font>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="blog_content_individual no-highlight" onClick={() => setActiveBlog(5)}>
                        <div>
                            <img
                                src={blog_image_5}
                                alt="blog"
                                className='blog_image'
                                loading="lazy"
                            />
                        </div>
                        <div className="blog_information_content">
                            <font className='blog_information_content_tags_font'>
                                <div className="blog_information_content_tags">
                                    <div className="blog_information_content_tags_individual">
                                        Routes
                                    </div>
                                    <div className="blog_information_content_tags_individual">
                                        Network
                                    </div>
                                </div>
                            </font>
                            <div className="blog_information_content_title">
                                <font className='blog_information_content_tags_title_font'>
                                    {Blogs_Title_5}
                                </font>
                            </div>
                            <div>
                                <font className='blog_information_content_tags_description_font'>
                                    <p className="truncate-2 blog_description_paragraph">
                                        {Blogs_Description_5}
                                    </p>
                                </font>
                            </div>
                            <div className="blog_information_content_user_info">
                                <div className="user_icon_blog_page">
                                    <FaCircleUser size={35} />
                                </div>
                                <div>
                                    <div>
                                        <font className='blog_information_content_name_font'>
                                            Priya Nair
                                        </font>
                                    </div>
                                    <div className="blog_information_content_date_information">
                                        <font className='blog_information_content_date_font'>
                                            Uploaded on: 11 Mar 2025
                                        </font>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="blog_content_individual no-highlight" onClick={() => setActiveBlog(6)}>
                        <div>
                            <img
                                src={blog_image_6}
                                alt="blog"
                                className='blog_image'
                                loading="lazy"
                            />
                        </div>
                        <div className="blog_information_content">
                            <font className='blog_information_content_tags_font'>
                                <div className="blog_information_content_tags">
                                    <div className="blog_information_content_tags_individual">
                                        Packing
                                    </div>
                                    <div className="blog_information_content_tags_individual">
                                        Baggage
                                    </div>
                                </div>
                            </font>
                            <div className="blog_information_content_title">
                                <font className='blog_information_content_tags_title_font'>
                                    {Blogs_Title_6}
                                </font>
                            </div>
                            <div>
                                <font className='blog_information_content_tags_description_font'>
                                    <p className="truncate-2 blog_description_paragraph">
                                        {Blogs_Description_6}
                                    </p>
                                </font>
                            </div>
                            <div className="blog_information_content_user_info">
                                <div className="user_icon_blog_page">
                                    <FaCircleUser size={35} />
                                </div>
                                <div>
                                    <div>
                                        <font className='blog_information_content_name_font'>
                                            Rohit Gupta
                                        </font>
                                    </div>
                                    <div className="blog_information_content_date_information">
                                        <font className='blog_information_content_date_font'>
                                            Uploaded on: 21 Nov 2022
                                        </font>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="blog_content_individual no-highlight" onClick={() => setActiveBlog(7)}>
                        <div>
                            <img
                                src={blog_image_7}
                                alt="blog"
                                className='blog_image'
                                loading="lazy"
                            />
                        </div>
                        <div className="blog_information_content">
                            <font className='blog_information_content_tags_font'>
                                <div className="blog_information_content_tags">
                                    <div className="blog_information_content_tags_individual">
                                        Sustainability
                                    </div>
                                    <div className="blog_information_content_tags_individual">
                                        Environment
                                    </div>
                                </div>
                            </font>
                            <div className="blog_information_content_title">
                                <font className='blog_information_content_tags_title_font'>
                                    {Blogs_Title_7}
                                </font>
                            </div>
                            <div>
                                <font className='blog_information_content_tags_description_font'>
                                    <p className="truncate-2 blog_description_paragraph">
                                        {Blogs_Description_7}
                                    </p>
                                </font>
                            </div>
                            <div className="blog_information_content_user_info">
                                <div className="user_icon_blog_page">
                                    <FaCircleUser size={35} />
                                </div>
                                <div>
                                    <div>
                                        <font className='blog_information_content_name_font'>
                                            Ananya Iyer
                                        </font>
                                    </div>
                                    <div className="blog_information_content_date_information">
                                        <font className='blog_information_content_date_font'>
                                            Uploaded on: 27 Oct 2025
                                        </font>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="blog_content_individual no-highlight" onClick={() => setActiveBlog(8)}>
                        <div>
                            <img
                                src={blog_image_8}
                                alt="blog"
                                className='blog_image'
                                loading="lazy"
                            />
                        </div>
                        <div className="blog_information_content">
                            <font className='blog_information_content_tags_font'>
                                <div className="blog_information_content_tags">
                                    <div className="blog_information_content_tags_individual">
                                        Fleet
                                    </div>
                                    <div className="blog_information_content_tags_individual">
                                        Technology
                                    </div>
                                </div>
                            </font>
                            <div className="blog_information_content_title">
                                <font className='blog_information_content_tags_title_font'>
                                    {Blogs_Title_8}
                                </font>
                            </div>
                            <div>
                                <font className='blog_information_content_tags_description_font'>
                                    <p className="truncate-2 blog_description_paragraph">
                                        {Blogs_Description_8}
                                    </p>
                                </font>
                            </div>
                            <div className="blog_information_content_user_info">
                                <div className="user_icon_blog_page">
                                    <FaCircleUser size={35} />
                                </div>
                                <div>
                                    <div>
                                        <font className='blog_information_content_name_font'>
                                            Vikram Singh
                                        </font>
                                    </div>
                                    <div className="blog_information_content_date_information">
                                        <font className='blog_information_content_date_font'>
                                            Uploaded on: 6 Apr 2023
                                        </font>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>





                {activeBlog === 1 && (
                    <div className="overlay">
                        <div className="mini_blog" ref={screenRef}>
                            <div className="blog_information_content">
                                <font className='blog_information_content_tags_font'>
                                    <div className="blog_information_content_tags">
                                        <div className="blog_information_content_tags_individual">
                                            Destinations
                                        </div>
                                        <div className="blog_information_content_tags_individual">
                                            Travel
                                        </div>
                                    </div>
                                </font>
                                <div className="blog_information_content_title">
                                    <font className='blog_information_content_tags_title_font'>
                                        {Blogs_Title_1}
                                    </font>
                                </div>
                                <div>
                                    <font className='blog_information_content_tags_description_font'>
                                        <p className="truncate-all blog_description_paragraph">
                                            {Blogs_Description_1}
                                        </p>
                                    </font>
                                </div>
                                <div className="blog_information_content_user_info">
                                    <div className="user_icon_blog_page">
                                        <FaCircleUser size={35} />
                                    </div>
                                    <div>
                                        <div>
                                            <font className='blog_information_content_name_font'>
                                                Manish Kumar
                                            </font>
                                        </div>
                                        <div className="blog_information_content_date_information">
                                            <font className='blog_information_content_date_font'>
                                                Uploaded on: 22 Dec 2024
                                            </font>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {activeBlog === 2 && (
                    <div className="overlay">
                        <div className="mini_blog" ref={screenRef}>
                            <div className="blog_information_content">
                                <font className='blog_information_content_tags_font'>
                                    <div className="blog_information_content_tags">
                                        <div className="blog_information_content_tags_individual">
                                            Safety
                                        </div>
                                        <div className="blog_information_content_tags_individual">
                                            Comfort
                                        </div>
                                    </div>
                                </font>
                                <div className="blog_information_content_title">
                                    <font className='blog_information_content_tags_title_font'>
                                        {Blogs_Title_2}
                                    </font>
                                </div>
                                <div>
                                    <font className='blog_information_content_tags_description_font'>
                                        <p className="truncate-all blog_description_paragraph">
                                            {Blogs_Description_2}
                                        </p>
                                    </font>
                                </div>
                                <div className="blog_information_content_user_info">
                                    <div className="user_icon_blog_page">
                                        <FaCircleUser size={35} />
                                    </div>
                                    <div>
                                        <div>
                                            <font className='blog_information_content_name_font'>
                                                Aarav Sharma
                                            </font>
                                        </div>
                                        <div className="blog_information_content_date_information">
                                            <font className='blog_information_content_date_font'>
                                                Uploaded on: 15 Feb 2022
                                            </font>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {activeBlog === 3 && (
                    <div className="overlay">
                        <div className="mini_blog" ref={screenRef}>
                            <div className="blog_information_content">
                                <font className='blog_information_content_tags_font'>
                                    <div className="blog_information_content_tags">
                                        <div className="blog_information_content_tags_individual">
                                            Travel
                                        </div>
                                        <div className="blog_information_content_tags_individual">
                                            Tips
                                        </div>
                                    </div>
                                </font>
                                <div className="blog_information_content_title">
                                    <font className='blog_information_content_tags_title_font'>
                                        {Blogs_Title_3}
                                    </font>
                                </div>
                                <div>
                                    <font className='blog_information_content_tags_description_font'>
                                        <p className="truncate-all blog_description_paragraph">
                                            {Blogs_Description_3}
                                        </p>
                                    </font>
                                </div>
                                <div className="blog_information_content_user_info">
                                    <div className="user_icon_blog_page">
                                        <FaCircleUser size={35} />
                                    </div>
                                    <div>
                                        <div>
                                            <font className='blog_information_content_name_font'>
                                                Riya Verma
                                            </font>
                                        </div>
                                        <div className="blog_information_content_date_information">
                                            <font className='blog_information_content_date_font'>
                                                Uploaded on: 18 Sept 2023
                                            </font>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {activeBlog === 4 && (
                    <div className="overlay">
                        <div className="mini_blog" ref={screenRef}>
                            <div className="blog_information_content">
                                <font className='blog_information_content_tags_font'>
                                    <div className="blog_information_content_tags">
                                        <div className="blog_information_content_tags_individual">
                                            Crew
                                        </div>
                                        <div className="blog_information_content_tags_individual">
                                            Stories
                                        </div>
                                    </div>
                                </font>
                                <div className="blog_information_content_title">
                                    <font className='blog_information_content_tags_title_font'>
                                        {Blogs_Title_4}
                                    </font>
                                </div>
                                <div>
                                    <font className='blog_information_content_tags_description_font'>
                                        <p className="truncate-all blog_description_paragraph">
                                            {Blogs_Description_4}
                                        </p>
                                    </font>
                                </div>
                                <div className="blog_information_content_user_info">
                                    <div className="user_icon_blog_page">
                                        <FaCircleUser size={35} />
                                    </div>
                                    <div>
                                        <div>
                                            <font className='blog_information_content_name_font'>
                                                Kunal Mehta
                                            </font>
                                        </div>
                                        <div className="blog_information_content_date_information">
                                            <font className='blog_information_content_date_font'>
                                                Uploaded on: 14 May 2024
                                            </font>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {activeBlog === 5 && (
                    <div className="overlay">
                        <div className="mini_blog" ref={screenRef}>
                            <div className="blog_information_content">
                                <font className='blog_information_content_tags_font'>
                                    <div className="blog_information_content_tags">
                                        <div className="blog_information_content_tags_individual">
                                            Routes
                                        </div>
                                        <div className="blog_information_content_tags_individual">
                                            Network
                                        </div>
                                    </div>
                                </font>
                                <div className="blog_information_content_title">
                                    <font className='blog_information_content_tags_title_font'>
                                        {Blogs_Title_5}
                                    </font>
                                </div>
                                <div>
                                    <font className='blog_information_content_tags_description_font'>
                                        <p className="truncate-all blog_description_paragraph">
                                            {Blogs_Description_5}
                                        </p>
                                    </font>
                                </div>
                                <div className="blog_information_content_user_info">
                                    <div className="user_icon_blog_page">
                                        <FaCircleUser size={35} />
                                    </div>
                                    <div>
                                        <div>
                                            <font className='blog_information_content_name_font'>
                                                Priya Nair
                                            </font>
                                        </div>
                                        <div className="blog_information_content_date_information">
                                            <font className='blog_information_content_date_font'>
                                                Uploaded on: 11 Mar 2025
                                            </font>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {activeBlog === 6 && (
                    <div className="overlay">
                        <div className="mini_blog" ref={screenRef}>
                            <div className="blog_information_content">
                                <font className='blog_information_content_tags_font'>
                                    <div className="blog_information_content_tags">
                                        <div className="blog_information_content_tags_individual">
                                            Packing
                                        </div>
                                        <div className="blog_information_content_tags_individual">
                                            Baggage
                                        </div>
                                    </div>
                                </font>
                                <div className="blog_information_content_title">
                                    <font className='blog_information_content_tags_title_font'>
                                        {Blogs_Title_6}
                                    </font>
                                </div>
                                <div>
                                    <font className='blog_information_content_tags_description_font'>
                                        <p className="truncate-all blog_description_paragraph">
                                            {Blogs_Description_6}
                                        </p>
                                    </font>
                                </div>
                                <div className="blog_information_content_user_info">
                                    <div className="user_icon_blog_page">
                                        <FaCircleUser size={35} />
                                    </div>
                                    <div>
                                        <div>
                                            <font className='blog_information_content_name_font'>
                                                Rohit Gupta
                                            </font>
                                        </div>
                                        <div className="blog_information_content_date_information">
                                            <font className='blog_information_content_date_font'>
                                                Uploaded on: 21 Nov 2022
                                            </font>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {activeBlog === 7 && (
                    <div className="overlay">
                        <div className="mini_blog" ref={screenRef}>
                            <div className="blog_information_content">
                                <font className='blog_information_content_tags_font'>
                                    <div className="blog_information_content_tags">
                                        <div className="blog_information_content_tags_individual">
                                            Sustainability
                                        </div>
                                        <div className="blog_information_content_tags_individual">
                                            Environment
                                        </div>
                                    </div>
                                </font>
                                <div className="blog_information_content_title">
                                    <font className='blog_information_content_tags_title_font'>
                                        {Blogs_Title_7}
                                    </font>
                                </div>
                                <div>
                                    <font className='blog_information_content_tags_description_font'>
                                        <p className="truncate-all blog_description_paragraph">
                                            {Blogs_Description_7}
                                        </p>
                                    </font>
                                </div>
                                <div className="blog_information_content_user_info">
                                    <div className="user_icon_blog_page">
                                        <FaCircleUser size={35} />
                                    </div>
                                    <div>
                                        <div>
                                            <font className='blog_information_content_name_font'>
                                                Ananya Iyer
                                            </font>
                                        </div>
                                        <div className="blog_information_content_date_information">
                                            <font className='blog_information_content_date_font'>
                                                Uploaded on: 27 Oct 2025
                                            </font>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {activeBlog === 8 && (
                    <div className="overlay">
                        <div className="mini_blog" ref={screenRef}>
                            <div className="blog_information_content">
                                <font className='blog_information_content_tags_font'>
                                    <div className="blog_information_content_tags">
                                        <div className="blog_information_content_tags_individual">
                                            Fleet
                                        </div>
                                        <div className="blog_information_content_tags_individual">
                                            Technology
                                        </div>
                                    </div>
                                </font>
                                <div className="blog_information_content_title">
                                    <font className='blog_information_content_tags_title_font'>
                                        {Blogs_Title_8}
                                    </font>
                                </div>
                                <div>
                                    <font className='blog_information_content_tags_description_font'>
                                        <p className="truncate-all blog_description_paragraph">
                                            {Blogs_Description_8}
                                        </p>
                                    </font>
                                </div>
                                <div className="blog_information_content_user_info">
                                    <div className="user_icon_blog_page">
                                        <FaCircleUser size={35} />
                                    </div>
                                    <div>
                                        <div>
                                            <font className='blog_information_content_name_font'>
                                                Vikram Singh
                                            </font>
                                        </div>
                                        <div className="blog_information_content_date_information">
                                            <font className='blog_information_content_date_font'>
                                                Uploaded on: 6 Apr 2023
                                            </font>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

            </div>
        </main >
    );
}

export default Blogs;