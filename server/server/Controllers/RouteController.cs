using Microsoft.AspNetCore.Mvc;
using Nest;
using server;

namespace server.Controllers
{
    [Route("api/user")]
    [ApiController]
    public class RouteController : ControllerBase
    {
        private readonly ElasticClient _client;


        public RouteController(ElasticClient _client)
        {
            this._client = _client;
        }

        // GET api/allUsers - get all the users in db 
        [HttpGet]

        public async Task<IEnumerable<User>> GetAllUsers()
        {

            var response = await _client.SearchAsync<User>(s => s
            .Index("users")
            .Size(10000)
            .Query(q => q
            .MatchAll()
            ));

            return response.Documents;
        }

        // GET api/user/search - get users by text that user enter in db - using elasticSearch ngram
        // fuilds names =     "Name","WorkTitle"
        [HttpPost("search")]
        public async Task<IEnumerable<User>> Search([FromBody] SearchReq searchReqest)
        {
            var response = await _client.SearchAsync<User>(s => s
            .Index("users")
            .Size(10000)
            .Query(q => q
            .MultiMatch(m => m.Query(searchReqest.Txt).Fields(f =>
            {
                searchReqest.Fields.ForEach(field => f.Field(field));
                return f;
            }).Analyzer("standard"))
            ));

            
            return response.Documents;



       }

        //.Analyzer("standard"))



        //GET api/user/search - get users by text that user enter in db - using my ngram
       [HttpPost("searchSelfNgram")]
        public async Task<IEnumerable<User>> SearchBySelfNgram([FromBody] SearchReq searchReqest)
        {

            string querryInjection = "";
            
            
            var response = await _client.SearchAsync<User>(s => s
            .Index("users")
            .Size(10000)
            .Query(q => q
            .Bool(b => b.
            Should(s =>
            
            
            s.
            MultiMatch(m => m.Query(searchReqest.Txt).Fields(f =>
            {
                searchReqest.Fields.ForEach(field => f.Field(field));
                return f;
            }))


            ))
            ));

            return response.Documents;


        }

    }





}



