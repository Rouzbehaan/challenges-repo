import Card from "./components/Card";

export default function App() {
  const fruits = [
    { id: 0, name: "🍌banana", color: "yellow" },
    { id: 1, name: "🍒cherry", color: "red" },
    { id: 2, name: "🍎apple", color: "green" },
    { id: 3, name: "🍊orange", color: "orange" },
    { id: 4, name: "🍈melon", color: "yellow" },
  ];
  console.log("fruits:", fruits);
  return (
    <div className="app">
      {fruits.map(({ id, name, color }) => (
        <Card key={id} name={name} color={color} />
      ))}
    </div>
  );
}
