export default function AdminUsers() {
  const users = [
    { id: 1, name: "Anita Sharma", email: "anita@example.com", role: "donor" },
    { id: 2, name: "City Hospital", email: "admin@cityhosp.org", role: "hospital" },
    { id: 3, name: "Raju Admin", email: "sharma.raju304@gmail.com", role: "admin" },
  ];
  return (
    <div className="container mx-auto max-w-5xl py-12">
      <h1 className="text-3xl font-bold tracking-tight">Users</h1>
      <div className="mt-6 overflow-x-auto rounded-lg border">
        <table className="min-w-full text-sm">
          <thead className="bg-muted/50 text-left">
            <tr>
              <th className="p-3">Name</th>
              <th className="p-3">Email</th>
              <th className="p-3">Role</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u) => (
              <tr key={u.id} className="border-t">
                <td className="p-3">{u.name}</td>
                <td className="p-3">{u.email}</td>
                <td className="p-3"><span className="rounded-full bg-muted px-2 py-1 text-xs">{u.role}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
