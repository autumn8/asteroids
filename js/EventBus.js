let topics = {};

export var EventBus = {

  subscribe(topic, listener) {
    if(!topics[topic]) topics[topic] = [];
    topics[topic].push(listener);
  },

  publish(topic, data) {
    if(!topics[topic] || topics[topic].length < 1) return;
    for (let listener of topics[topic]) {
      listener(data || {});
    }
  }
};