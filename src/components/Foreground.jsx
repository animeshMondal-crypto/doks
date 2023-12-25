import { useRef } from "react";
import Card from "./Card";

function Foreground() {
  const ref = useRef(null);

  const items = [
    {
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing.",
      fileSize: ".9mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Lorem, ipsum.", tagColor: "green" },
    },
    {
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing.",
      fileSize: ".9mb",
      close: false,
      tag: { isOpen: false, tagTitle: "Lorem, ipsum.", tagColor: "blue" },
    },
    {
      desc: "Lorem, ipsum amet amet consectetur adipisicingamet ametamet amet.",
      fileSize: ".8mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Lorem, ipsum.", tagColor: "blue" },
    },
    {
      desc: "Lorem, ipsum amet amet consectetur adipisicingamet ametamet amet.",
      fileSize: ".8mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Lorem, ipsum.", tagColor: "blue" },
    },
  ];
  return (
    <div
      ref={ref}
      className="fixed top-0 left-0 w-full h-full z-[3] flex gap-10 p-10 flex-wrap"
    >
      {items.map((item, index) => (
        <Card data={item} key={index} reference={ref} />
      ))}
    </div>
  );
}

export default Foreground;
