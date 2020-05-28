import React from 'react';
import Maps from '../components/Maps';
import { Link } from 'react-router-dom';

const Mapss = () => {
    return (
        <div>
            <h1>Maps</h1>
            <Link to="success">戻る</Link>
            <Maps></Maps>
        </div>
    )
}

export default Mapss;