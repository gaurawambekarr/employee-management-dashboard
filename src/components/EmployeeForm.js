import { useEffect, useState } from "react";

export default function EmployeeForm({ onSave, editData }) {
  const [f, setF] = useState({
    name:"", gender:"", dob:"", state:"",
    active:true, image:""
  });

  useEffect(() => {
  if (editData) {
    setF(editData);
  }
}, [editData]);


  const img = e => {
    const r = new FileReader();
    r.onload = () => setF({ ...f, image: r.result });
    r.readAsDataURL(e.target.files[0]);
  };

  const submit = () => {
    if (!f.name || !f.gender || !f.dob || !f.state)
      return alert("All fields required");
    onSave(f);
    setF({ name:"", gender:"", dob:"", state:"", active:true, image:"" });
  };

  return (
    <div className="card">
      <input placeholder="Full Name" value={f.name} onChange={e=>setF({...f,name:e.target.value})}/>
      <select value={f.gender} onChange={e=>setF({...f,gender:e.target.value})}>
        <option value="">Gender</option><option>Male</option><option>Female</option>
      </select>
      <input type="date" value={f.dob} onChange={e=>setF({...f,dob:e.target.value})}/>
      <select
  value={f.state}
  onChange={e => setF({ ...f, state: e.target.value })}
>
  <option value="">Select State</option>
  <option>Andhra Pradesh</option>
  <option>Arunachal Pradesh</option>
  <option>Assam</option>
  <option>Bihar</option>
  <option>Chhattisgarh</option>
  <option>Goa</option>
  <option>Gujarat</option>
  <option>Haryana</option>
  <option>Himachal Pradesh</option>
  <option>Jharkhand</option>
  <option>Karnataka</option>
  <option>Kerala</option>
  <option>Madhya Pradesh</option>
  <option>Maharashtra</option>
  <option>Manipur</option>
  <option>Meghalaya</option>
  <option>Mizoram</option>
  <option>Nagaland</option>
  <option>Odisha</option>
  <option>Punjab</option>
  <option>Rajasthan</option>
  <option>Sikkim</option>
  <option>Tamil Nadu</option>
  <option>Telangana</option>
  <option>Tripura</option>
  <option>Uttar Pradesh</option>
  <option>Uttarakhand</option>
  <option>West Bengal</option>

  {/* Union Territories */}
  <option>Andaman and Nicobar Islands</option>
  <option>Chandigarh</option>
  <option>Dadra and Nagar Haveli and Daman and Diu</option>
  <option>Delhi</option>
  <option>Jammu and Kashmir</option>
  <option>Ladakh</option>
  <option>Lakshadweep</option>
  <option>Puducherry</option>
</select>

      <label>
        <input type="checkbox" checked={f.active}
          onChange={e=>setF({...f,active:e.target.checked})}/>
        Active
      </label>
      <input type="file" onChange={img}/>
      {f.image && <img src={f.image} alt="Preview" width="50" />}
      <button onClick={submit}>
  {editData ? "Update Employee" : "Add Employee"}
</button>

    </div>
  );
}
