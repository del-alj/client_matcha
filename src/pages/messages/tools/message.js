
import {MessageText, FriendImg, MessageTop, MessageBox} from "../style";
export const Message = (props) => {

  const { message, own, photoProfile } = props;
  // const [user, setUser] = useState(null);

  return (
    <MessageBox own={own}>
    <MessageTop>
      <FriendImg
        src={`url(${photoProfile})`}
         alt=""
      />
      <MessageText own={own}>{message.text || message}</MessageText>
    </MessageTop>
  </MessageBox>
  );
};
