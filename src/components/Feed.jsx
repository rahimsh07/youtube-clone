import React, { useEffect, useContext } from "react";

import { Context } from "../context/contextApi";
import LeftNav from "./LeftNav";
import VideoCard from "./VideoCard";

const Feed = () => {
  const { loading, searchResults } = useContext(Context);

  useEffect(() => {
    document.getElementById("root").classList.remove("custom-h");
  }, []);

  return (
    <div className="flex flex-row h-[calc(100%-70px)]">
      <LeftNav />
      <div className="grow w-[calc(100%-260px)] md:w-[calc(100%-95px)] h-full overflow-y-auto bg-black/[0.95]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:gird-cols-4 gap-4 md:gap-6 p-5">
          {!loading &&
            searchResults?.map((item) => {
              if (item.type !== "video") return false;
              return (
                <VideoCard key={item?.video?.videoId} video={item?.video} />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Feed;
