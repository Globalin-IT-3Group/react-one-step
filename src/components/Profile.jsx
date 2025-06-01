function Profile() {
  return (
    <div
      className="w-[1228px] h-[300px] mx-auto
    flex items-center justify-between "
    >
      <h1 className="text-[50px] font-bold">
        Hi 🐧, <br />
        私は{" "}
        <span className="bg-gradient-to-r from-[#5398FF] to-[#925CFF] bg-clip-text text-transparent font-bold">
          ピングー
        </span>
        です! <br />
        よろしくね～✌️
      </h1>
      <div
        className="p-[10px] rounded-full 
      bg-gradient-to-r from-[#FFC0C2] to-[#F6F1B5]"
      >
        <img
          src="/Pingu-Profile.png"
          alt="Profile"
          className="w-[280px] h-[280px] rounded-full object-cover"
        />
      </div>
    </div>
  );
}
export default Profile;
