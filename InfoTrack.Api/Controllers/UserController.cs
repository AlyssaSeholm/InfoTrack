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
    public class UserController(IMediator mediator, ILogger<UserController> logger) : ControllerBase
    {
        private readonly IMediator _mediator = mediator;
        private readonly ILogger<UserController> _logger = logger; //TODO - add logging

        /// <summary> CreateUser </summary>
        /// <remarks> 
        /// </remarks>
        [HttpPost(Name = "CreateUserRoute")]
        [ProducesResponseType((int)HttpStatusCode.InternalServerError)]
        [ProducesResponseType(typeof(ProblemDetails), (int)HttpStatusCode.BadRequest)]
        [ProducesResponseType(typeof(CreateUserResponse), (int)HttpStatusCode.Created)]
        [SwaggerOperation(OperationId = "CreateUser")]
        public async Task<ActionResult<CreateUserResponse>> Create([FromBody] CreateUserRequest request) //=> await _mediator.Send(request);
        {
            var response = await _mediator.Send(request);

            //Todo: Add validation to see if email is available

            //TODO: add encryption to user id for response
            return new CreatedAtActionResult("Create", "UserController", new { id = response.User.Id }, response);
        }


        /// <summary> GetUserById </summary>
        /// <remarks> 
        /// </remarks>
        [HttpGet("ById/{Id}", Name = "GetUserByIdRoute")]
        [ProducesResponseType((int)HttpStatusCode.InternalServerError)]
        [ProducesResponseType(typeof(ProblemDetails), (int)HttpStatusCode.BadRequest)]
        [ProducesResponseType(typeof(GetUserByIdResponse), (int)HttpStatusCode.OK)]
        [ProducesResponseType(typeof(string), (int)HttpStatusCode.NotFound)]
        [SwaggerOperation(OperationId = "GetUserById")]
        public async Task<ActionResult<GetUserByIdResponse>> GetById([FromRoute] GetUserByIdRequest request)
        {
            if (string.IsNullOrEmpty(request.Id)) { return new BadRequestObjectResult("Missing Id from route."); }

            var response = await _mediator.Send(request); //TODO: Add decryption

            if (response.User == null) { return new NotFoundObjectResult(request.Id); }

            return new OkObjectResult(response);
        }

        /// <summary> GetUserByEmail </summary>
        /// <remarks> 
        /// </remarks>
        [HttpGet("ByEmail/{Email}", Name = "GetUserByEmailRoute")]
        [ProducesResponseType((int)HttpStatusCode.InternalServerError)]
        [ProducesResponseType(typeof(ProblemDetails), (int)HttpStatusCode.BadRequest)]
        [ProducesResponseType(typeof(GetUserByEmailResponse), (int)HttpStatusCode.OK)]
        [ProducesResponseType(typeof(string), (int)HttpStatusCode.NotFound)]
        [SwaggerOperation(OperationId = "GetUserByEmail")]
        public async Task<ActionResult<GetUserByEmailResponse>> GetByEmail([FromRoute] GetUserByEmailRequest request)
        {
            if (request == null || string.IsNullOrEmpty(request.Email))
            {
                return new BadRequestObjectResult("Email missing from route");
            }

            var response = await _mediator.Send(request);

            if (response.User == null || response.User.Id == "0"  )
            {
                return new NotFoundObjectResult($"User with email \"{request.Email}\" not found.");
            }

            return new OkObjectResult(response);
        }


        /// <summary> UpdateUser </summary>
        /// <remarks> 
        /// </remarks>
        [HttpPut("{Id}", Name = "UpdateUserRoute")]
        [ProducesResponseType((int)HttpStatusCode.InternalServerError)]
        [ProducesResponseType(typeof(ProblemDetails), (int)HttpStatusCode.BadRequest)]
        [ProducesResponseType(typeof(UpdateUserResponse), (int)HttpStatusCode.OK)]
        [SwaggerOperation(OperationId = "UpdateUser")]
        public async Task<ActionResult<UpdateUserResponse>> Update([FromBody] UpdateUserRequest request)
        {
            if (request == null || request.Id < 0)
            {
                return new BadRequestObjectResult("Email missing from route");
            }

            return await _mediator.Send(request);
        }


        /// <summary> DeleteUser </summary>
        /// <remarks> 
        /// </remarks>
        [HttpDelete("{Id}", Name = "DeleteUserByIdRoute")]
        [ProducesResponseType((int)HttpStatusCode.InternalServerError)]
        [ProducesResponseType(typeof(ProblemDetails), (int)HttpStatusCode.BadRequest)]
        [ProducesResponseType(typeof(UpdateUserResponse), (int)HttpStatusCode.OK)]
        //[ProducesResponseType((int)HttpStatusCode.NoContent)]
        [SwaggerOperation(OperationId = "DeleteUserById")]
        public async Task<IActionResult> DeleteById([FromRoute] DeleteUserByIdRequest request)
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
