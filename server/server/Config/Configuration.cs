using Elasticsearch.Net;
using Nest;

namespace server.Config
{
    public class Configuration
    {
        private Uri elasticSearchHost = new Uri("http://localhost:9200");
        public ElasticClient BuildElasticSeachClient()
        {
            var pool = new SingleNodeConnectionPool(elasticSearchHost);
            var settings = new ConnectionSettings(pool);
            settings.DefaultFieldNameInferrer(p => p);
            return new ElasticClient(settings);

        }
    }
}
