import React, { useState } from 'react';
import ProgressBar from './progressBar';

const UploadForm = () => {

    const [file, setFile] = useState(null);
    const type = ['image/png', 'image/jpeg'];
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        let selected = e.target.files[0];
        if(selected && type.includes(selected.type)){
            setFile(selected);
            setError('');
        } else {
            setFile(null);
            setError('Please select an image file (png or jpeg)');
        }
    }

    return (
        <form>
            <label>
             <input type="file" onChange={handleChange}/>
             <span>+</span>
            </label>
            <div className="output">
                {file && <div>{file.name}</div>}
                {error && <div className="error">{error}</div>}
                {file && <ProgressBar file={file} setFile={setFile}/>}
            </div>
        </form>
    )   
}

export default UploadForm;