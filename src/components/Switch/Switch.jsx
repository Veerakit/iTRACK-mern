import Switch from '@mui/material/Switch';

const Switche = ({ toggleTheme, theme }) => {
  return (
    <div className = "switcher">
      <Switch defaultChecked onChange={toggleTheme} checked={theme === "dark"} />
    </div>
  );
}

export default Switche;  