import { StikyDiv } from "../style";

export const StikyUser = (props) => {
  const { userName } = props;

  return (
    <StikyDiv>
      <div className="chatOnlineWrapper">
        <p>{userName}</p>
      </div>
    </StikyDiv>
  );
};
