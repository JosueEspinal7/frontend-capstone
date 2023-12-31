import { useState } from 'react';
import { formatDate } from '../utils/formatDate';

const BookingForm = ({ availableTimes, dispatch, onSubmit }) => {
  const formattedTodayDate = formatDate(new Date());
  const [date, setDate] = useState(formattedTodayDate);
  const [time, setTime] = useState('17:00');
  const [guestsNumber, setGuestsNumber] = useState('1');
  const [occasion, setOccasion] = useState('birthday');
  const reservationDateId = 'res-date';
  const reservationTimeId = 'res-time';
  const guestsId = 'guests';
  const occasionId = 'occasion';
  const mapInputNameToSetState = {
    [reservationDateId]: (value) => {
      setDate(value);
      dispatch({
        type: 'update',
        payload: new Date(value + 'T00:00:00'),
      });
    },
    [reservationTimeId]: setTime,
    [guestsId]: setGuestsNumber,
    [occasionId]: setOccasion,
  };
  const isButtonDisabled =
    Number(guestsNumber) < 1 ||
    new Date(date + 'T00:00:00') < new Date(formattedTodayDate + 'T00:00:00');
  const formData = {
    date,
    time,
    guestsNumber,
    occasion,
  };

  const handleChange = (e) => {
    mapInputNameToSetState[e.target.id](e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: 'grid',
        maxWidth: '200px',
        gap: '20px',
        margin: '0 auto',
        color: 'white',
      }}
    >
      <label htmlFor='res-date'>Choose date</label>
      <input
        value={date}
        min={formattedTodayDate}
        onChange={handleChange}
        type='date'
        id={reservationDateId}
      />
      <label htmlFor='res-time'>Choose time</label>
      <select value={time} onChange={handleChange} id={reservationTimeId}>
        {availableTimes?.map((availableTime) => (
          <option key={availableTime} value={availableTime}>
            {availableTime}
          </option>
        ))}
      </select>
      <label htmlFor='guests'>Number of guests</label>
      <input
        value={guestsNumber}
        onChange={handleChange}
        type='number'
        placeholder='1'
        min='1'
        max='10'
        id={guestsId}
      />
      <label htmlFor='occasion'>Occasion</label>
      <select value={occasion} onChange={handleChange} id={occasionId}>
        <option value='birthday'>Birthday</option>
        <option value='anniversary'>Anniversary</option>
      </select>
      <input
        disabled={isButtonDisabled}
        type='submit'
        value='Make Your reservation'
        style={{ backgroundColor: 'white', color: 'black' }}
      />
    </form>
  );
};

export default BookingForm;