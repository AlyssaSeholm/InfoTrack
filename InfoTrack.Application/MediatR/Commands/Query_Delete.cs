using InfoTrack.Domain.Entities.Services.Interfaces;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace InfoTrack.Application.MediatR.Commands
{
    public class DeleteQueryByIdRequest : IRequest<DeleteQueryByIdResponse>
    {
        [FromRoute]
        public int Id { get; set; }
    }

    /// <summary> DeletedQueryName will be empty string if no Query was deleted </summary>
    /// <param name="DeletedName">Will be empty if the Query lookup failed to return a Query entity.</param>
    public record DeleteQueryByIdResponse(string DeletedName);

    public class DeleteQueryByIdHandler(IQueryService queryService) : IRequestHandler<DeleteQueryByIdRequest, DeleteQueryByIdResponse>
    {
        private readonly IQueryService _queryService = queryService;

        public async Task<DeleteQueryByIdResponse> Handle(DeleteQueryByIdRequest request, CancellationToken cancellationToken)
        {
            var result = await _queryService.DeleteQueryById(request.Id, cancellationToken);

            return new DeleteQueryByIdResponse(result);
        }
    }
}
