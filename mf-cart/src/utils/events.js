export const eventsToListen = {
  HOST_THEME_CHANGED: 'HOST_THEME_CHANGED'
  // HOST_ROCC_NAV_CLICKED
};

export const eventsToDispatch = {
  CART_MF_PRODUCT_DELETED: 'CART_MF_PRODUCT_DELETED'
  // SELFSERV_MF_TILE_CLICKED
};

const dispatchEvent = (event, data) => window.dispatchEvent(new CustomEvent(event, { detail: data }));

export default dispatchEvent;
