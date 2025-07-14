import { useEffect, useState } from "react";

const ContactItem = ({ children, index }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsMounted(true), 100 * index);

    return () => clearTimeout(timer);
  }, [index]);

  return (
    <div
      className={`
        transition-all duration-500 ease-out
        ${isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
      `}
    >
      {children}
    </div>
  );
};

export default ContactItem;
