export default {
    toggleSections(state) {
        state.tshirtsOn = !state.tshirtsOn;
        state.hoodiesOn = !state.hoodiesOn;
    },
    openTshirtsSection(state) {
        state.tshirtsOn = true;
        state.hoodiesOn = false;
    },
    openHoodiesSection(state) {
        state.hoodiesOn = true;
        state.tshirtsOn = false;
    }
}