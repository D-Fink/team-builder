import React from 'react';

const Members = props => {
    return (
        <div>
            {props.team.map( member => (
                <div key={member.id}>
                    <h2>{member.MemberName}</h2>
                    <h3>{member.MemberRole}</h3>
                    <p>{member.MemberEmail}</p>
                    <button>edit</button>
                </div>
            ))}
        </div>
    );
};

export default Members