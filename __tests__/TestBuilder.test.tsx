import React from 'react';
import { shallow, mount } from 'enzyme';
import { TestBuilder } from '../src/components/TestBuilder';
import { DescribeBlock } from '../src/components/DescribeBlock';

const wrapper = shallow(<TestBuilder />)
//console.log(wrapper.debug());

describe('test builder', () => {

  it('should render a desribe Component', () => {
    expect(wrapper.containsMatchingElement(<button>+ Describe Block</button>)).toBe(true);
  });
});