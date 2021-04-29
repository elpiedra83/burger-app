import headerBg from "../../assets/meals.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>React Meals</h1>
        <HeaderCartButton
          type="button"
          label="Cart"
          onClick={props.onToggleCart}
          amount="3"
        />
      </header>
      <div className={classes["main-image"]}>
        <img src={headerBg} alt="all the meals in the header background"></img>
      </div>
    </>
  );
};

export default Header;
