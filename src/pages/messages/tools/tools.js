
export const updateConversationStatus = (conversations, setConversations, roomId, status) => {
    const newConversations = [...conversations];
    const temp = newConversations?.map((elem) => {
      if (elem?.conversation_id === roomId) {
        console.log("im here for elimin redpoint", elem?.conversation_id, roomId);
        elem = { ...elem, status: status };
      }
      return elem;
    });
    setConversations(temp);
  };
