import NavBar from "../components/NavBar";

function Home() {
  return (
    <div className="container- mx-auto w-full bg-gradient-to-r from-slate-900 to-violet-700">
      <NavBar />
      <div
        style={{
          background:
            "url(http://www.transparenttextures.com/patterns/cubes.png)",
        }}
        className="container-fluid mx-auto h-screen"
      ></div>
    </div>
  );
}

export default Home;
