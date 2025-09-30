export default function ProfileCard({ user }) {
  return (
    <div className="card">
      <h2>{user.name}</h2>
      <p>Email: {user.email}</p>
      <p>Username: {user.username}</p>
      <p>Phone: {user.phone}</p>
      <p>Website: {user.website}</p>
    </div>
  );
}
