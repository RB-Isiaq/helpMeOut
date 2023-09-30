import Permission from "../../components/Permission/Permission";
import RecordModal from "../../components/RecordModal/RecordModal";
import Recorder from "../../components/Recorder/Recorder";

const Record = () => {
  return (
    <div className="w-full flex flex-col gap-[56px] bg-[#F4F6F8] ">
      <Permission />
      <RecordModal />
      <Recorder />
    </div>
  );
};

export default Record;
