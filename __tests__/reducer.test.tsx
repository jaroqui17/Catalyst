import { CONSTRUCT_FILETREE } from '../src/reduxComponents/constants/actionTypes';
import { reducer } from '../src/reduxComponents/reducers/reducer'

var state = {};

beforeEach(() => {
  state = {
    fileTree: [],
    fileToView: '',
    toggleFolder: {},
    filePathOfProject: '',
    generatedTestCode: '',
    
    describes: {},
    its: {},
    expects: {},
    
    keyOfDescribe:0,
    keyOfIt:0,
    keyOfExpect: 0,
    componentObj: {},
    itInputObj: {},
  
    describePropBoolean:{},
    codeViewer: false,
    codeViewerChecker: true,
  };
})

describe('General reducer tests', () => {
  it('Should render without throwing an error', () => {
    expect(reducer(undefined, {type:undefined})).toEqual(state);
  });
  it('Should return original state in case of unknown action type', () => {
    expect(reducer(state, {type:'poo'})).toBe(state);
  });
});


describe('Testing CONSTRUCT_FILETREE', () => {
  const ACTION = {
    type: 'CONSTRUCT_FILETREE',
    payload: ['test',['test',['test']]]
  };
  it('Updates filetree with payload', () => {
    const { fileTree } = reducer(state, ACTION);
    expect(fileTree).toBe(ACTION.payload);
  });
  it('returns a state object not strictly equal to the original', () => {
    const { state:any } = reducer(state, ACTION);
    expect(reducer(state, ACTION)).not.toStrictEqual(state);
  });
  it('Reducer only affects fileTree', () => {
    let testState:any = state;
    testState['fileTree'] = ACTION.payload;
    expect(reducer(state, ACTION)).toEqual(testState);
  })
});

describe('Testing SET_FILE_VIEW', () => {
  const ACTION = {
    type: 'SET_FILE_VIEW',
    payload: 'testFile.ts'
  };
  it('Updates fileToView with payload', () => {
    const { fileToView } = reducer(state, ACTION);
    expect(fileToView).toBe(ACTION.payload);
  });
  it('returns a state object not strictly equal to the original', () => {
    const { state:any } = reducer(state, ACTION);
    expect(reducer(state, ACTION)).not.toStrictEqual(state);
  });
  it('Reducer only affects properties worked on', () => {
    let testState:any = state;
    testState['fileToView'] = ACTION.payload;
    testState['codeViewer'] = true;
    expect(reducer(state, ACTION)).toEqual(testState);
  })
});


describe('Testing SET_PROJECT_PATH', () => {
  const ACTION = {
    type: 'SET_PROJECT_PATH',
    payload: 'User/project/test/code'
  };
  it('Updates filePathOfProject with payload', () => {
    const { filePathOfProject } = reducer(state, ACTION);
    expect(filePathOfProject).toBe(ACTION.payload);
  });
  it('returns a state object not strictly equal to the original', () => {
    const { state:any } = reducer(state, ACTION);
    expect(reducer(state, ACTION)).not.toStrictEqual(state);
  });
  it('Reducer only affects filePathOfProject', () => {
    let testState:any = state;
    testState['filePathOfProject'] = ACTION.payload;
    expect(reducer(state, ACTION)).toEqual(testState);
  })
});

// describe('Testing REFRESH_STATE', () => {
//   const ACTION = {
//     type: 'REFRESH_STATE',
//   };
//   it('Updates refreshes entire state back to new', () => {
//     const { filePathOfProject } = reducer(state, ACTION);
//     expect(filePathOfProject).toBe(ACTION.payload);
//   });
//   it('returns a state object not strictly equal to the original', () => {
//     const { state:any } = reducer(state, ACTION);
//     expect(reducer(state, ACTION)).not.toStrictEqual(state);
//   });
//   it('Reducer only affects filePathOfProject', () => {
//     let testState:any = state;
//     testState['filePathOfProject'] = ACTION.payload;
//     expect(reducer(state, ACTION)).toEqual(testState);
//   })
// });