import React, { useState } from "react";
import Chat from "./Chat";
import Contact from "./Contact";
import Search from "./UI/Search";

import avatar1 from "../assets/imgs/contact-images/Layer 1.png";
import avatar2 from "../assets/imgs/contact-images/Layer 2.png";
import avatar3 from "../assets/imgs/contact-images/Layer 3.png";
import avatar4 from "../assets/imgs/contact-images/Layer 4.png";

const Wrapper = () => {
  const [search, setSearch] = useState("");
  const value = (searchValue) => {
    setSearch(searchValue);
  };
  const params = 3;
  const messages = [
    {
      message: {
        value: "message 1 ",
        time: "09:12",
      },
      user: {
        name: "Admin",
        avatar: avatar1,
        id: 1,
        color: {
          text: "text-[#97b3dd]",
          bg: "bg-[#97b3dd]",
        },
      },
    },
    {
      message: {
        value: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis veniam
        magni quae dolor deserunt blanditiis reprehenderit sint nesciunt
        repudiandae reiciendis totam, doloribus ducimus, quos possimus dolorum
        deleniti eum esse est.`,
        time: "09:12",
      },
      user: {
        name: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis veniam
        magni quae dolor deserunt.`,
        avatar: avatar1,
        id: 1,
        color: {
          text: "text-[#97b3dd]",
          bg: "bg-[#97b3dd]",
        },
      },
    },
    {
      message: {
        value: `Lorem ipsum dolor sit amet consectetur.`,
        time: "03:12",
      },
      user: {
        name: "Olivia William ",
        avatar: avatar2,
        id: 2,
        color: {
          text: "text-[#6bb6d7]",
          bg: "bg-[#6bb6d7]",
        },
      },
    },
    {
      message: {
        value: "message 1",
        time: "09:12",
      },
      user: {
        name: "Admin",
        avatar: avatar1,
        id: 1,
        color: {
          text: "text-[#97b3dd]",
          bg: "bg-[#97b3dd]",
        },
      },
    },
    {
      message: {
        value: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis veniam
        magni quae dolor deserunt..`,
        time: "19:12",
      },
      user: {
        name: "Mohamed Farag",
        avatar: avatar3,
        id: 3,
        color: {
          text: "text-[#43507f]",
          bg: "bg-[#43507f]",
        },
      },
    },
    {
      message: {
        value: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis veniam
        magni quae dolor deserunt blanditiis reprehenderit sint nesciunt
        repudiandae reiciendis totam, doloribus ducimus, quos possimus dolorum
        deleniti eum esse est.`,
        time: "19:12",
      },
      user: {
        name: "Mohamed Farag",
        avatar: avatar3,
        id: 3,
        color: {
          text: "text-[#43507f]",
          bg: "bg-[#43507f]",
        },
      },
    },
    {
      message: {
        value: "message 1",
        time: "20:12",
      },
      user: {
        name: "Emma James ",
        avatar: avatar4,
        id: 4,
        color: {
          text: "text-[#6b76aa]",
          bg: "bg-[#6b76aa]",
        },
      },
    },
    {
      message: {
        value: "message 1",
        time: "20:12",
      },
      user: {
        name: "Emma James ",
        avatar: avatar4,
        id: 4,
        color: {
          text: "text-[#6b76aa]",
          bg: "bg-[#6b76aa]",
        },
      },
    },
    {
      message: {
        value: "message 1",
        time: "09:12",
      },
      user: {
        name: "Admin",
        avatar: avatar1,
        id: 1,
        color: {
          text: "text-[#97b3dd]",
          bg: "bg-[#97b3dd]",
        },
      },
    },
    {
      message: {
        value: "message 1",
        time: "20:12",
      },
      user: {
        name: "Emma James ",
        avatar: avatar4,
        id: 4,
        color: {
          text: "text-[#6b76aa]",
          bg: "bg-[#6b76aa]",
        },
      },
    },
    {
      message: {
        value: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis veniam
        magni quae dolor deserunt..`,
        time: "19:12",
      },
      user: {
        name: "Mohamed Farag",
        avatar: avatar3,
        id: 3,
        color: {
          text: "text-[#43507f]",
          bg: "bg-[#43507f]",
        },
      },
    },
    {
      message: {
        value: "message 1",
        time: "20:12",
      },
      user: {
        name: "Emma James ",
        avatar: avatar4,
        id: 4,
        color: {
          text: "text-[#6b76aa]",
          bg: "bg-[#6b76aa]",
        },
      },
    },
    {
      message: {
        value: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis veniam
        magni quae dolor deserunt..`,
        time: "20:12",
      },
      user: {
        name: "Emma James ",
        avatar: avatar4,
        id: 4,
        color: {
          text: "text-[#6b76aa]",
          bg: "bg-[#6b76aa]",
        },
      },
    },
  ];
  return (
    <div className="grid grid-cols-5 grid-rows-[auto_minmax(0px_,1fr)] gap-4 pt-4">
      <Search value={value} />
      <div className="col-span-4" />
      <Contact search={search} />
      <Chat messages={messages} params={params} />
    </div>
  );
};

export default Wrapper;
