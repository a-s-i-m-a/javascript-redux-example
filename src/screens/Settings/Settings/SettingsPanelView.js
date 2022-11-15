import React from 'react';
import icon from '@assets/img/Icon.png';
import person from '@assets/svg/Group (1).svg';
import help from '@assets/svg/help.svg';
import star from '@assets/svg/Star.svg';
import o from '@assets/svg/0.svg';
import key from '@assets/svg/key.svg';
import question from '@assets/svg/question.svg';
import Case from '@assets/svg/case.svg';
import instagram from '@assets/svg/instagram.svg';
import vk from '@assets/svg/vk.svg';
import { Link } from 'react-router-dom';
import Header from '@screens/Settings/components/Header';
import { SUPPORT, USER_PROFILE } from '@navigation/CONSTANTS';

const SettingsPanelView = () => {
  return (
    <div className=" flex flex-col m-auto justify-center md:w-2/5 f">
      <div className="mx-5 my-5">
        <Header />
      </div>
      <div className="mx-5 my-5 ">
        <div className="flex justify-between">
          <Link
            to={{
              pathname: USER_PROFILE,
            }}
            className="flex items-center">
            <img src={person} alt="" className="m-4" />
            <p className="leading-3 flex flex-col">
              <span className="pb-1">Имя пользователя </span>
              <span className="text-xs text-gray-400 m-0">
                история, настройка, QR
              </span>
            </p>
          </Link>
          <button>
            <img src={icon} alt="" />
          </button>
        </div>
        <Link to={SUPPORT} className="flex justify-between">
          <div className="flex items-center">
            <img src={help} alt="" className="m-4" />
            <p>Поддержка</p>
          </div>
          <button>
            <img src={icon} alt="" />
          </button>
        </Link>
        <Link to="bonuses" className="flex justify-between">
          <div className="flex items-center">
            <img src={star} alt="" className="m-4" />
            <p className="leading-3 flex flex-col">
              <span className="pb-1"> Бонусы</span>
              <span className="text-xs text-gray-400 m-0">
                промокоды, приглашения
              </span>
            </p>
          </div>
          <button>
            <img src={icon} alt="" />
          </button>
        </Link>
        <Link to="free" className="flex justify-between">
          <div className="flex items-center">
            <img src={o} alt="" className="m-4" />
            <p className="leading-3 flex flex-col">
              <span className="pb-1"> Бесплатные поездки </span>
              <span className="text-xs text-gray-400 m-0">
                реферальная программа
              </span>
            </p>
          </div>
          <button>
            <img src={icon} alt="" />
          </button>
        </Link>
        <Link to="rent" className="flex justify-between">
          <div className="flex items-center">
            <img src={key} alt="" className="m-3 w-5" />
            <p className="leading-3">Долгосрочная аренда</p>
          </div>
          <button>
            <img src={icon} alt="" />
          </button>
        </Link>
        <Link to="questions" className="flex justify-between">
          <div className="flex items-center">
            <img src={question} alt="" className="m-4 " />
            <p>Часто задаваемые вопросы</p>
          </div>
          <button>
            <img src={icon} alt="" />
          </button>
        </Link>
        <div>
          <p className="text-gray-400 uppercase text-xs mt-5 mb-5 ml-4">
            Корпоративным клиентам
          </p>
        </div>
        <Link to="clients" className="flex justify-between">
          <div className="flex items-center">
            <img src={Case} alt="" className="m-4 " />
            <p>Корпоративным клиентам</p>
          </div>
          <button>
            <img src={icon} alt="" />
          </button>
        </Link>
        <div>
          <p className="text-gray-400 uppercase text-xs mt-5 mb-5 ml-4">
            социальные сети
          </p>
        </div>
        <Link to="instagram" className="flex justify-between">
          <div className="flex items-center">
            <img src={instagram} alt="" className="m-4 " />
            <p>Мы в инстаграм</p>
          </div>
          <button>
            <img src={icon} alt="" />
          </button>
        </Link>
        <Link to="vk" className="flex justify-between">
          <div className="flex items-center">
            <img src={vk} alt="" className="m-4 " />
            <p>Мы Вконтакте</p>
          </div>
          <button>
            <img src={icon} alt="" />
          </button>
        </Link>
        <hr className="mt-6 mb-6" />
        <div className="text-center flex flex-col">
          <Link to="" className="underline text-blue-500 mt-1 mb-1">
            Договор аренды
          </Link>
          <Link to="" className="underline text-blue-500 mt-1 mb-1">
            Условия исползования сервиса
          </Link>
          <Link to="" className="underline text-blue-500 mt-1 mb-1">
            Лицензионное соглашение
          </Link>
          <Link to="" className="underline text-blue-500 mt-1 mb-1">
            Условия исползования сервиса
          </Link>
          <Link to="" className="underline text-blue-500 mt-1 mb-1">
            Политика кофеденциальности
          </Link>
        </div>
        <hr className="mt-6 mb-6" />
        <p className="text-xs text-gray-400 text-center mb-6">версия 1.01</p>
      </div>
    </div>
  );
};

export default SettingsPanelView;
