import MainView from '@screens/Main/MainView';
import { ErrorBoundary } from '@components/ErrorBoundary/ErrorBoundary';

export function MainContainer({ children }) {
  return (
    <ErrorBoundary>
      <MainView children={children} />
    </ErrorBoundary>
  );
}
