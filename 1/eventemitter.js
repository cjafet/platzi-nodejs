let events = require("events");
let myEmitter = new events.EventEmitter();

myEmitter.on("product_sold", () => {
    console.log("Produto vendido");
});

myEmitter.emit("product_sold");