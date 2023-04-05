const reqEvent = event => require(`../events/${event}`);//SentRise was here 
module.exports = client => {
  client.on("message", reqEvent("message"));//SentRise was here 
};
