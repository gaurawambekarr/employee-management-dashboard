import { useEffect, useState } from "react";
import { getEmployees, saveEmployees, logout } from "../utils/storage";
import EmployeeForm from "../components/EmployeeForm";
import EmployeeTable from "../components/EmployeeTable";

export default function Dashboard() {
  const [employees, setEmployees] = useState([]);
  const [edit, setEdit] = useState(null);
  const [search, setSearch] = useState("");
  const [gender, setGender] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => setEmployees(getEmployees()), []);

const save = (emp) => {
  let updated;

  if (edit) {
    updated = employees.map(e =>
      e.id === edit.id ? { ...emp, id: edit.id } : e
    );
  } else {
    updated = [...employees, { ...emp, id: Date.now() }];
  }

  setEmployees(updated);
  saveEmployees(updated);
  setEdit(null);
};


  const remove = (id) => {
    if (!window.confirm("Delete employee?")) return;
    const updated = employees.filter(e => e.id !== id);
    setEmployees(updated);
    saveEmployees(updated);
  };

  const toggleStatus = (id) => {
    const updated = employees.map(e =>
      e.id === id ? { ...e, active: !e.active } : e
    );
    setEmployees(updated);
    saveEmployees(updated);
  };

  const filtered = employees.filter(e =>
    e.name.toLowerCase().includes(search.toLowerCase()) &&
    (gender === "" || e.gender === gender) &&
    (status === "" || (status === "active" ? e.active : !e.active))
  );

  return (
    <div className="dashboard">
      <button onClick={logout}>Logout</button>

      <div className="summary">
        <div className="card">Total: {employees.length}</div>
        <div className="card">
          Active: {employees.filter(e => e.active).length} | Inactive: {employees.filter(e => !e.active).length}
        </div>
      </div>

      <div className="controls">
        <input placeholder="Search Name" onChange={e=>setSearch(e.target.value)} />
        <select onChange={e=>setGender(e.target.value)}>
          <option value="">All Genders</option>
          <option>Male</option>
          <option>Female</option>
        </select>
        <select onChange={e=>setStatus(e.target.value)}>
          <option value="">All Status</option>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>
      </div>

      <EmployeeForm onSave={save} editData={edit} />
      <EmployeeTable
        data={filtered}
        onEdit={setEdit}
        onDelete={remove}
        onToggle={toggleStatus}
      />
    </div>
  );
}
