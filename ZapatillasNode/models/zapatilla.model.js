const mongoose = require("mongoose");

const ZapatillaSchema = new mongoose.Schema(
  {
    model: { type: String, required: true },
    brand: { type: String, enum: ["Nike", "Adidas"] },
    image: { type: String, required: true },
    size: { type: Number, required: true },
    outofstock: { type: Boolean, default: false },
    madein: { type: String, required: false },
  },
  {
    timestamps: true,
  }
);

const Zapatilla = mongoose.model("zapatilla", ZapatillaSchema);

module.exports = Zapatilla;
