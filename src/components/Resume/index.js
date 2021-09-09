import React from 'react';
import "./Resume.scss"

const Resume = ({ source }) => {
  if (!source) {
    return <div>Loading...</div>;
  }

  const src = source;
  return (
    <div className='webviewer'>
      <iframe
        src={"https://docs.google.com/viewer?url=" + src + "&embedded=true"}
        title="file"
        width="100%"
        height="600"
      ></iframe>
    </div>
  );
};

export default Resume;