import Card from "./components/Card";
function App() {
  // const username = "deepak chintada";
  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl text-center">
        Hello World
      </h1>
      <Card username="deepak" btnText="Visit Now" />
      <Card username="bobby" btnText="Pay Now" />
    </>
  );
}

export default App;
