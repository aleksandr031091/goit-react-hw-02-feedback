import ProtoType from "prop-types";

const Message = ({ message }) => <p>{message}</p>;

export default Message;

Message.prototype = {
  message: ProtoType.string.isRequired,
};
