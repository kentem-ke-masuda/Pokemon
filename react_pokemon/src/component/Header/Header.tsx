
const hederStyle = {
    color : "white",
    backgroundColor: "orange",
    width: "100%",
    height:45,
    margin : 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
}

//h1のほうがよい

const Header : React.FC = () => {
    return(
        <header style={hederStyle}>
            <h2>ポケモン図鑑</h2>
        </header>
    )
}
export default Header