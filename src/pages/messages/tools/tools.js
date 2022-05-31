export const updateConversationStatus = (
  conversations,
  setConversations,
  roomId,
  status
) => {
  const newConversations = [...conversations];
  const temp = newConversations?.map((elem) => {
    if (elem?.conversation_id === roomId) {
      elem = { ...elem, status: status };
    }
    return elem;
  });
  setConversations(temp);
};

export const updateSenderConversationStatus = (
  conversations,
  setConversations,
  userId,
  status
) => {
  const newConversations = [...conversations]

  const temp =  newConversations?.map((elem) => {
    if (elem?.is_sender == userId) {
      elem = { ...elem, status: status };
    }
    return elem;
  });  

  console.log("<>", temp)
  setConversations(temp);
};
