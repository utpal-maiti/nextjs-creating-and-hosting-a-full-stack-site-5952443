export default async function FetchTest() {
  const response = await fetch('https://didactic-spork-qv5rg559vw73xgq9-3000.app.github.dev/api/hello');
  const data = await response.json();

  return <h1>{data.message}</h1>
}