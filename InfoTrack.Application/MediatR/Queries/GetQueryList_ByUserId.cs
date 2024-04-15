using AutoMapper;
using InfoTrack.Application.DTOs;
using InfoTrack.Domain.Entities.Services.Interfaces;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace InfoTrack.Application.MediatR.Queries
{
    //public record GetAllQueriesByUserIdRequest(string UserId) : IRequest<GetAllQueriesByUserIdResponse>;
    public class GetAllQueriesByUserIdRequest : IRequest<GetAllQueriesByUserIdResponse>
    {
        [FromRoute]
        public required string UserId { get; set; }
    }

    public record GetAllQueriesByUserIdResponse(IEnumerable<QueryDto> Queries);

    public class GetAllQueriesByUserIdHandler(IQueryService queryService, IMapper mapper)
        : IRequestHandler<GetAllQueriesByUserIdRequest, GetAllQueriesByUserIdResponse>
    {
        private readonly IQueryService _queryService = queryService;
        private readonly IMapper _mapper = mapper;

        public async Task<GetAllQueriesByUserIdResponse> Handle(GetAllQueriesByUserIdRequest request, CancellationToken cancellationToken)
        {
            var queries = await _queryService.GetQueryListByUserId(request.UserId, cancellationToken);

            var queryDtos = _mapper.Map<IEnumerable<QueryDto>>(queries);

            return new GetAllQueriesByUserIdResponse(queryDtos);
        }
    }
}
