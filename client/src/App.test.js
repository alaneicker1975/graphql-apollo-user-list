import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { shallow, configure } from 'enzyme';
import App from './App';

configure({ adapter: new Adapter() });

describe('<App />', () => {
  let app;

  beforeEach(() => {
    app = shallow(<App />);
  });

  it('Should render without errors', () => {
    expect(app).toHaveLength(1);
  });
});
