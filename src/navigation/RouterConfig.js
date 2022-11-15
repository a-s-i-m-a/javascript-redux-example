import React from 'react';
import { Route, Switch } from 'react-router-dom';
import {
  BOOKING,
  CAR,
  FILTER,
  LOGIN,
  MAIN,
  REGISTRATION,
  ROOT,
  TRANSFER_CERTIFICATE,
  SETTINGS,
  USER_SETTINGS,
  USER_SETTINGS_NUMBER,
  USER_SETTINGS_EMAIL,
  USER_PROFILE,
  USER_INSURANCE,
  CARD_SETTINGS,
  ADDCARD1,
  ADDCARD2,
  ADDCARD3,
  BOOKING_SHUTDOWN,
  SUPPORT,
  ZONE,
  SHOW_CAR,
  CONTRACT,
  RADAR,
  BOOKING_INSPECTION,
  BOOKING_FINISH,
  BOOKING_FINISHED,
} from './CONSTANTS';
import Home from '../screens/Home';
import Registration from '@screens/Registration';
import PrivateRoute from '@navigation/Auth/PrivateRoute';
import SearchPanel from '@screens/SearchPanel';
import Filter from '@screens/Filters';
import ShowCar from '@screens/ShowCar';
import Booking from '@screens/Booking';
import TransferCertificate from '@screens/TransferCertificate';
import MainContainer from '@screens/Main';
import Login from '@screens/Login';
import EmptyContainer from '@screens/Empty';

import Settings from '@screens/Settings/Settings';
import AddCard1 from '@screens/Settings/AddCards/addCard1';
import AddCard2 from '@screens/Settings/AddCards/addCard2';
import AddCard3 from '@screens/Settings/AddCards/addCard3';
import { NumberSettingContainer } from '../screens/Settings/PhoneNumberSettings/NumberSettingContainer';
import EmailSettingsContainer from '@screens/Settings/EmailSettings';
import { UserSettingsPanelContainer } from '@screens/Settings/UserSettings/UserSettingsPanelContainer';
import UserProfileSettingsContainer from '@screens/Settings/UserProfileSettings';
import InsuranceSettingsContainer from '@screens/Settings/InsuranceSettings';
import CardSettingsContainer from '@screens/Settings/CardSettings';

import BookingShutDownContainer from '@screens/bookigShutDown';
import SupportContainer from '@screens/Support';
import ZoneContainer from '@screens/Zone';
import ContractContainer from '@screens/Contract';
import RadarContainer from '@screens/Radar';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import BookingInspectionContainer from '@screens/BookingInspetion';
import { BookingFinishContainer } from '@screens/BookingFinish/bookingFinishContainer';
import { BookingFinishedContainer } from '@screens/BookingFinished/bookingFinishedContainer';

export const RouterConfig = () => {
  return (
    <div>
      <TransitionGroup>
        <CSSTransition in={true} classNames="fade" timeout={300}>
          <Switch>
            <PrivateRoute exact path={BOOKING_SHUTDOWN}>
              <BookingShutDownContainer />
            </PrivateRoute>
            {/* List all public routes here */}
            <PrivateRoute exact path={SETTINGS}>
              <Settings />
            </PrivateRoute>
            <PrivateRoute exact path={SUPPORT}>
              <SupportContainer />
            </PrivateRoute>
            <PrivateRoute exact path={ZONE}>
              <ZoneContainer />
            </PrivateRoute>
            <PrivateRoute exact path={CONTRACT}>
              <ContractContainer />
            </PrivateRoute>
            <PrivateRoute exact path={RADAR}>
              <RadarContainer />
            </PrivateRoute>
            <PrivateRoute exact path={SHOW_CAR}>
              <ShowCar />
            </PrivateRoute>
            <PrivateRoute exact path={USER_SETTINGS}>
              <UserSettingsPanelContainer />
            </PrivateRoute>
            <PrivateRoute exact path={USER_SETTINGS_NUMBER}>
              <NumberSettingContainer />
            </PrivateRoute>
            <PrivateRoute exact path={USER_SETTINGS_EMAIL}>
              <EmailSettingsContainer />
            </PrivateRoute>
            <PrivateRoute exact path={USER_PROFILE}>
              <UserProfileSettingsContainer />
            </PrivateRoute>
            <PrivateRoute exact path={USER_INSURANCE}>
              <InsuranceSettingsContainer />
            </PrivateRoute>
            <PrivateRoute exact path={CARD_SETTINGS}>
              <CardSettingsContainer />
            </PrivateRoute>
            <PrivateRoute exact path={ADDCARD1}>
              <AddCard1 />
            </PrivateRoute>
            <PrivateRoute exact path={ADDCARD2}>
              <AddCard2 />
            </PrivateRoute>
            <PrivateRoute exact path={ADDCARD3}>
              <AddCard3 />
            </PrivateRoute>
            <Route path={REGISTRATION}>
              <Registration />
            </Route>
            <Route exact path={ROOT}>
              <Home />
            </Route>
            <Route exact path={LOGIN}>
              <EmptyContainer>
                <Login />
              </EmptyContainer>
            </Route>
            <Route exact path={TRANSFER_CERTIFICATE}>
              <TransferCertificate />
            </Route>
            <PrivateRoute exact path={MAIN}>
              <MainContainer>
                <SearchPanel />
              </MainContainer>
            </PrivateRoute>
            <PrivateRoute exact path={FILTER}>
              <MainContainer>
                <Filter />
              </MainContainer>
            </PrivateRoute>
            <PrivateRoute exact path={CAR}>
              <MainContainer>
                <ShowCar />
              </MainContainer>
            </PrivateRoute>
            <PrivateRoute exact path={BOOKING}>
              <MainContainer>
                <Booking />
              </MainContainer>
            </PrivateRoute>
            <PrivateRoute exact path={BOOKING_INSPECTION}>
              <BookingInspectionContainer />
            </PrivateRoute>
            <PrivateRoute exact path={BOOKING_FINISH}>
              <BookingFinishContainer />
            </PrivateRoute>
            <PrivateRoute exact path={BOOKING_FINISHED}>
              <BookingFinishedContainer />
            </PrivateRoute>
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
};
