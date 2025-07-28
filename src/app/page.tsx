export default async function Home() {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  const data = await response.json();

  console.log(data);

  return <div>{JSON.stringify(data)}</div>;
}
