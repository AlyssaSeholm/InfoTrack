using InfoTrack.Application.Mediatr.Commands;
using InfoTrack.Application.Mediatr.Queries;
using InfoTrack.Domain.Services.Interfaces;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using System.Net;

namespace InfoTrack.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    [Produces("application/json")]
    public class SearchController(IMediator mediator) : ControllerBase
    {
        private readonly IMediator _mediator = mediator;

        //[HttpGet(Name = "GetCompanyByIdRoute")]
        //[ProducesResponseType((int)HttpStatusCode.InternalServerError)]
        //[ProducesResponseType(typeof(ProblemDetails), (int)HttpStatusCode.BadRequest)]
        //[ProducesResponseType(typeof(CreateCompanyResponse), (int)HttpStatusCode.OK)]
        //public async Task<ActionResult<GetCompanyByIdResponse>> GetCompanyById(GetCompanyByIdRequest request)
        //    => await _mediator.Send(request);


        //public async Task<IActionResult> Search(string query, string engine)
        //{
        //    var service = _searchServices.FirstOrDefault(s => s.Matches(engine));
        //    if (service == null) return NotFound("Search engine not supported.");

        //    var results = await service.PerformSearchAsync(query);
        //    return Ok(results);
        //}
    }
}
