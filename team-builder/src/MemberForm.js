import React, {useState} from 'react';

const MemberForm = props => {
    const [member, setMember] = useState({MemberName: '', MemberEmail: '', MemberRole: ''});

    const handleChanges = event => {
        setMember({...member, [event.target.name]: event.target.value});
    };

    const submitForm = event => {
        event.preventDefault();
        props.addTeamMember(member);
        setMember({MemberName:'', MemberEmail:'', MemberRole:''});
    };

    return (
        <form onSubmit={submitForm}>
            <label htmlFor='MemberName'>Name:</label>
            <input id={Date.now()} type="text" name='MemberName' onChange={handleChanges} value={member.MemberName}/>
            <label htmlFor='MemberEmail'>Email:</label>
            <input id={Date.now()} type='text' name='MemberEmail' onChange={handleChanges} value={member.MemberEmail}/>
            <label htmlFor='MemberRole'>Role:</label>
            <input id={Date.now()} type='text' name='MemberRole' onChange={handleChanges} value={member.MemberRole}/>
            <button type='submit'>Submit</button>
        </form>
    )
}

export default MemberForm