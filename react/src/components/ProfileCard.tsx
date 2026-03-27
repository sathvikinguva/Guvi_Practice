interface ProfileProps {
  name: string;
  occupation: string;
  email: string;
}

function ProfileCard({ name, occupation, email }: ProfileProps) {
  return (
    <div className="card my-3" style={{ maxWidth: '300px' }}>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p className="card-text"><strong>Occupation:</strong> {occupation}</p>
        <p className="card-text"><strong>Email:</strong> {email}</p>
      </div>
    </div>
  );
}

export default ProfileCard;
