using InfoTrack.Application.Mediatr.Commands;
using InfoTrack.Application.Mediatr.Queries;
using InfoTrack.Application.MediatR.Commands;
using InfoTrack.Application.MediatR.Queries;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using Swashbuckle.AspNetCore.Annotations;
using System.Net;
using static InfoTrack.Application.Common.ResponseMessages;

namespace InfoTrack.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    [Produces("application/json")]
    public class UserController(IMediator mediator, ILogger<UserController> logger)
    {
        private readonly IMediator _mediator = mediator;
        private readonly ILogger<UserController> _logger = logger; //TODO - add logging

        /// <summary> CreateUser </summary>
        /// <remarks> 
        ///     -- Required Request Values: int UserId, string UserName, string WebsiteUrl, DateTime CreatedOn. 
        ///     -- Response: a User object.
        ///     -- Possible Status Codes: 201, 400, 500.
        /// </remarks>
        [HttpPost(Name = "CreateUserRoute")]
        [ProducesResponseType((int)HttpStatusCode.InternalServerError)]
        [ProducesResponseType(typeof(ProblemDetails), (int)HttpStatusCode.BadRequest)]
        [ProducesResponseType(typeof(CreateUserResponse), (int)HttpStatusCode.Created)]
        [SwaggerOperation(OperationId = "CreateUser")]
        public async Task<ActionResult<CreateUserResponse>> Create([FromBody] CreateUserRequest request) //=> await _mediator.Send(request);
        {
            var response = await _mediator.Send(request);

            //TODO- validator
            //var validator = new AddItemValidator();
            //var results = validator.Validate(item);
            //if (!results.IsValid)
            //{
            //    var error = results.Errors.FirstOrDefault();
            //    return ResponseMessage.BadRequest(error.ErrorCode, error.ErrorMessage);
            //}

            //TODO: add encryption to user id for response
            return new CreatedAtActionResult("Create", "UserController", new { id = response.User.Id }, response);
        }


        /// <summary> GetUserById </summary>
        /// <remarks> 
        ///    -- Required Request Values: string userId. 
        ///    -- Response: a User object.  
        ///    -- Possible Status Codes: 200, 400, 404, 500.
        /// </remarks>
        [HttpGet("ById/{Id}", Name = "GetUserByIdRoute")]
        //[HttpGet]
        //[Route("api/User/GetById/{userId}", Name = "GetByIdd")]
        [ProducesResponseType((int)HttpStatusCode.InternalServerError)]
        [ProducesResponseType(typeof(ProblemDetails), (int)HttpStatusCode.BadRequest)]
        [ProducesResponseType(typeof(GetUserByIdResponse), (int)HttpStatusCode.OK)]
        [ProducesResponseType(typeof(string), (int)HttpStatusCode.NotFound)]
        [SwaggerOperation(OperationId = "GetUserById")]
        public async Task<ActionResult<GetUserByIdResponse>> GetById([FromRoute] GetUserByIdRequest request) //string userId) //[FromRoute] GetUserByIdRequest request)
        {
            if (string.IsNullOrEmpty(request.Id)) { return new BadRequestObjectResult("spooky!"); }

            var response = await _mediator.Send(request); //TODO: Add decryption

            if (response.User == null) { return new NotFoundObjectResult(request.Id); }

            return new OkObjectResult(response);
        }

        ///// <summary> GetUserByEmail </summary>
        ///// <remarks> 
        /////    -- Required Request Values: string name. 
        /////    -- Response: a User object.  
        /////    -- Possible Status Codes: 200, 400, 404, 500.
        ///// </remarks>
        //[HttpGet("ByName/{name}", Name = "GetUserByNameRoute")]
        //[ProducesResponseType((int)HttpStatusCode.InternalServerError)]
        //[ProducesResponseType(typeof(ProblemDetails), (int)HttpStatusCode.BadRequest)]
        //[ProducesResponseType(typeof(GetUserByNameResponse), (int)HttpStatusCode.OK)]
        //[ProducesResponseType(typeof(string), (int)HttpStatusCode.NotFound)]
        //[SwaggerOperation(OperationId = "GetUserByName")]
        //public async Task<ActionResult<GetUserByNameResponse>> GetByName([FromRoute] GetUserByNameRequest request)
        //{
        //    if (request == null || string.IsNullOrEmpty(request.Name))
        //    {
        //        return new BadRequestObjectResult("Name missing from route");
        //    }

        //    var response = await _mediator.Send(request);

        //    if (response.User == null)
        //    {
        //        return new NotFoundObjectResult($"User with name \"{request}\" not found.");
        //        //TODO: custom response messages
        //        //var msg = $"User with name \"{name}\" not found.";
        //        //return ResponseMsgHelper.NotFound(StatusType.NotFound, msg, response);
        //    }

        //    return new OkObjectResult(response);
        //}


        ///// <summary> UpdateUser </summary>
        ///// <remarks> 
        /////    -- Required Request Values: string userId. 
        /////    -- Response: a User object.  
        /////    -- Possible Status Codes: 201, 400, 500.
        ///// </remarks>
        //[HttpPut("{userId}", Name = "UpdateUserRoute")]
        //[ProducesResponseType((int)HttpStatusCode.InternalServerError)]
        //[ProducesResponseType(typeof(ProblemDetails), (int)HttpStatusCode.BadRequest)]
        //[ProducesResponseType(typeof(UpdateUserResponse), (int)HttpStatusCode.OK)]
        //[SwaggerOperation(OperationId = "UpdateUser")]
        //public async Task<ActionResult<UpdateUserResponse>> Update(int userId, [FromBody] UpdateUserRequest request)
        //{
        //    if (userId != request.Id) { return new BadRequestObjectResult("ID mismatch"); }

        //    return await _mediator.Send(request);
        //}


        ///// <summary> DeleteUser </summary>
        ///// <remarks> 
        /////    -- Required Request Values: string userId. 
        /////    -- Response: name of deleted user, if one was deleted  
        /////    -- Possible Status Codes: 201 or 204, 400, 500.
        ///// </remarks>
        //[HttpDelete("{userId}", Name = "DeleteUserByIdRoute")]
        //[ProducesResponseType((int)HttpStatusCode.InternalServerError)]
        //[ProducesResponseType(typeof(ProblemDetails), (int)HttpStatusCode.BadRequest)]
        //[ProducesResponseType(typeof(UpdateUserResponse), (int)HttpStatusCode.OK)]
        ////[ProducesResponseType((int)HttpStatusCode.NoContent)]
        //[SwaggerOperation(OperationId = "DeleteUserById")]
        //public async Task<IActionResult> DeleteById([FromRoute] DeleteUserByIdRequest request)
        //{
        //    var response = await _mediator.Send(request);

        //    if (string.IsNullOrEmpty(response.DeletedUserName))
        //    {
        //        return new NotFoundObjectResult(new { id = request.Id, msg = "Unable to get user to delete." });
        //    }

        //    return new OkObjectResult(response);
        //}
    }
}
