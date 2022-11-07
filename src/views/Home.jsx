import { Link } from "react-router-dom";

export const Home = () => {
  const entries = [
    {
      date: "2022-11-06",
      name: "Graphs Theory",
      path: "/article/4",
      author: "Camilo Davila",
    },
    {
      date: "2022-11-06",
      name: "Asintotas",
      path: "/article/3",
      author: "Camilo Davila",
    },
    {
      date: "2022-11-06",
      name: "Ejemplo: Aplicación de la derivada",
      path: "/article/2",
      author: "Camilo Davila",
    },
    {
      date: "2022-11-06",
      name: "Aplicación de la derivada",
      path: "/article/1",
      author: "Camilo Davila",
    },
  ];

  return (
    <div className="h-[84vh]">
      <div className="container mx-auto flex justify-start gap-4 content-center items-center">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Official_gnu.svg/2048px-Official_gnu.svg.png"
          alt="gnu"
          className="w-1/12"
        />
        <div className="info">
          <h1 className="font-bold text-2xl">Doom Notes</h1>
          <p className="">Personal Notes and more stuff...</p>
          <p className="text-sm text-gray-400 italic">Updated 2022-11-07</p>
        </div>
      </div>
      <hr />
      <div className="entries container mx-auto my-5" id="entries">
        <table className="table-auto w-full">
          <thead className="text-left">
            <tr>
              <th>Date</th>
              <th>Name</th>
              <th>Author</th>
            </tr>
          </thead>
          <tbody>
            {entries.map(({ date, name, path, author }, i) => {
              return (
                <tr key={i}>
                  <td className="font-bold">{date}</td>
                  <td>
                    <Link to={path}>{name}</Link>
                  </td>
                  <td className="italic">{author}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
