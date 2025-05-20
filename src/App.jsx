import { useState, useEffect } from "react";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const storedLogin = localStorage.getItem("isLoggedIn");
    if (storedLogin === "true") setIsLoggedIn(true);
  }, []);

  const handleLogin = () => {
    if (username === "user" && password === "1234") {
      setIsLoggedIn(true);
      localStorage.setItem("isLoggedIn", "true");
    } else {
      alert("Username atau password salah!");
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("isLoggedIn");
  };

  if (!isLoggedIn) {
    return (
      <div className="flex h-screen items-center justify-center bg-gray-100">
        <div className="w-full max-w-sm bg-white p-6 rounded-lg shadow-md space-y-4">
          <h2 className="text-2xl font-semibold text-center">Login Game Store</h2>
          <input
            className="w-full p-2 border rounded"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            className="w-full p-2 border rounded"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
            onClick={handleLogin}
          >
            Login
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">RajaMinyak - Top Up Game</h1>
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Logout
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {[
          { title: "Mobile Legends", desc: "Top up cepat dan mudah" },
          { title: "PUBG Mobile", desc: "Langsung masuk ke akun" },
          { title: "Free Fire", desc: "Pilih jumlah diamond sesuai kebutuhanmu" },
        ].map((game, index) => (
          <div key={index} className="border rounded p-4 shadow">
            <h3 className="text-lg font-semibold">{game.title}</h3>
            <p>{game.desc}</p>
            <button className="mt-2 w-full bg-green-600 text-white p-2 rounded hover:bg-green-700">
              Top Up
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
