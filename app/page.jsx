"use client";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

const Page = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [posts, setPosts] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetchSearchPosts();
  };

  const fetchSearchPosts = async () => {
    try {
      let res = await axios.get(
        `https://6545a7c6fe036a2fa954a518.mockapi.io/students?firstName=${searchQuery}`
      );
      let data = await res.data;
      setPosts(data);
      console.log(posts);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchSearchPosts();
  }, []);

  const handleClear = () => {
    setSearchQuery("");
    setPosts([]);
  };

  return (
    <div className="container p-[30px] mx-auto">
      <form onSubmit={handleSubmit}>
        <input
          className="w-full p-3 outline-none border-2 rounded-md"
          type="text"
          placeholder="Search Users..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <div className="flex justify-between items-center">
          <button
            type="submit"
            className="w-32 bg-[#852525] text-white py-2 rounded-md  hover:bg-white hover:text-[#4a4949] hover:transition-[0.3s] transition-[0.3s] border-2"
          >
            Search
          </button>
          <button
            onClick={handleClear}
            className="px-[1.4rem] py-[0.5rem] mx-[4.5rem] text-white my-5 bg-[#333333] border-2 text-800 hover:bg-white hover:border-2 hover:text-black transition-[0.3s] hover:transition-[0.3s]"
          >
            Clear
          </button>
        </div>
      </form>
      <div className="grid grid-cols-3 gap-[5rem]">
        {posts.map((student) => (
          <div
            className="user-card border-2 w-[15rem] h-[15rem] mt-[5rem] flex items-center flex-col justify-center gap-2"
            key={student.id}
          >
            <img src={student.avatar} alt="" />
            <h1 className="mx-[3.4rem] text-[1.5rem]">
              {student.firstName}_{student.lastName}
            </h1>
            <h1 className="mx-[3.4rem] text-[1.5rem]"></h1>
            {/* <Link href={`/${student.login}`}>
        <button className="px-[1.4rem] py-[0.5rem] mx-[4.5rem] text-white ... ... ... my-5 bg-[#333333] border-2 text-800 hover:bg-white hover:border-2 hover:text-black transition-[0.3s] hover:transition-[0.3s]">
          More
        </button>
      </Link> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
