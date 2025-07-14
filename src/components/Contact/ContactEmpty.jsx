import { PeopleIcon } from "../icon";

export const ContactEmpty = () => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 text-center animate-pulse">
      <div className="text-gray-400 mb-4">
        <PeopleIcon />
      </div>
      <h3 className="text-xl font-medium text-gray-700">لیست مخاطبین خالی است</h3>
      <p className="text-gray-500 mt-1">مخاطب جدید اضافه کنید</p>
    </div>
  );
};
