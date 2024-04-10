using InfoTrack.Domain.Entities;
using InfoTrack.Domain.Repositories.Interfaces;
using Microsoft.Extensions.Hosting;

namespace InfoTrack.Infrastructure.Services.Parse
{
    public class BingResultParserService(ISearchRepository searchRepository, HttpClient httpClient, IHostEnvironment webHostEnvironment) 
        : ResultParserService(searchRepository, httpClient, webHostEnvironment)
    {
        public override Task<IEnumerable<ResultParse>> ParseResults(string htmlContent, CancellationToken cancellation)
        {
            throw new NotImplementedException();
        }
    }
}
