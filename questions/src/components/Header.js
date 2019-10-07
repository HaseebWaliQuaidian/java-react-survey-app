import React from 'react';
import { Link } from 'react-router-dom'
import '../components/Header.css'
const Header = () => {
  return (
    <div className="header">
      <Link to="/questions">Questions </Link>
      <Link to="/createquestion">Create Question</Link>
    </div>
  )
}

export default Header