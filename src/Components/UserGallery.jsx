import UserCard from './UserCard/UserCard'

const galleryStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    paddingTop: '50px'
}

export default function UserGallery() {
    return (
        <div style={galleryStyle}>
            <UserCard />
            <UserCard />
            <UserCard />
            <UserCard />
        </div>
    )
}