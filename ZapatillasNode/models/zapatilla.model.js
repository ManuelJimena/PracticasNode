//Paso 16
const mongoose = require("mongoose");
//Paso 17
const ZapatillaSchema = new mongoose.Schema(
  {
    model: { type: String, required: true, trim: true },
    brand: { type: String, enum: ["Nike", "Adidas"], trim: true},
    image: { type: String, required: true, trim: true },
    size: { type: Number, required: true, trim: true },
    outofstock: { type: Boolean, default: false },
    madein: { type: String, required: false, trim: true },
  },
  {
    timestamps: true,
  }
);
//Paso 18
const Zapatilla = mongoose.model("zapatilla", ZapatillaSchema);
//Paso 19
module.exports = Zapatilla;
