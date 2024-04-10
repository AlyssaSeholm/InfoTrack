using InfoTrack.Application.MediatR.Commands;
using InfoTrack.Application.MediatR.Queries;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using Swashbuckle.AspNetCore.Annotations;
using System.Net;

namespace InfoTrack.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    [Produces("application/json")]
    public class QueryController(IMediator mediator, ILogger<QueryController> logger) : ControllerBase
    {
        private readonly IMediator _mediator = mediator;
        private readonly ILogger<QueryController> _logger = logger; //TODO - add logging

        /// <summary> CreateQuery </summary>
        /// <remarks> 
        /// </remarks>
        [HttpPost(Name = "CreateQueryRoute")]
        [ProducesResponseType((int)HttpStatusCode.InternalServerError)]
        [ProducesResponseType(typeof(ProblemDetails), (int)HttpStatusCode.BadRequest)]
        [ProducesResponseType(typeof(CreateQueryResponse), (int)HttpStatusCode.Created)]
        [SwaggerOperation(OperationId = "CreateQuery")]
        public async Task<ActionResult<CreateQueryResponse>> Create([FromBody] CreateQueryRequest request)
        {
            var response = await _mediator.Send(request);

            //Todo: Add validation

            return new CreatedAtActionResult("Create", "QueryController", new { id = response.Query.Id }, response);
        }


        /// <summary> GetQueryById </summary>
        /// <remarks> 
        /// </remarks>
        [HttpGet("ById/{Id}", Name = "GetQueryByIdRoute")]
        [ProducesResponseType((int)HttpStatusCode.InternalServerError)]
        [ProducesResponseType(typeof(ProblemDetails), (int)HttpStatusCode.BadRequest)]
        [ProducesResponseType(typeof(GetQueryByIdResponse), (int)HttpStatusCode.OK)]
        [ProducesResponseType(typeof(string), (int)HttpStatusCode.NotFound)]
        [SwaggerOperation(OperationId = "GetQueryById")]
        public async Task<ActionResult<GetQueryByIdResponse>> GetById([FromRoute] GetQueryByIdRequest request)
        {
            if (string.IsNullOrEmpty(request.Id)) { return new BadRequestObjectResult("Missing Id from route."); }

            var response = await _mediator.Send(request); //TODO: Add decryption

            if (response.Query == null) { return new NotFoundObjectResult(request.Id); }

            return new OkObjectResult(response);
        }


        /// <summary> UpdateQuery </summary>
        /// <remarks> 
        /// </remarks>
        [HttpPut("{Id}", Name = "UpdateQueryRoute")]
        [ProducesResponseType((int)HttpStatusCode.InternalServerError)]
        [ProducesResponseType(typeof(ProblemDetails), (int)HttpStatusCode.BadRequest)]
        [ProducesResponseType(typeof(UpdateQueryResponse), (int)HttpStatusCode.OK)]
        [SwaggerOperation(OperationId = "UpdateQuery")]
        public async Task<ActionResult<UpdateQueryResponse>> Update([FromBody] UpdateQueryRequest request)
        {
            if (request == null || request.Id < 0)
            {
                return new BadRequestObjectResult("Email missing from route");
            }

            return await _mediator.Send(request);
        }


        /// <summary> DeleteQuery </summary>
        /// <remarks> 
        /// </remarks>
        [HttpDelete("{Id}", Name = "DeleteQueryByIdRoute")]
        [ProducesResponseType((int)HttpStatusCode.InternalServerError)]
        [ProducesResponseType(typeof(ProblemDetails), (int)HttpStatusCode.BadRequest)]
        [ProducesResponseType(typeof(UpdateQueryResponse), (int)HttpStatusCode.OK)]
        [SwaggerOperation(OperationId = "DeleteQueryById")]
        public async Task<IActionResult> DeleteById([FromRoute] DeleteQueryByIdRequest request)
        {
            var response = await _mediator.Send(request);

            if (string.IsNullOrEmpty(response.DeletedName))
            {
                return new NotFoundObjectResult(new { id = request.Id, msg = "Unable to get user to delete." });
            }

            return new OkObjectResult(response);
        }
    }
}
