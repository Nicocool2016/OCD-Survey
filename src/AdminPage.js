import React from 'react';
import './AdminPage.css';
import logo from './OCD-Logo.png';

function AdminPage({ setRole }) {
  const customers = [
    { id: 1, name: 'Nicolai' },
    { id: 2, name: 'Anne' },
    { id: 3, name: 'Simon' },
    { id: 4, name: 'Laila' },
    { id: 5, name: 'Mikkel' },
    { id: 6, name: 'Birgitte' },
  ];

  return (
    <div className="admin-container">
      <aside className="sidebar">
        <img src={logo} alt="OCD Logo" className="logo" />
        <nav className="menu">
          {/* Button to log out */}
          <button onClick={() => setRole(null)}>Log ud</button>

          {/* Button to go to the Mail page */}
          <button onClick={() => setRole('mail')}>Mail</button>

          {/* Button to go to the Survey Creator page */}
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
