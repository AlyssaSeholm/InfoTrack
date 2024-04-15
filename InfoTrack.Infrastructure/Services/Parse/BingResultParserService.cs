using InfoTrack.Domain.Repositories.Interfaces;
using InfoTrack.Infrastructure.Services.Parse;
using Microsoft.Extensions.Hosting;

namespace InfoTrack.Domain.Entities.Services.Parse
{
    /// <summary>
    /// #DevNote: Eventually add in more search engines.
    /// </summary>
    /// <param name="searchRepository"></param>
    /// <param name="httpClient"></param>
    /// <param name="webHostEnvironment"></param>
    public class BingResultParserService(ISearchRepository searchRepository, HttpClient httpClient, IHostEnvironment webHostEnvironment) 
        : ResultParserService(searchRepository, httpClient, webHostEnvironment)
    {
        public override Task<IEnumerable<ResultParse>> ParseResults(string htmlContent, CancellationToken cancellation)
        {
            throw new NotImplementedException();
        }
    }
}
