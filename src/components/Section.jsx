export const Section = ({ children, title }) => {
  return (
    <div className="section mx-2 border-l-2 border-l-gray-400 pl-2 my-2">
      <h3 className="text-1xl font-bold">{title}</h3>
      {children}
    </div>
  );
};
