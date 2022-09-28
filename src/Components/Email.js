import Styles from "../Styles/Email.module.css";

export default function Email() {
  return (
    <>
      <aside className={Styles.LeftSidePanel}>
        <div className={Styles.Email}>
          <a href="mailto:fernandezjw07@gmail.com">fernandezjw07@gmail.com </a>
        </div>
      </aside>

      <aside className={Styles.RightSidePanel}>
        <div className={Styles.Contacts}></div>
      </aside>
    </>
  );
}
