import LikeButton from './like-button';

function Header({ title }) {
  return <h1>{title ? title : 'Default title'}</h1>;
}

export default function HomePage() {
  const names = ['set', 'alg', 'geo'];

  return (
    <div>
      <Header title="stuff" />
      <ul>
        {names.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>

      <LikeButton />
    </div>
  );
}