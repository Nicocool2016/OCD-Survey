import React from 'react';
import './AdminPage.css';
import logo from './OCD-Logo.png';

function AdminPage({ setRole }) {
  const customers = [
    { id: 1, name: 'User 1' },
    { id: 2, name: 'User 2' },
    { id: 3, name: 'User 3' },
    { id: 4, name: 'User 4' },
    { id: 5, name: 'User 5' },
    { id: 6, name: 'User 6' },
  ];

  return (
    <div className="admin-container">
      <aside className="sidebar">
        <img src={logo} alt="OCD Logo" className="logo" />
        <nav className="menu">
         
          <button onClick={() => setRole(null)}>Log ud</button>

          
          <button onClick={() => setRole('mail')}>Mail</button>

          
          <button onClick={() => setRole('surveyCreator')}>Opret Spørgeskema</button>
        </nav>
      </aside>

      <main className="main-content">
        <h1>Kunder</h1>
        <table className="customer-table">
          <thead>
            <tr>
              <th>Nr.</th>
              <th>Navn</th>
              <th>Handling</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer) => (
              <tr key={customer.id}>
                <td>{customer.id}</td>
                <td>{customer.name}</td>
                <td>
                  <input type="text" placeholder="Handling" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
}

export default AdminPage;
