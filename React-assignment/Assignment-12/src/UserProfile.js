import React, { useState } from 'react';

function UserProfile({ user }) {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(user.name);
  const [bio, setBio] = useState(user.bio);

  const handleSave = () => {
    setIsEditing(false);
  };

  return (
    <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '5px', margin: '20px 0' }}>
      {isEditing ? (
        <div>
          <h3>Edit Profile</h3>
          <div style={{ marginBottom: '10px' }}>
            <label>Name: </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label>Bio: </label>
            <textarea
              value={bio}
              onChange={(e) => setBio(e.target.value)}
            />
          </div>
          <button onClick={handleSave}>Save</button>
        </div>
      ) : (
        <div>
          <h3>User Profile</h3>
          <p><strong>Name:</strong> {name}</p>
          <p><strong>Bio:</strong> {bio}</p>
          <button onClick={() => setIsEditing(true)}>Edit Profile</button>
        </div>
      )}
    </div>
  );
}

export default UserProfile;
