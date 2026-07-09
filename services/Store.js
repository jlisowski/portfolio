const Store = {
  data: null,
};

//proxy used to trap changes to our Store state variable and dispatch events
const proxiedStore = new Proxy(Store, {
  set(target, property, value) {
    target[property] = value;
    if (property == "data") {
      window.dispatchEvent(new Event("appviewchange"));
    }
    return true;
  },
});

export default proxiedStore;
