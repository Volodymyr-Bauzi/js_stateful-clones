/* eslint-disable no-console */
'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 *
 * @return {Object[]}
 */
function transformStateWithClones(state, actions) {
  const stateCopy = { ...state };
  const result = [];

  console.log('stateCopy: ', stateCopy);

  actions.forEach((action) => {
    console.log(action.type);

    switch (action.type) {
      case 'addProperties':
        console.log('action.type: ', action.type);
        Object.assign(stateCopy, action.extraData);
        break;
      case 'removeProperties':
        console.log(
          action.keysToRemove.forEach((key) => delete stateCopy[key]),
        );
        action.keysToRemove.forEach((key) => delete stateCopy[key]);
        break;
      case 'clear':
        Object.keys(stateCopy).forEach((key) => delete stateCopy[key]);
        break;
    }

    result.push({ ...stateCopy });
  });

  return result;
}

module.exports = transformStateWithClones;
