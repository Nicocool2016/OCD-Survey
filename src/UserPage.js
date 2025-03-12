import React from 'react';
import './UserPage.css'; 
import logo from './OCD-Logo.png'; 


function UserPage() {
  const data = [
    { id: 1, activity: '', percentage: '100%' },
    { id: 2, activity: '', percentage: '100%' },
    { id: 3, activity: '', percentage: '60%' },
    { id: 4, activity: '', percentage: '80%' },
    { id: 5, activity: '', percentage: '50%' },
    { id: 6, activity: '', percentage: '40%' },
  ];

  return (
    <div className="user-container">
      <aside className="sidebar">
      <img src={logo} alt="OCD Logo" className="logo" />
        <nav className="menu">
          <button className="active">Oversigt</button>
        </nav>
      </aside>

      <main className="main-content">
        <h1>Oversigt</h1>
        <table className="data-table">
          <thead>
            <tr>
              <th>Nr.</th>
              <th>Aktivitet</th>
              <th>Procent</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row) => (
              <tr key={row.id}>
                <td>{row.id}</td>
                <td>{row.activity}</td>
                <td>{row.percentage}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
}

export default UserPage;
