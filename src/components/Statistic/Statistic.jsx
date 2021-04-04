import ProtoType from "prop-types";

const Statistic = ({ good, neutral, bad, total, positivFeedback }) => {
  return (
    <>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>Positiv feedback: {positivFeedback} %</p>
    </>
  );
};

export default Statistic;

Statistic.prototype = {
  good: ProtoType.number.isRequired,
  neutral: ProtoType.number.isRequired,
  bad: ProtoType.number.isRequired,
  total: ProtoType.number.isRequired,
  positivFeedback: ProtoType.number.isRequired,
};
