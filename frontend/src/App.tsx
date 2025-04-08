import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [msg, setMsg] = useState("");

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/hello`)
      .then((res) => setMsg(res.data))
      .catch((err) => {
        console.error("API 호출 실패", err);
        setMsg("API 호출 실패");
      });
  }, []);

  return (
    <div style={{ padding: "2rem" }}>
      <h1>{msg || "Loading..."}</h1>
    </div>
  );
}

export default App;
