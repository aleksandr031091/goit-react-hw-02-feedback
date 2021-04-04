import ProtoType from "prop-types";
import scss from "./FeedbackOptions.module.scss";

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      <div>
        <button
          className={scss.button}
          type="button"
          name="good"
          onClick={onLeaveFeedback}
        >
          Good
        </button>
        <button
          className={scss.button}
          type="button"
          name="neutral"
          onClick={onLeaveFeedback}
        >
          Neutral
        </button>
        <button
          className={scss.button}
          type="button"
          name="bad"
          onClick={onLeaveFeedback}
        >
          Bad
        </button>
      </div>
    </>
  );
};

export default FeedbackOptions;

FeedbackOptions.prototype = {
  onLeaveFeedback: ProtoType.func.isRequired,
  good: ProtoType.number.isRequired,
  neutral: ProtoType.number.isRequired,
  bad: ProtoType.number.isRequired,
};
