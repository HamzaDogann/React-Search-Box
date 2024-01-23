const user = {
    name: "Hamza Dogan",
    age: 19,
    salary: 35000,
    job: "Software Developer",
    imgUrl: 'https://i.imgur.com/KJy9izI.jpeg',
    imgSize: 200
};

export default function Profile() {
    return (
        <>
            <h1>{user.name}, {user.age} yaşında {user.salary} TL maaş alan bir {user.job}'dir.</h1>
            <img
                className="avatar"
                src={user.imgUrl}
                alt={'Photo of' + user.name}
                style={{
                    width: user.imgSize,
                    height: user.imgSize
                }}
            />
        </>
    );
}