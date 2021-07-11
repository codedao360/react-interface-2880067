import { BiTrash } from "react-icons/bi"
import { RiDeleteBin2Fill } from "react-icons/ri";
import { BsFillPeopleFill } from "react-icons/bs";

const AppointmentInfo = ({ appointment, onDeleteAppointment }) => {
  return (
    <li className="px-3 py-3 flex items-start">
      <button onClick={() => onDeleteAppointment(appointment.id)} type="button"
        className="p-1.5 mr-1.5 mt-1 rounded text-white bg-red-400 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
        <RiDeleteBin2Fill /></button>
      <div className="flex-grow">
        <div className="flex items-center">
          <span className="flex-none font-medium text-2xl text-blue-500">{appointment.petName}</span>
          <span className="flex-grow text-right">{appointment.aptDate}</span>
        </div>
        <div><BsFillPeopleFill /><b className="font-bold text-blue-500">Chủ sở hữu:</b> {appointment.ownerName}</div>
        <div className="leading-tight">{appointment.aptNotes}</div>
      </div>
    </li>
  )
}

export default AppointmentInfo
