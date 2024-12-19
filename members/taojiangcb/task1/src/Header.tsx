
interface Props {
  title: string;
}

const Header = ({ title }: Props) => {
  return (
    <header>
      <h3>{title}</h3>
    </header>
  )
}

export default Header;