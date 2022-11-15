import { Link, useHistory, useParams } from 'react-router-dom';
import {
  carBookingConfirm,
  carBookingInspection,
  carBookingUpload,
} from '@services/booking/booking';
import { useEffect, useState } from 'react';
import { BOOKING_FINISH } from '@navigation/CONSTANTS';

const BookingInspectionView = () => {
  const { id } = useParams();
  const history = useHistory();

  const [selectedFiles, setSelectedFiles] = useState([]);

  useEffect(() => {
    carBookingInspection(id);
  }, []);

  const changeHandler = (event) => {
    setSelectedFiles([...selectedFiles, event.target.files[0]]);
    const fileBooking = new FormData();
    fileBooking.append('file', event.target.files[0]);
    carBookingUpload(id, fileBooking);
  };

  const deleteFile = (name) => {
    setSelectedFiles(selectedFiles.filter((file) => file.name !== name));
  };

  const renderFiles = selectedFiles.map((file) => {
    return (
      <div key={file.name} className="mt-2">
        <p className="flex justify-between">
          {file.name}
          <button onClick={() => deleteFile(file.name)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>
        </p>
      </div>
    );
  });
  const confirmBooking = () => {
    carBookingConfirm(id);
    carBookingInspection(id, { inspection: false });
    history.push(`${BOOKING_FINISH.replace(':id', id.toString())}`);
  };
  return (
    <>
      <div className="flex flex-col	justify-between	h-5/6">
        <div className="content">
          <h2 className="mt-2 mb-2">Произведите осмотр авто</h2>
          <p className="text-xs">
            Проверьте автомобиль на отсутствие повреждений, в случае обнаружения
            недостатков авто нажмите вознилка проблема.
          </p>
        </div>
        <div className="files relative mt-4	">
          <label className="flex">
            <h2>Прикрепить файлы</h2>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
              />
            </svg>
            <input
              type="file"
              className="absolute hidden w-full h-full z-10"
              onChange={changeHandler}
            />
          </label>
          <div className="filex-info max-h-52	overflow-y-scroll">
            {renderFiles}
          </div>
        </div>
        <div className="rules-button mt-4">
          <Link
            to="/transfer/certificate"
            className="
              	w-full
								py-2
								bg-white
								font-light
								rounded-xl
								text-sm
								mt-4
								flex
								justify-center
								items-center
								uppercase
							">
            Возникла проблема
          </Link>
          <button
            className="bg-button-blue-color
								w-full
								py-4
								text-white
								font-light
								text-md
								rounded-2xl
								mt-4
							"
            onClick={confirmBooking}>
            Все в порядке, в путь
          </button>
          <Link
            to="/transfer/certificate"
            className="
              	w-full
								py-2
								bg-white
								font-light
								rounded-xl
								text-sm
								mt-4
								flex
								justify-center
								items-center
								uppercase
							">
            Отмена
          </Link>
        </div>
      </div>
    </>
  );
};
export default BookingInspectionView;
