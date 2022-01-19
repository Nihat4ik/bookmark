export const setActive = (id) => {
  return {
    type: "SET_ACTIVE",
    payload: id,
  };
};

export const toggleOpen = () => {
  return { type: "TOGGLE_OPEN" };
};

export const toggleMenu = () => {
  return { type: "TOGGLE_MENU" };
};
