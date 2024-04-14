using InfoTrack.Application.Mediatr.Commands;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using System.Net;

namespace InfoTrack.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    [Produces("application/json")]
    public class CompanysController
    {
        private readonly IMediator _mediator;

        public CompanysController(IMediator mediator) => _mediator = mediator;

        [HttpPost(Name = "CreateCompanyRoute")]
        [ProducesResponseType((int)HttpStatusCode.InternalServerError)]
        [ProducesResponseType(typeof(ProblemDetails), (int)HttpStatusCode.BadRequest)]
        [ProducesResponseType(typeof(CreateCompanyResponse), (int)HttpStatusCode.OK)]
        public async Task<ActionResult<CreateCompanyResponse>> Create([FromBody] CreateCompanyRequest request)
            => await _mediator.Send(request);

        //[HttpPut(Name = "RescheduleCompanyRoute")]
        //[ProducesResponseType((int)HttpStatusCode.InternalServerError)]
        //[ProducesResponseType(typeof(ProblemDetails), (int)HttpStatusCode.BadRequest)]
        //[ProducesResponseType(typeof(RescheduleResponse), (int)HttpStatusCode.OK)]
        //public async Task<ActionResult<RescheduleResponse>> Reschedule([FromBody] RescheduleRequest request)
        //    => await _mediator.Send(request);

        //[HttpDelete("{CompanyId}", Name = "RemoveCompanyRoute")]
        //[ProducesResponseType((int)HttpStatusCode.InternalServerError)]
        //[ProducesResponseType(typeof(ProblemDetails), (int)HttpStatusCode.BadRequest)]
        //[ProducesResponseType((int)HttpStatusCode.OK)]
        //public async Task Remove([FromRoute] RemoveCompanyRequest request)
        //    => await _mediator.Send(request);

        //[HttpGet("{CompanyId}", Name = "GetCompanyByIdRoute")]
        //[ProducesResponseType((int)HttpStatusCode.InternalServerError)]
        //[ProducesResponseType(typeof(ProblemDetails), (int)HttpStatusCode.BadRequest)]
        //[ProducesResponseType(typeof(GetCompanyByIdResponse), (int)HttpStatusCode.OK)]
        //[ProducesResponseType(typeof(string), (int)HttpStatusCode.NotFound)]
        //public async Task<ActionResult<GetCompanyByIdResponse>> GetById([FromRoute] GetCompanyByIdRequest request)
        //{
        //    var response = await _mediator.Send(request);

        //    if (response.Company == null)
        //    {
        //        return new NotFoundObjectResult(request.CompanyId);
        //    }

        //    return response;
        //}

        //[HttpGet(Name = "GetCompanysRoute")]
        //[ProducesResponseType((int)HttpStatusCode.InternalServerError)]
        //[ProducesResponseType(typeof(ProblemDetails), (int)HttpStatusCode.BadRequest)]
        //[ProducesResponseType(typeof(GetCompanysResponse), (int)HttpStatusCode.OK)]
        //public async Task<ActionResult<GetCompanysResponse>> Get()
        //    => await _mediator.Send(new GetCompanysRequest());
    }
}
