import icon from "../../assets/img/notificationicon.svg"
import "./styles.css"

function NotificationButton() {
  return (
    <div className="btn-red">
      <img src={icon} alt="Notificar" />
    </div>
  );
}

export default NotificationButton;
