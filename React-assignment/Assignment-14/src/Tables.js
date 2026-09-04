import React from 'react';

function Tables() {
  const students = [
    { id: 1, name: 'Alice', course: 'React', grade: 'A' },
    { id: 2, name: 'Bob', course: 'JavaScript', grade: 'B' },
    { id: 3, name: 'Charlie', course: 'HTML/CSS', grade: 'A+' }
  ];

  return (
    <div className="container mt-4">
      <h2>Tables Component</h2>
      <table className="table table-bordered table-striped mt-3">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Course</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
          {students.map((st) => (
            <tr key={st.id}>
              <td>{st.id}</td>
              <td>{st.name}</td>
              <td>{st.course}</td>
              <td>{st.grade}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Tables;
