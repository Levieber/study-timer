export default function List() {
  const tasks = [
    {
      title: "React",
      time: "01:00:00",
    },
    {
      title: "Angular",
      time: "01:30:00",
    },
    {
      title: "Vue",
      time: "00:30:00",
    },
  ];

  return (
    <aside>
      <h2>Seus estudos do dia:</h2>
      <ul>
        {tasks.map(({ title, time }, index) => (
          <li key={index}>
            <h3>{title}</h3>
            <span>{time}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
}
