import ProtoType from "prop-types";
import scss from "./FeedbackOptions.module.scss";
import shortid from "shortid";

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      {options.map((option) => (
        <button
          key={shortid.generate()}
          className={scss.button}
          type="button"
          name={option}
          onClick={onLeaveFeedback}
        >
          {option}
        </button>
      ))}
    </>
  );
};

export default FeedbackOptions;

FeedbackOptions.prototype = {
  options: ProtoType.array.isRequired,
  onLeaveFeedback: ProtoType.func.isRequired,
};
