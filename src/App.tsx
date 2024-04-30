import { useEffect, useState } from "react";
import axios from "axios";

type Posts = {
  id: number;
  userId: number;
  title: string;
  body: string;
};

function App() {
  const [posts, setPosts] = useState<Posts[]>([]);

  useEffect(() => {
    axios
      .get<Posts[]>("https://jsonplaceholder.typicode.com/posts?_limit=10")
      .then(({ data }) => setPosts(data));
  }, []);

  return <div>
    
  </div>;
}

export default App;
