import { useContext } from "react";
import { CustomIconsContext } from "../../App";
import ArrowLeftIcon from "../../assets/ArrowLeftIcon";
import useConvoStack from "../../hooks/useConvoStack";

interface HeaderProps {
  id: string;
}

const Header: React.FC<HeaderProps> = ({ id }) => {
  const icons = useContext(CustomIconsContext);
  const { styling, setActiveConversationId } = useConvoStack();
  return (
    <div className="w-full">
      <div
        className={`w-full h-14 ${
          styling?.headerColor || "bg-blue-gradient"
        } flex flex-wrap items-center py-4`}
      >
        <div
          className="left-0 hover:cursor-pointer"
          onClick={() => setActiveConversationId(null, undefined, id)}
        >
          {icons?.backArrowIcon || <ArrowLeftIcon className="w-6 h-6 ml-4" />}
        </div>
        <div className="flex mx-auto">
          <p className="font-semibold mx-auto">
            {styling?.headerText || "Convo Stack Chat"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;