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
    public class CompanyController(IMediator mediator, ILogger<CompanyController> logger)
    {
        private readonly IMediator _mediator = mediator;
        private readonly ILogger<CompanyController> _logger = logger; //TODO - add logging

        /// <summary> CreateCompany </summary>
        /// <remarks> 
        ///     -- Required Request Values: int UserId, string CompanyName, string WebsiteUrl, DateTime CreatedOn. 
        ///     -- Response: a Company object.
        ///     -- Possible Status Codes: 201, 400, 500.
        /// </remarks>
        [HttpPost(Name = "CreateCompanyRoute")]
        [ProducesResponseType((int)HttpStatusCode.InternalServerError)]
        [ProducesResponseType(typeof(ProblemDetails), (int)HttpStatusCode.BadRequest)]
        [ProducesResponseType(typeof(CreateCompanyResponse), (int)HttpStatusCode.Created)]
        [SwaggerOperation(OperationId = "CreateCompany")]
        public async Task<ActionResult<CreateCompanyResponse>> Create([FromBody] CreateCompanyRequest request) //=> await _mediator.Send(request);
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

            //TODO: add encryption to company id for response
            return new CreatedAtActionResult("Create", "Company",  new { id = response.Company.Id }, response);
        }


        /// <summary> GetCompanyById </summary>
        /// <remarks> 
        ///    -- Required Request Values: string companyId. 
        ///    -- Response: a Company object.  
        ///    -- Possible Status Codes: 200, 400, 404, 500.
        /// </remarks>
        [HttpGet("ById/{Id}", Name = "GetCompanyByIdRoute")]
        [ProducesResponseType((int)HttpStatusCode.InternalServerError)]
        [ProducesResponseType(typeof(ProblemDetails), (int)HttpStatusCode.BadRequest)]
        [ProducesResponseType(typeof(GetCompanyByIdResponse), (int)HttpStatusCode.OK)]
        [ProducesResponseType(typeof(string), (int)HttpStatusCode.NotFound)]
        [SwaggerOperation(OperationId = "GetCompanyById")]
        public async Task<ActionResult<GetCompanyByIdResponse>> GetById([FromRoute] GetCompanyByIdRequest request) //string companyId) //[FromRoute] GetCompanyByIdRequest request)
        {
            if (string.IsNullOrEmpty(request.Id)) { return new BadRequestObjectResult("spooky!"); }

            var response = await _mediator.Send(request); //TODO: Add decryption

            if (response.Company == null) { return new NotFoundObjectResult(request.Id); }

            return new OkObjectResult(response);
        }

        /// <summary> GetCompanyByName </summary>
        /// <remarks> 
        ///    -- Required Request Values: string name. 
        ///    -- Response: a Company object.  
        ///    -- Possible Status Codes: 200, 400, 404, 500.
        /// </remarks>
        [HttpGet("ByName/{Name}", Name = "GetCompanyByNameRoute")]
        [ProducesResponseType((int)HttpStatusCode.InternalServerError)]
        [ProducesResponseType(typeof(ProblemDetails), (int)HttpStatusCode.BadRequest)]
        [ProducesResponseType(typeof(GetCompanyByNameResponse), (int)HttpStatusCode.OK)]
        [ProducesResponseType(typeof(string), (int)HttpStatusCode.NotFound)]
        [SwaggerOperation(OperationId = "GetCompanyByName")]
        public async Task<ActionResult<GetCompanyByNameResponse>> GetByName([FromRoute] GetCompanyByNameRequest request)
        {
            if (request == null || string.IsNullOrEmpty(request.Name))
            {
                return new BadRequestObjectResult("Name missing from route");
            }

            var response = await _mediator.Send(request);

            if (response.Company == null)
            {
                return new NotFoundObjectResult($"Company with name \"{request}\" not found.");
                //TODO: custom response messages
                //var msg = $"Company with name \"{name}\" not found.";
                //return ResponseMsgHelper.NotFound(StatusType.NotFound, msg, response);
            }

            return new OkObjectResult(response);
        }


        /// <summary> GetAllCompanies </summary>
        /// <remarks> 
        ///    -- Required Request Values: 
        ///    -- Response: list of Company objects.  
        ///    -- Possible Status Codes: 200, 400, 500.
        /// </remarks>
        [HttpGet("All/", Name = "GetAllCompaniesRoute")]
        [ProducesResponseType((int)HttpStatusCode.InternalServerError)]
        [ProducesResponseType(typeof(ProblemDetails), (int)HttpStatusCode.BadRequest)]
        [ProducesResponseType(typeof(List<GetAllCompaniesResponse>), (int)HttpStatusCode.OK)]
        [SwaggerOperation(OperationId = "GetAllCompanies")]
        public async Task<ActionResult<List<GetAllCompaniesResponse>>> GetAll()
        {
            var response = await _mediator.Send(new GetAllCompaniesRequest());
            return new OkObjectResult(response);
        }

        /// <summary> GetCompanyListByUserId </summary>
        /// <remarks> 
        ///    -- Required Request Values: string companyId. 
        ///    -- Response: list of Company objects for a given user by their id.
        ///    -- Possible Status Codes: 200, 400, 500.
        /// </remarks>
        [HttpGet("AllByUserId/{UserId}", Name = "GetAllCompaniesByUserIdRoute")] //TODO: Fix this to return UserCompanyDto vs CompanyDto
        [ProducesResponseType((int)HttpStatusCode.InternalServerError)]
        [ProducesResponseType(typeof(ProblemDetails), (int)HttpStatusCode.BadRequest)]
        [ProducesResponseType(typeof(List<GetAllCompaniesByUserIdResponse>), (int)HttpStatusCode.OK)]
        [SwaggerOperation(OperationId = "GetAllCompaniesByUserId")]
        public async Task<ActionResult<List<GetAllCompaniesByUserIdResponse>>> GetAllByUserId([FromRoute] GetAllCompaniesByUserIdRequest request)
        {
            if (request == null) { return new BadRequestObjectResult("Id missing from route"); }

            var response = await _mediator.Send(request);
            return new OkObjectResult(response);
        }


        /// <summary> UpdateCompany </summary>
        /// <remarks> 
        ///    -- Required Request Values: string companyId. 
        ///    -- Response: a Company object.  
        ///    -- Possible Status Codes: 201, 400, 500.
        /// </remarks>
        [HttpPut("{companyId}", Name = "UpdateCompanyRoute")]
        [ProducesResponseType((int)HttpStatusCode.InternalServerError)]
        [ProducesResponseType(typeof(ProblemDetails), (int)HttpStatusCode.BadRequest)]
        [ProducesResponseType(typeof(UpdateCompanyResponse), (int)HttpStatusCode.OK)]
        [SwaggerOperation(OperationId = "UpdateCompany")]
        public async Task<ActionResult<UpdateCompanyResponse>> Update(int companyId, [FromBody] UpdateCompanyRequest request)
        {
            if (companyId != request.Id) { return new BadRequestObjectResult("ID mismatch"); }

            return await _mediator.Send(request);
        }


        /// <summary> DeleteCompany </summary>
        /// <remarks> 
        ///    -- Required Request Values: string companyId. 
        ///    -- Response: name of deleted company, if one was deleted  
        ///    -- Possible Status Codes: 201 or 204, 400, 500.
        /// </remarks>
        [HttpDelete("{Id}", Name = "DeleteCompanyByIdRoute")]
        [ProducesResponseType((int)HttpStatusCode.InternalServerError)]
        [ProducesResponseType(typeof(ProblemDetails), (int)HttpStatusCode.BadRequest)]
        [ProducesResponseType(typeof(UpdateCompanyResponse), (int)HttpStatusCode.OK)]
        //[ProducesResponseType((int)HttpStatusCode.NoContent)]
        [SwaggerOperation(OperationId = "DeleteCompanyById")]
        public async Task<IActionResult> DeleteById([FromRoute] DeleteCompanyByIdRequest request)
        {
            var response = await _mediator.Send(request);

            if (string.IsNullOrEmpty(response.DeletedCompanyName))
            {
                return new NotFoundObjectResult(new { id = request.Id, msg = "Unable to get company to delete." });
            }

            return new OkObjectResult(response);
        }
    }
}
