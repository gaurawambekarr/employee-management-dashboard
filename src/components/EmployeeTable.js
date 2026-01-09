export default function EmployeeTable({ data, onEdit, onDelete, onToggle }) {
  if (!data.length) return <div className="empty">No Employees Found</div>;

  return (
    <>
      <button onClick={()=>window.print()}>Print</button>
      <table>
        <thead>
          <tr>
            <th>ID</th><th>Image</th><th>Name</th>
            <th>Gender</th><th>DOB</th><th>State</th>
            <th>Status</th><th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map(e=>(
            <tr key={e.id}>
              <td>{e.id}</td>
              <td>{e.image && <img src={e.image} alt={e.name} width="40" />}</td>
              <td>{e.name}</td>
              <td>{e.gender}</td>
              <td>{e.dob}</td>
              <td>{e.state}</td>
              <td>
                <input type="checkbox" checked={e.active}
                  onChange={()=>onToggle(e.id)} />
              </td>
              <td>
                <button onClick={()=>onEdit(e)}>Edit</button>
                <button onClick={()=>onDelete(e.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
