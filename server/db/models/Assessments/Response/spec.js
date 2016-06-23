var sinon = require('sinon');
const chai = require('chai');
chai.use(require('chai-as-promised'));
var should = chai.should();

var Sequelize = require('sequelize');
var db = require(global._dbPath);

require('./index.js')(db);
var sharedTests = require('../../sharedTests.js');


var Response = db.model('response');

describe('Response', function(){
  beforeEach('Sync DB', sharedTests.SyncDB.bind(this, db));
  it('exists', sharedTests.exists.bind(this, Response))
  it( 'can access class methods', sharedTests.classTest.bind(this, Response))
  it( 'can access instance methods', sharedTests.instanceTest.bind(this, Response))

  describe('fields', function(){
    it('url')
    it('line range')
    it('character range')
    it('filePath')
    describe('github', function(){
      it('repository')
      it('user')
      it('organization')
    })
    it('response hash')
    it('sha hash of document')
  })
  it( 'has a unique id field' )
  it( 'belongs to many annotations')
})