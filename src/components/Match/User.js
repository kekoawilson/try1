import React from 'react';
import { getUser } from '../../dummyinfo.js';
import { Link } from 'react-router-dom';

export default function User(props) {

  const user = getUser(props.match.params.id)

  return (
    <div>
      <Link to='/match'>Back</Link>
      <h1>{user.name}</h1>
      <p>{user.description}</p>
    </div>
  )
}