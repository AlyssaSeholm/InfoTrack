using InfoTrack.Domain.Repositories.Interfaces;
using InfoTrack.Infrastructure.Services.Parse;
using Microsoft.Extensions.Hosting;

namespace InfoTrack.Domain.Entities.Services.Parse
{
    public class YahooResultParserService(ISearchRepository searchRepository, HttpClient httpClient, IHostEnvironment webHostEnvironment) 
        : ResultParserService(searchRepository, httpClient, webHostEnvironment)
    {
        public override Task<IEnumerable<ResultParse>> ParseResults(string htmlContent, CancellationToken cancellation)
        {
            throw new NotImplementedException();
        }
    }
}
