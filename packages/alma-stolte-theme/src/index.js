import Theme from "./components";

const AlmaStolteTheme = {
}

export default {
  
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
      }
    }
  }
};

