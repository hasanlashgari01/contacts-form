import { useRef, useState } from "react";
import { useContact } from "../context/ContactContext";
import { useUser } from "../context/UserContext";
import { ACTIONS } from "../reducers/contact-reducer";
import { CirclePlusIcon, PenIcon } from "./icon";
import Input from "./Input/Input";
import InputImage from "./Input/InputImage";
import { Button, LoadingText } from "./Button";

const Form = () => {
  const { state, dispatch } = useContact();
  const { name, setName, phone, setPhone, image, setImage } = useUser();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const isEditing = state.editId !== null;

  const fileInputRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !phone) return;

    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 300));

    const contactData = {
      id: isEditing ? state.editId : Date.now(),
      name,
      phone,
      image: image || (isEditing ? state.contacts.find((c) => c.id === state.editId)?.image : null),
    };

    dispatch({
      type: isEditing ? ACTIONS.EDIT : ACTIONS.ADD,
      payload: contactData,
    });

    resetForm(fileInputRef);
    setIsSubmitting(false);
  };

  const cancelEdit = () => {
    dispatch({ type: ACTIONS.SET_EDIT, payload: null });
    resetForm();
  };

  const resetForm = () => {
    setName("");
    setPhone("");
    setImage(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <form onSubmit={(e) => handleSubmit(e, fileInputRef)} className="box">
      <div className="space-y-5">
        <Input
          label="نام"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="نام مخاطب"
        />
        <Input
          type="tel"
          label="شماره تلفن"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="شماره تلفن"
          className="placeholder:text-right"
        />
        <InputImage
          type="file"
          label="تصویر"
          className="hidden"
          ref={fileInputRef}
          value={image}
          setImage={setImage}
        />

        <div className="flex gap-3 pt-2">
          <Button
            type="submit"
            disabled={isSubmitting}
            className={`bg-gradient-to-r from-indigo-600 to-blue-600 ${
              isSubmitting ? "opacity-75" : "hover:scale-[1.02]"
            }`}
          >
            {isEditing ? (
              <LoadingText
                text="ویرایش مخاطب"
                loadingText="در حال ویرایش..."
                isLoading={isSubmitting}
              >
                <PenIcon />
              </LoadingText>
            ) : (
              <LoadingText
                text="افزودن مخاطب"
                loadingText="در حال افزودن..."
                isLoading={isSubmitting}
              >
                <CirclePlusIcon />
              </LoadingText>
            )}
          </Button>

          {isEditing && (
            <Button
              type="button"
              onClick={cancelEdit}
              className=" bg-gray-500 hover:bg-gray-600 hover:scale-[1.02]"
            >
              انصراف
            </Button>
          )}
        </div>
      </div>
    </form>
  );
};

export default Form;
