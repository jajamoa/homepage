import resso from "resso";

export const stateStore = resso({
  page: 18,
  nextPage: () => {
    stateStore.page++;
    if (stateStore.page > stateStore.maxPage)
      stateStore.maxPage = stateStore.page;
  },
  prevPage: () => stateStore.page--,
  setPage: (pageIndex) => {
    stateStore.page = pageIndex;
    if (stateStore.page > stateStore.maxPage)
      stateStore.maxPage = stateStore.page;
  },
});
