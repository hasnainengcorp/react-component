import React, { useEffect, useState } from 'react';

const GithubUser = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch('https://api.github.com/users/hasnain393');
        if (!response.ok) {
          throw new Error('Failed to fetch user data');
        }
        const data = await response.json();
        setUser(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchUserData();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>GitHub User Info</h1>
      <img src={user.avatar_url} alt={user.login} style={styles.avatar} />
      <p><strong>Username:</strong> {user.login}</p>
      <p><strong>Public Repos:</strong> {user.public_repos}</p>
      <p><strong>Email:</strong> {user.email ? user.email : 'Not provided'}</p>
      <p><strong>Followers:</strong> {user.followers}</p>
      <p><a href={user.html_url} target="_blank" rel="noopener noreferrer">Visit GitHub Profile</a></p>
    </div>
  );
};

const styles = {
  container: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '20px',
    maxWidth: '400px',
    textAlign: 'center',
    margin: '20px auto',
    fontFamily: 'Arial, sans-serif'
  },
  header: {
    fontSize: '24px',
    marginBottom: '10px'
  },
  avatar: {
    borderRadius: '50%',
    width: '100px',
    height: '100px',
    marginBottom: '15px'
  }
};

export default GithubUser;
