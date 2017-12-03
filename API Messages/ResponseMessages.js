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
    'MO004': 'There was an error retrieving the mosque.',
    'MO005': 'Unexpected error, please try again.\nIf the problem persists please contact support.',
    'MO006': 'A problem was encountered whilst trying to follow this mosque.\nPlease try again later, if the problem persists please contact support',
    'MO007': 'A problem was encountered whilst trying to follow this mosque.\nPlease try again later, if the problem persists please contact support',
    'MO008': 'An unexpected error occurred whilst trying to follow this mosque.\n Please try again later, if the problem persists please contact support.',

    // USER
    // =============================================================================
    'US001': 'User details missing.',
    'US002': 'Email and Password missing.',
    'US003': 'User locked out. \nPlease wait 15 minutes and try again.',
    'US004': 'Unable to retrieve user details.',
    'US005': 'Unexpected error, please try again.\nIf the problem persists please contact support.',
    'US006': 'Sign up encountered a problem, please try again.\nIf the problem persists please contact support.',
    'US007': 'A3lan encountered a problem saving your sign up details. Please contact support.',
    'US008': 'Unable to update user details.\nPlease provide user details.',
    'US009': 'An unexpected error occurred when trying to update user details.\nPlease try again later, if the problem perisists please contact support.',
    'US010': 'A problem was encountered whilst updating the user details.\nPlease try again later, if the problem perisists please contact support.'
}

module.exports = Object.freeze(APIResponses);