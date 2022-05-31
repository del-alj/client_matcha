import { MessageText, FriendImg, MessageTop, MessageBox } from "../style";

export const Message = (props) => {
  const { message, own, photoProfile } = props;

  // const [user, setUser] = useState(null);
  return (
    <MessageBox own={own}>
      <MessageTop>
        <MessageText own={own}>{message}</MessageText>
      </MessageTop>
    </MessageBox>
  );
};
