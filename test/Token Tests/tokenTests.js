const expect = require('chai').expect;
const nock = require('nock');

const response = require('./tokenResponse');

describe('Token Tests', () => {
    
    nock('https://a3lan-api.herokuapp.com')
      .post('/api/token')
      .reply(201, response);

      it('token should expire in less than a day', function(){
        expect(typeof response).to.equal('object');
        expect(response.expiresIn).to.equal(86399)
      })
        
  });