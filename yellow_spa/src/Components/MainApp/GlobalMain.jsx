import React, {useLayoutEffect} from "react";
import styled from "styled-components";
import RainbowTitle from "./RainbowTitle";
import GlobalCard from "./GlobalCard";
import InfiniteScroll from "react-infinite-scroll-component";
import { useDispatch, useSelector } from "react-redux";
import { getAllGames, setPage } from "../../Redux/gameReducer";
import useToggle from "../../hooks/useToggle";

const GlobalMainWrapper = styled.main``;

function GlobalMain({pageSize}) {
  const [layoutEffectTrigger, toggleLayoutEffectTrigger] = useToggle(false)

  const {
    gamesList,
    count,
    isEndOfList,
    searchInput,
    page,
    selectedPlatform,
    selectedSort,
  } = useSelector((state) => state.game);

  const dispatch = useDispatch();

  useLayoutEffect(() => {
    dispatch(getAllGames({ page, pageSize, search: searchInput }));
    dispatch(setPage(page + 1));
  }, [dispatch, searchInput, selectedPlatform, selectedSort,layoutEffectTrigger]);


  return (
    <GlobalMainWrapper>
      <InfiniteScroll
        dataLength={gamesList.length}
        next={toggleLayoutEffectTrigger}
        hasMore={!isEndOfList}
        loader={
          <RainbowTitle text={count < 1 ? "Games not found" : "Loading..."} />
        }
        endMessage={<RainbowTitle text={"🚧 END OF LIST 🚧"} />}>
        <GlobalCard />
      </InfiniteScroll>
    </GlobalMainWrapper>
  );
}

export default GlobalMain;
