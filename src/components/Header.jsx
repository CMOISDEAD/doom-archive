export const Header = ({ title, author, subject, date }) => {
  return (
    <div className="mb-5">
      <div className="container mx-auto">
        <h1 className="text-2xl font-bold">{title}</h1>
      </div>
      <hr />
      <div className="container mx-auto">
        <p>
          <strong>De:</strong> {author}
        </p>
        <p>
          <strong>Asunto:</strong> {subject}
        </p>
        <p>
          <strong>Fecha:</strong> {date}
        </p>
      </div>
      <hr />
    </div>
  );
};
