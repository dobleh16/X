// script/featureFlags.js
const growthbook = new window.growthbook.GrowthBook({
    apiHost: "https://cdn.growthbook.io",
    clientKey: "sdk-6wkeXmLiou66SMdB",
    enableDevMode: true,
    trackingCallback: (experiment, result) => {
      console.log("Viewed Experiment", {
        experimentId: experiment.key,
        variationId: result.key
      });
    },
  });
  
  export default growthbook;
  