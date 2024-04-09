using AutoMapper;
using InfoTrack.Application.Common;
using InfoTrack.Application.DTOs;
using InfoTrack.Application.DTOs;
using InfoTrack.Domain.Services.Interfaces;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace InfoTrack.Application.MediatR.Queries
{
    public class GetUserByIdRequest : IRequest<GetUserByIdResponse>
    {
        [FromRoute]
        public required string Id { get; set; }
    }

    public record GetUserByIdResponse(UserDto User);

    public class GetUserByIdHandler(IUserService companyService, IMapper mapper) : IRequestHandler<GetUserByIdRequest, GetUserByIdResponse>
    {
        private readonly IUserService _companyService = companyService;
        private readonly IMapper _mapper = mapper;

        public async Task<GetUserByIdResponse> Handle(GetUserByIdRequest request, CancellationToken cancellationToken)
        {
            if (!Int32.TryParse(request.Id, out int id))
            {
                return new GetUserByIdResponse(UserDto.CreateEmptyWithMessage(ResponseMessages.StatusType.Conversion_To_Int));
            }

            var company = await _companyService.GetUserById(id, cancellationToken);

            if (company == null)
            {
                return new GetUserByIdResponse(UserDto.CreateEmptyWithMessage(ResponseMessages.StatusType.NotFound));
            }

            var response = new GetUserByIdResponse(_mapper.Map<UserDto>(company));

            return response;
        }
    }
}
