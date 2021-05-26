import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Home = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const getPosts = async () => {
            const { data } = await axios.get('/api/lakewoodscoop/scrape');
            setPosts(data);
        };
        getPosts();
    }, []);

    return (
        <div className='container'>
            <div className='row'>
                <button className='btn btn-primary' >Refresh</button>
            </div>
            <div className='row'>
                <table className='table table-hover table-bordered table-striped'>
                    <thead>
                        <tr>
                            <th style={{ width: "20%" }}>Image</th>
                            <th>Title</th>
                            <th>Blurb</th>
                            <th>Comments count</th>
                        </tr>
                    </thead>
                    <tbody>
                        {posts && posts.map(p =>
                            <tr>
                                <td>
                                    <img src={p.imageUrl} />
                                </td>
                                <td>
                                    <a target="_blank" href={p.linkUrl}>
                                        {p.title}
                                    </a>
                                </td>
                                <td>{p.blurbOfText}</td>
                                <td>{p.amountOfComments}</td>
                            </tr>)}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Home;