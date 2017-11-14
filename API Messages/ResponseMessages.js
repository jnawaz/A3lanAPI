'use strict';

var APIResponses = {

    'API400': 'Bad Request.',

    // TOKEN
    // =============================================================================
    'TO001': 'Authentication Failed.',
    'TO002': 'There seems to be an authentication issue.',
    'TO003': 'Please ensure user credentials are correct',

    // GENERAL
    // =============================================================================

    // MOSQUE
    // =============================================================================
    'MO001': 'Unable to retrieve Mosques',
    'MO002': 'There was an error retrieving Mosques'
}

module.exports = Object.freeze(APIResponses);