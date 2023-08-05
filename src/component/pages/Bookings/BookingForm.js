import { useState } from "react";
import FormField from "./FormField";

const BookingForm = ({ availableTimes, dispatchOnDateChange, submitData }) => {
    const minimumDate = new Date().toISOString().split("T")[0];
    const defaultTime = availableTimes[0];
    const minimumNumberOfGuest = 1;
    const maximumNumberOfGuest = 10;
    const occasions = ["Birthday", "Anniversary"];
    const invalidDateErrorMessage = "Yang bener masukin informasinya mhemhek";
    const invalidTimerErrorMessage = "Yang bener masukin informasinya mhemhek";
    const invalidOccasionErrorMessage = "Yang bener masukin informasinya mhemhek";
    const invalidNumberofGuestsErrorMessage = "Yang bener masukin informasinya mhemhek";

    const [date, setDate] = useState(minimumDate);
    const [time, setTime] = useState(defaultTime);
    const [numberOfGuest, setNumberOfGuest] = useState(minimumNumberOfGuest);
    const [ocassion, setOcasion] = useState(occasions[0]);

    const isDateValid = () => date !== "";
    const isTimeValid = () => time !== "";
    const isNumberOfGuestsValid = () => numberOfGuest !== "";
    const isOccasionValid = () => ocassion !== "";

    const areAllFieldsValid = () =>
        isDateValid() &&
        isTimeValid() &&
        isNumberOfGuestsValid() &&
        isOccasionValid();

    const handleDateChange = (e) => {
        setDate(e.target.value);
        dispatchOnDateChange(e.target.value);
    };

    const handleTimeChange = (e) => {
        setTime(e.target.value);
    }

    const handleOcasionChange = (e) => {
        setOcasion(e.target.value);
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        submitData({ date, time, numberOfGuest, ocassion });
    };

    return (
        <form onSubmit={handleFormSubmit}>
            <FormField
                label="Date"
                htmlFor="booking-date"
                hasError={!isDateValid()}
                errorMessage={invalidDateErrorMessage}>
                <input
                    type="date"
                    id="booking-date"
                    name="booking-date"
                    min={minimumDate}
                    value={date}
                    required={true}
                    onChange={handleDateChange}
                />
            </FormField>
            <FormField
                label="Time"
                htmlFor="booking-time"
                hasError={!isTimeValid}
                errorMessage={invalidTimerErrorMessage}
            >
                <select
                    id="booking-tim e"
                    name="booking-time"
                    value={time}
                    required={true}
                    onChange={handleTimeChange}>
                    {availableTimes.map((times) =>
                        <option data-testid="booking-time-option" key={times}>
                            {times}
                        </option>)}
                </select>
            </FormField>
            <FormField
                label="Number of Guest"
                htmlFor="booking-numver-guest"
                hasError={!isNumberOfGuestsValid()}
                errorMessage={invalidNumberofGuestsErrorMessage}>
                <input
                    type="number"
                    id="booking-number-guests"
                    name="booking-number-guests"
                    value={numberOfGuest}
                    min={minimumNumberOfGuest}
                    max={maximumNumberOfGuest}
                    required={true}
                    onChange={e=>setNumberOfGuest(e.target.value)}
                />
            </FormField>
            <FormField
                label="Occasion"
                htmlFor="booking-occasion"
                hasError={!isOccasionValid()}
                errorMessage={invalidOccasionErrorMessage}
            >
                <select
                    id="booking-occasion"
                    name="booking-occasion"
                    value={ocassion}
                    required={true}
                    onChange={handleOcasionChange}
                >
                    {occasions.map((ocassion) => (
                        <option data-testid="booking-occasion-option" key={ocassion}>
                            {ocassion}
                        </option>
                    ))}
                </select>
            </FormField>
            <button
                className="button-primary"
                type="submit"
                disabled={!areAllFieldsValid()}>
                Make your reservation
            </button>
        </form>
    );
};

export default BookingForm;