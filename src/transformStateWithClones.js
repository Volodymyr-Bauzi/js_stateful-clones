'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 *
 * @return {Object[]}
 */
function transformStateWithClones(state, actions) {
  let workingState = { ...state };
  const result = [];

  actions.forEach((action) => {
    switch (action.type) {
      case 'addProperties':
        Object.assign(workingState, action.extraData);
        break;
      case 'removeProperties':
        action.keysToRemove.forEach((key) => delete workingState[key]);
        break;
      case 'clear':
        workingState = {};
        break;
      default:
        throw new Error(`Unknown action type:, ${action.type}`);
    }

    result.push({ ...workingState });
  });

  return result;
}

module.exports = transformStateWithClones;
