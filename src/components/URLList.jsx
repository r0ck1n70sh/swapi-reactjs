import React from 'react'

const URLList = (props) => {
    let { data } = props;
    let list = data.map((urlString) => {
            return (
                <div key={ urlString }>
                    <a href={ urlString }>
                        { urlString }
                    </a>
                </div>
            )
    })

    return (
        <div>
            {list}
        </div>
    );
}

export default URLList;