export default {
  toggleSections(state) {
    state.tshirtsOn = !state.tshirtsOn;
    state.hoodiesOn = !state.hoodiesOn;
  },
  openTshirtsSection(state) {
    state.tshirtsOn = true;
    state.hoodiesOn = false;
    console.log("done");
  },
  openHoodiesSection(state) {
    state.hoodiesOn = true;
    state.tshirtsOn = false;
  },
  exitBoth(state) {
    state.hoodiesOn = false;
    state.tshirtsOn = false;
  },
};
