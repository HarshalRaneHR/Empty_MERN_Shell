import ErrorHandler from "../error/error.js";
import { reservation } from "../models/reservationSchema.js";

export const sendReservation = async (req, res, next) => {
  const { firstName, lastName, email, phone, time, date } = req.body;
  if (!firstName || !lastName || !email || !phone || !time || !date) {
    return next(new ErrorHandler("Please fill full details!", 400));
  }
  try {
    await reservation.create(firstName, lastName, email, phone, time, date);
    res
      .status(200)
      .json({ status: true, message: "Details sent successfully!" });
  } catch (error) {
    if (error.name === "ValidationError") {
      const validationErrors = Object.values(error.errors).map(
        (err) => err.message
      );
      return next(new ErrorHandler(validationErrors.join(" , "), 400));
    }
  }
};
