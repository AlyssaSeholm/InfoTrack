using InfoTrack.Application.MediatR.Queries;
using InfoTrack.Domain.Services.Interfaces;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace InfoTrack.Application.MediatR.Commands
{
    //public record DeleteCompanyByIdRequest(int Id) : IRequest<DeleteCompanyByIdResponse>;
    public class DeleteCompanyByIdRequest : IRequest<DeleteCompanyByIdResponse>
    {
        [FromRoute]
        public int Id { get; set; }
    }

    /// <summary> DeletedCompanyName will be empty string if no company was deleted </summary>
    /// <param name="DeletedCompanyName">Will be empty if the company lookup failed to return a company entity.</param>
    public record DeleteCompanyByIdResponse(string DeletedCompanyName);

    public class DeleteCompanyByIdHandler(ICompanyService companyService) : IRequestHandler<DeleteCompanyByIdRequest, DeleteCompanyByIdResponse>
    {
        private readonly ICompanyService _companyService = companyService;

        public async Task<DeleteCompanyByIdResponse> Handle(DeleteCompanyByIdRequest request, CancellationToken cancellationToken)
        {
            var result = await _companyService.DeleteCompanyById(request.Id, cancellationToken);

            return new DeleteCompanyByIdResponse(result);
        }
    }
}
