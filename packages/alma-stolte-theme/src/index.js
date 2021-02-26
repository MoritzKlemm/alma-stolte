import Theme from "./components";

const AlmaStolteTheme = {
  name: "alma-stolte-theme",
  roots: {
    theme: Theme
  },
  state: {
    theme: {
      isMenuOpen: false,
      breakPointXL : 1199,
      breakPointLG : 991,
      breakPointMD : 767,
      breakPointSM : 575,
      breakPointXS : 424,
    }
  },
  actions: {
    theme: {
      openMenu: ({ state }) => {
        state.theme.isMenuOpen = true;
      },
      closeMenu: ({ state }) => {
        state.theme.isMenuOpen = false;
      },
      getPreviousScrollPosition: ({ state }) => {
        state.theme.frontity.scroll = window.pageYOffset;
      },

      setScrollPosition: ({ latestScrollPosition }) => {
        state.theme.frontity.scroll = latestScrollPosition;
      }
    }
  }
}
export default AlmaStolteTheme;


