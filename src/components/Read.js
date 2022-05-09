import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Read = () => {
    const [blogData, setBlogData] = useState([]);

    const getData = () => {
        axios.get("http://localhost:3003") .then((res) => setBlogData(res.data))
    }

    useEffect(() => getData(), []);

    return (
        <div className='container-read'>
            <h2>Nos Artciles</h2>
            <span className='underline-read'></span>
            <ul>
                {blogData
                    .sort((a, b) => b.date - a.date)
                    .map((article) => (
                    // <Article key={article.id} article={article} />
                ))}
            </ul>
        </div>
    );
};

export default Read;