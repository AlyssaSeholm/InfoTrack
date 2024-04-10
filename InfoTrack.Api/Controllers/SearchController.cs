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
    public class SearchController(IMediator mediator, ILogger<SearchController> logger) : ControllerBase
    {
        private readonly IMediator _mediator = mediator;
        private readonly ILogger<SearchController> _logger = logger; //TODO - add logging

        /// <summary> CreateSearch </summary>
        /// <remarks> 
        /// </remarks>
        [HttpPost("ByQueryId", Name = "CreateSearchByQueryIdRoute")]
        [ProducesResponseType((int)HttpStatusCode.InternalServerError)]
        [ProducesResponseType(typeof(ProblemDetails), (int)HttpStatusCode.BadRequest)]
        [ProducesResponseType(typeof(CreateSearchResponse), (int)HttpStatusCode.Created)]
        [SwaggerOperation(OperationId = "CreateSearchByQueryId")]
        public async Task<ActionResult<CreateSearchResponse>> CreateByQueryId([FromBody] CreateSearchRequest request) //=> await _mediator.Send(request);
        {
            var response = await _mediator.Send(request);

            //Todo: Add validation to see if email is available

            //TODO: add encryption to user id for response
            return new CreatedAtActionResult("CreateByQueryId", "Search", new { id = response.Search.Id }, response);
        }


        /// <summary> GetSearchResults_ByQueryId </summary>
        /// <remarks> 
        /// </remarks>
        [HttpGet("ByQueryId/{QueryId}", Name = "GetSearchResultsByQueryIdRoute")]
        [ProducesResponseType((int)HttpStatusCode.InternalServerError)]
        [ProducesResponseType(typeof(ProblemDetails), (int)HttpStatusCode.BadRequest)]
        [ProducesResponseType(typeof(GetSearchResultsByQueryIdResponse), (int)HttpStatusCode.OK)]
        [ProducesResponseType(typeof(string), (int)HttpStatusCode.NotFound)]
        [SwaggerOperation(OperationId = "GetSearchResultsByQueryId")]
        public async Task<ActionResult<GetSearchResultsByQueryIdResponse>> GetByQueryId([FromRoute] GetSearchResultsByQueryIdRequest request)
        {
            if (request == null || request.QueryId < 0) { return new BadRequestObjectResult("Missing Id from route."); }

            var response = await _mediator.Send(request); //TODO: Add decryption

            if (response.SearchResults == null) { return new NotFoundObjectResult(request.QueryId); }

            return new OkObjectResult(response);
        }


        /// <summary> GetSearchResults_ByUserId </summary>
        /// <remarks> 
        /// </remarks>
        [HttpGet("ByUserId/{UserId}", Name = "GetSearchResultsByUserIdRoute")]
        [ProducesResponseType((int)HttpStatusCode.InternalServerError)]
        [ProducesResponseType(typeof(ProblemDetails), (int)HttpStatusCode.BadRequest)]
        [ProducesResponseType(typeof(GetAllSearchResultsByUserIdResponse), (int)HttpStatusCode.OK)]
        [ProducesResponseType(typeof(string), (int)HttpStatusCode.NotFound)]
        [SwaggerOperation(OperationId = "GetSearchResultsByQueryId")]
        public async Task<ActionResult<GetAllSearchResultsByUserIdResponse>> GetByUserId([FromRoute] GetAllSearchResultsByUserIdRequest request)
        {
            if (request == null || string.IsNullOrEmpty(request.UserId)) { return new BadRequestObjectResult("Missing Id from route."); }

            var response = await _mediator.Send(request); //TODO: Add decryption

            if (response.SearchResults == null) { return new NotFoundObjectResult(request.UserId); }

            return new OkObjectResult(response);
        }

        //TODO
        ///// <summary> DeleteSearch </summary>
        ///// <remarks> 
        ///// </remarks>
        //[HttpDelete("{Id}", Name = "DeleteSearchByIdRoute")]
        //[ProducesResponseType((int)HttpStatusCode.InternalServerError)]
        //[ProducesResponseType(typeof(ProblemDetails), (int)HttpStatusCode.BadRequest)]
        //[ProducesResponseType(typeof(UpdateSearchResponse), (int)HttpStatusCode.OK)]
        ////[ProducesResponseType((int)HttpStatusCode.NoContent)]
        //[SwaggerOperation(OperationId = "DeleteSearchById")]
        //public async Task<IActionResult> DeleteById([FromRoute] DeleteSearchByIdRequest request)
        //{
        //    var response = await _mediator.Send(request);

        //    if (string.IsNullOrEmpty(response.DeletedName))
        //    {
        //        return new NotFoundObjectResult(new { id = request.Id, msg = "Unable to get user to delete." });
        //    }

        //    return new OkObjectResult(response);
        //}
    }
}
