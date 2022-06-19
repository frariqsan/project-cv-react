import React from 'react';

const Languages = ({languages}) => {
    return (
    <div>
    <h2>
        {languages.language}
    </h2>
    <p>{languages.wrlevel}</p>
    <p>{languages.splevel}</p>
    </div>
  )
}

export default Languages;