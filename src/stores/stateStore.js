import resso from "resso";
import ContentMenu from "../components/Router/ContentMenu.js";

const getPage = () => {
  //   console.log(window.location.pathname);
  Object.keys(ContentMenu).forEach((k) => {
    console.log(window.location.pathname, ContentMenu[k]["path"]);
    if (window.location.pathname == ContentMenu[k]["path"]) return k;
  });
  return 18;
};

export const stateStore = resso({
  page: getPage(),
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
