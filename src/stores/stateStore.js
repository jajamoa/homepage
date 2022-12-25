import resso from "resso";
import ContentMenu from "../components/Router/ContentMenu.js";

const getPage = () => {
  //   console.log(window.location.pathname);
  for (let k in ContentMenu) {
    // console.log(window.location.pathname, ContentMenu[k]["path"]);
    if (window.location.pathname == ContentMenu[k]["path"]) return k;
  }
  return 0;
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
  },
  updatePage: () => {
    stateStore.page = getPage();
  },
  isMobile: false,
  setIsMobile: (isMobile) => {
    stateStore.isMobile = isMobile;
  },
  //   isMobileNavActive: false,
  //   setIsMobileNavActive: (isActive) => {
  //     stateStore.isMobileNavActive = isActive;
  //   },
});
