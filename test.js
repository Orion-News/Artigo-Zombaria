const assert = require('assert')
const {
  ObterNome
} = require('./service')

const nock = require('nock')


describe('Deve Simular Uma Requisição',function (){
  this.beforeAll( () => {
    const response = { 
    login: 'neowide',
    id: 49925058,
    node_id: 'MDQ6VXNlcjQ5OTI1MDU4',
    avatar_url: 'https://avatars0.githubusercontent.com/u/49925058?v=4',
    gravatar_id: '',
    url: 'https://api.github.com/users/neowide',
    html_url: 'https://github.com/neowide',
    followers_url: 'https://api.github.com/users/neowide/followers',
    following_url:
     'https://api.github.com/users/neowide/following{/other_user}',
    gists_url: 'https://api.github.com/users/neowide/gists{/gist_id}',
    starred_url:
     'https://api.github.com/users/neowide/starred{/owner}{/repo}',
    subscriptions_url: 'https://api.github.com/users/neowide/subscriptions',
    organizations_url: 'https://api.github.com/users/neowide/orgs',
    repos_url: 'https://api.github.com/users/neowide/repos',
    events_url: 'https://api.github.com/users/neowide/events{/privacy}',
    received_events_url: 'https://api.github.com/users/neowide/received_events',
    type: 'User',
    site_admin: false,
    name: 'Geverson ',
    company: null,
    blog: '',
    location: 'SP',
    email: null,
    hireable: null,
    bio: null,
    public_repos: 12,
    public_gists: 0,
    followers: 0,
    following: 0,
    created_at: '2019-04-23T21:33:28Z',
    updated_at: '2019-09-20T23:07:12Z'
  }

    nock('https://api.github.com/users')
    .get(`/neowide`)
    .reply(200, response)

  })
    
  it('Vai utilizar o Nock para simular uma requisição', async () =>{
  
  const esperando = [{
    name: 'Geverson ',
    type: 'User'
  }]
  
  const nomeResult = `neowide`
  const resultado = await ObterNome(nomeResult)
  assert.deepEqual(resultado, esperando)
  
      })
  })
