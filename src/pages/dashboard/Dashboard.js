import React from 'react'
import { Link } from 'react-router-dom'
import './Dashboard.css'
export default function Dashboard() {
  return (
    <div>
    <Link className='back' to='/#'>Back</Link>

    <p className='dashboard-page'>You are in Dashboard.</p>
    </div>
  )
}
