/* eslint-disable react/prop-types */
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoIosClose } from "react-icons/io";
import { motion } from "framer-motion";

function Card({ data, reference }) {
  return (
    <motion.div
      drag
      dragConstraints={reference}
      whileDrag={{ scale: 1.1 }}
      dragElastic={0.1}
      dragTransition={{ bounceStiffness: 100, bounceDamping: 30 }}
      className="relative w-60 h-72 rounded-[45px] bg-zinc-300 px-8 py-10 overflow-hidden"
    >
      <FaRegFileAlt />
      <p className="mt-5 text-sm leading-tight font-semibold">{data.desc}</p>
      <div className="footer absolute bottom-0 w-full left-0">
        <div className="flex items-center justify-between py-3 px-8 mb-5">
          <h5>{data.fileSize}</h5>
          <span className="w-7 h-7 rounded-full bg-zinc-800 flex justify-center items-center">
            {data.close ? (
              <IoIosClose size=".7em" color="#fff" />
            ) : (
              <LuDownload size=".7em" color="#fff" />
            )}
          </span>
        </div>
        {data.tag.isOpen && (
          <div
            className={`tag w-full ${
              data.tag.tagColor == "green" ? "bg-green-600" : "bg-blue-600"
            } py-4 flex items-center justify-center`}
          >
            <h3 className="text-sm font-semibold text-zinc-300">
              {data.tag.tagTitle}
            </h3>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default Card;
