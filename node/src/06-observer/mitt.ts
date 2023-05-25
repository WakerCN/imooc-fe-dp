import mitt from "mitt";

const emitter = mitt();

emitter.on("change", () => {
  console.log("change1");
});

emitter.on("change", () => {
  console.log("change2");
});

emitter.emit("change");

emitter.off('change')