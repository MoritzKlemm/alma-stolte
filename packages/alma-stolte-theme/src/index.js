import Theme from "./components";

const AlmaStolteTheme = {
  name: "alma-stolte-theme",
  roots: {
    theme: Theme
  },
  state: {
    theme: {
      isMenuOpen: false 
    }
  },
  actions: {
    theme: {
      openMenu: ({state}) => {
        state.theme.isMenuOpen = true;
      },
      closeMenu: ({ state }) => {
        state.theme.isMenuOpen = false;
      },
      getPreviousScrollPosition: ({ state }) => {
        state.theme.frontity.scroll = window.pageYOffset;
      }, 
  
      setScrollPosition: ({latestScrollPosition}) => {
        state.theme.frontity.scroll = latestScrollPosition;
      }
    }
  }
}
export default AlmaStolteTheme;


