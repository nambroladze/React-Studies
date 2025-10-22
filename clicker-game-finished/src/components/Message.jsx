function Message({ count }) {
  let message = "Start clicking to see your progress!";
  if (count >= 5 && count < 10) message = "Nice work! 👏";
  else if (count >= 10 && count < 20) message = "You're on fire! 🔥";
  else if (count >= 20) message = "Okay chill 😅";

  return <p>{message}</p>;
}

export default Message;
