const ContactAvatar = ({ name, image }) => {
  return (
    <div className="relative group">
      {image ? (
        <img
          src={image}
          alt="avatar"
          className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-md group-hover:rotate-6 transition-transform duration-300"
        />
      ) : (
        <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-400 to-indigo-500 flex items-center justify-center text-white text-2xl font-bold shadow-md group-hover:rotate-6 transition-transform duration-300">
          {name[0]}
        </div>
      )}
    </div>
  );
};

export default ContactAvatar;
