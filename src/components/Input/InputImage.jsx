import { forwardRef } from "react";
import { CloseIcon } from "../icon";

const InputImage = forwardRef(
  (
    {
      name,
      label,
      type = "text",
      placeholder = "",
      className = "",
      required = false,
      disabled = false,
      value = "",
      setImage,
      accept = "image/*",
      ...rest
    },
    ref
  ) => {
    const handleImageChange = (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setImage(reader.result);
        };
        reader.readAsDataURL(file);
      }
    };

    return (
      <div className="space-y-1">
        <label className="block text-sm font-medium text-gray-700">
          تصویر (اختیاری)
        </label>
        <div className="flex items-center gap-4">
          <label className="flex-1 cursor-pointer hover:scale-[1.01] transition-transform duration-200">
            <input
              type="file"
              accept="image/*"
              onChange={(e) => handleImageChange(e)}
              ref={ref}
              className="hidden"
            />
            <div className="input w-full px-4 py-3 rounded-lg border border-gray-300 transition-all duration-200 text-center">
              {value ? "تغییر عکس" : "انتخاب عکس"}
            </div>
          </label>
          {value && (
            <div className="relative animate-scale-in">
              <img src={value} alt="Preview" className="avatar" />
              <button
                type="button"
                onClick={() => setImage(null)}
                className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition-all duration-200 hover:scale-110"
              >
                <CloseIcon />
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }
);

export default InputImage;
