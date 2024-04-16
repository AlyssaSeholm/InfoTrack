using AutoMapper;
using InfoTrack.Application.Common;
using InfoTrack.Application.DTOs;
using InfoTrack.Domain.Entities.Services.Interfaces;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace InfoTrack.Application.MediatR.Queries
{
    public class GetQueryByIdRequest : IRequest<GetQueryByIdResponse>
    {
        [FromRoute]
        public required string Id { get; set; }
    }

    public record GetQueryByIdResponse(QueryDto Query);

    public class GetQueryByIdHandler(IQueryService queryService, IMapper mapper) : IRequestHandler<GetQueryByIdRequest, GetQueryByIdResponse>
    {
        private readonly IQueryService _queryService = queryService;
        private readonly IMapper _mapper = mapper;

        public async Task<GetQueryByIdResponse> Handle(GetQueryByIdRequest request, CancellationToken cancellationToken)
        {
            if (!Int32.TryParse(request.Id, out int id))
            {
                return new GetQueryByIdResponse(QueryDto.CreateEmptyWithMessage(ResponseMessages.StatusType.Conversion_To_Int));
            }

            var query = await _queryService.GetQueryById(id, cancellationToken);

            if (query == null)
            {
                return new GetQueryByIdResponse(QueryDto.CreateEmptyWithMessage(ResponseMessages.StatusType.NotFound));
            }

            var response = new GetQueryByIdResponse(_mapper.Map<QueryDto>(query));

            return response;
        }
    }
}
