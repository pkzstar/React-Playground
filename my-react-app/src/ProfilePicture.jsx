// ProfilePicture.jsx

function ProfilePicture() {

    const imgUrl = 'https://media.tenor.com/tMsO0UzVe5YAAAAi/pikachu-danse.gif'

    const handleClick = (e) => e.target.style.display = "flex";
    return(<img onClick={(e) => handleClick(e)} src={imgUrl}></img>);
}

export default ProfilePicture