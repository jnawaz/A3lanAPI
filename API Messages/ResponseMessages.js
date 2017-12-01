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
    'GO001': 'User authentication failed, your token may be invalid, please sign in again.',
    'GO002': 'No token provided.',

    // MOSQUE
    // =============================================================================
    'MO001': 'Unable to retrieve Mosques.',
    'MO002': 'There was an error retrieving Mosques.',
    'MO003': 'Unexpected error, please try again.\nIf the problem persists please contact support.',

    // USER
    // =============================================================================
    'US001': 'User details missing.',
    'US002': 'Email and Password missing.',
    'US003': 'User locked out. \nPlease wait 15 minutes and try again.',
    'US004': 'Unable to retrieve user details.',
    'US005': 'Unexpected error, please try again.\nIf the problem persists please contact support.'
}

module.exports = Object.freeze(APIResponses);