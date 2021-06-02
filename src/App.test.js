import { render } from '@testing-library/react';

import App from './App';

// test if app has been rendered
test('checkAppRender', () => {
   const { queryByTitle } = render(<App />);
   const app = queryByTitle('app');
   expect(app).toBeTruthy();
});
