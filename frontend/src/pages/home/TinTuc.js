import axios from 'axios';
import { useState, useEffect } from 'react';
import { ip } from '../api/Api';
import { Link } from "react-router-dom";

const TinTuc = () => {
    const [posts, setPosts] = useState([]);
    const [currentCategory, setCurrentCategory] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [currentPost, setCurrentPost] = useState(null);

    const fetchPosts = async () => {
        try {
            const response = await axios.get(`${ip}/post`);
            console.log('Fetched posts:', response.data);
            setPosts(response.data || []);
        } catch (error) {
            console.error('Error fetching posts', error);
            setPosts([]);
        }
    };

    useEffect(() => {
        fetchPosts();
    }, []);

    useEffect(() => {
        if (posts.length > 0) {
            setCurrentPost(posts[0]);
        }
    }, [posts]);

    const handleClick = (post) => {
        setCurrentPost(post);
    };

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-4'>
                    <h4 className='my-2'>Tất cả bài viết</h4>
                    <section className="maincontent my-3">
                        {posts.map((post) => (
                            <div
                                key={post.id}
                                className="rounded-4 border m-1 bg-white shadow"
                                style={{ height: "300px" }}
                                onClick={() => handleClick(post)}
                            >
                                <Link to="#"><img src={post.image} style={{ height: "200px", width: "407px" }} className="rounded-4 border" /></Link>
                                <p className="mx-1">{post.name}</p>
                            </div>
                        ))}
                    </section>
                </div>
                <div className='col-8'>
                    {currentPost && (
                        <div>
                            <h2 className='my-2'>{currentPost.name}</h2>
                            <img src={currentPost.image} style={{ height: "100%", width: "100%" }} className="rounded-4 border my-2" />
                            <p>{currentPost.detail}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default TinTuc;
