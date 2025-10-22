export default function Message({ count }) {
  let message = "Start clicking to see your progress";

  if (count >= 5) {
    message = "dope work !";
  }

  if (count >= 10) {
    message = "you can do better!";
  }

  if (count >= 20) {
    message = "do better bruh";
  }

  return <p>{message}</p>;
}
