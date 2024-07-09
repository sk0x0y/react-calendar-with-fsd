import Calendar from '@widgets/calendar/ui';

import Holiday from '@widgets/holiday/ui';

import { PreviewFrame, Divider } from '@/shared/ui';

function App() {
  return (
    <PreviewFrame>
      <Calendar />

      <Divider />

      <Holiday />
    </PreviewFrame>
  );
}

export default App;
