interface ContestantProps {
  name: string;
  bio: string;
  image: string;
}

export default function ContestantCard({ name, bio, image }: ContestantProps) {
  return (
    <div className="bg-white shadow-md border rounded-lg overflow-hidden">
      <img src={image} alt={name} className="w-full h-64 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-bold text-purple-700 mb-1">{name}</h3>
        <p className="text-gray-600 text-sm">{bio}</p>
      </div>
    </div>
  );
}
