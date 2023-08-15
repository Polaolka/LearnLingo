import { MessageStyled } from "./Message.styled";
import { IoWarningOutline } from "react-icons/io5";

const Message = ({ type, children }) => {
  return (
    <MessageStyled>
      <div>
        {type === "error" && <IoWarningOutline />}
        {children}
      </div>
    </MessageStyled>
  );
};

export default Message;
