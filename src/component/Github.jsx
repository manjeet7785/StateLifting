import React, { useEffect, useState } from 'react'
import { data, useParams } from 'react-router-dom';

const Github = () => {
  const { name } = useParams();
  console.log(name);
  const [Profile, setProfile] = useState(null);

  async function FetchApi() {
    const data = await fetch(`https://api.github.com/users/${name}`)
    const response = await data.json();
    setProfile(data);
  }

  useEffect(() => {
    FetchApi();
  }, [name]);

  return (
    <div>
      <h1>
        GitHub Profile
      </h1>
      <div>
        <img src={Profile?.avatar_url} alt="#" />
        <h2>{Profile?.login}</h2>
      </div>
    </div>
  )
}

export default Github;